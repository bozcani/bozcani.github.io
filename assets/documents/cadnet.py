from meta_data_creator import MetaDataCreator

from auairtools.auair import AUAIR

import tensorflow as tf
import numpy as np
import cv2
import datetime
import os
import random
import json
import datetime

param = {}
# Paths to annotation file and source data.
param['batch_size'] = 32
param['input_image_shape'] = (128, 128, 3)
param['input_od_output_shape'] = (16,16, 8)
param['input_frame_shape'] = (64,64,3)
param['image_shape'] = (1080, 1920, 3)
param['num_classes'] = 8

param['epochs'] = 20
param['base_learning_rate'] = 0.01
param['lr_schedule'] = [(0.1, 5), (0.01, 8)]
param['l2_weight_decay'] = 2e-4
param['batch_norm_decay'] = 0.997
param['batch_norm_epsilon'] = 1e-5
param['optimizer'] = 'rmsprop'
#param['loss'] = 'mse'
param['annotation_file'] = '/home/ilkerbozcan/Downloads/annotations.json'
param['data_folder'] = '/home/ilkerbozcan/Downloads/images'

param['train_fname'] = "train-samples.txt"
param['val_fname'] = "val-samples.txt"
param['latent_dim'] = 64

param['seqlen'] = 3
param['window_gap'] = 200
param['overlap'] = 2
param['input_index'] = 0

param['input_gps_shape'] = 1
param['input_time_shape'] = 1


now = datetime.datetime.now()
name = now.strftime("%Y-%m-%d-%H-%M")

with open(name, "w+") as outfile:
    json.dump(param, outfile, indent=4)


METADATACREATOR = MetaDataCreator(grid_shape=param['input_od_output_shape'], image_shape=param['image_shape'])
AUAIRDATASET = AUAIR(annotation_file=param['annotation_file'], data_folder = param['data_folder'])
FRAME_SEQ = AUAIRDATASET.get_frame_seqeunces(seq_len=param['seqlen'], window_gap=param['window_gap'], overlap=param['overlap'])

"""
MODEL = tf.keras.applications.VGG16(weights='imagenet', include_top=False)
MODEL.summary()


random_input = np.random.rand(1000, 3, 256)
target = np.random.rand(1000, 128)
model = tf.keras.models.Sequential()
model.add(tf.keras.layers.LSTM(128, input_shape=(3, 256)))
model.add(tf.keras.layers.Dense(128, activation='softmax'))
model.summary()


opt = tf.keras.optimizers.RMSprop()
model.compile(optimizer=opt, loss='mse',
			  metrics=['mse'])

model.fit(random_input, target)

exit()
"""



def train_generator():
    """ Generator for training samples."""

    
    train_file = open(param['train_fname'], "r")
    image_names = [line[:-1] for line in train_file.readlines()]
    random.shuffle(image_names)

    print(len(FRAME_SEQ))
    print(len(FRAME_SEQ[0]))
    for seq in FRAME_SEQ:

        annot1, annot2, annot3 = seq

        frame1, _ = AUAIRDATASET.get_data_by_name(annot1['image_name'])
        frame2, _ = AUAIRDATASET.get_data_by_name(annot2['image_name'])
        frame3, _ = AUAIRDATASET.get_data_by_name(annot3['image_name'])

        img, ann = frame3, annot3
        img_resized = cv2.resize(img, (param['input_image_shape'][1], param['input_image_shape'][0]), interpolation=cv2.INTER_NEAREST)
        meta_data, _ = METADATACREATOR.create(ann)

        frame1 = cv2.resize(frame1, (param['input_frame_shape'][0], param['input_frame_shape'][1]), interpolation=cv2.INTER_NEAREST)
        frame2 = cv2.resize(frame2, (param['input_frame_shape'][0], param['input_frame_shape'][1]), interpolation=cv2.INTER_NEAREST)
        frame3 = cv2.resize(frame3, (param['input_frame_shape'][0], param['input_frame_shape'][1]), interpolation=cv2.INTER_NEAREST)

        # Normalize
        yield {"input_od_output": meta_data, 
                "input_gps": ann['longtitude'],
                "input_time": ann['time']['hour']/24.,
                "input_frame_1":frame1/255.,
                "input_frame_2":frame2/255.,
                "input_frame_3":frame3/255.}, meta_data




def val_generator():
    """ Generator for validation samples."""

    train_file = open(param['val_fname'], "r")
    image_names = [line[:-1] for line in train_file.readlines()]
    random.shuffle(image_names)
    print(len(FRAME_SEQ))
    print(len(FRAME_SEQ[0]))
    for seq in FRAME_SEQ:

        annot1, annot2, annot3 = seq

        frame1, _ = AUAIRDATASET.get_data_by_name(annot1['image_name'])
        frame2, _ = AUAIRDATASET.get_data_by_name(annot2['image_name'])
        frame3, _ = AUAIRDATASET.get_data_by_name(annot3['image_name'])

        img, ann = frame3, annot3
        img_resized = cv2.resize(img, (param['input_image_shape'][1], param['input_image_shape'][0]), interpolation=cv2.INTER_NEAREST)
        meta_data, _ = METADATACREATOR.create(ann)

        frame1 = cv2.resize(frame1, (param['input_frame_shape'][0], param['input_frame_shape'][1]), interpolation=cv2.INTER_NEAREST)
        frame2 = cv2.resize(frame2, (param['input_frame_shape'][0], param['input_frame_shape'][1]), interpolation=cv2.INTER_NEAREST)
        frame3 = cv2.resize(frame3, (param['input_frame_shape'][0], param['input_frame_shape'][1]), interpolation=cv2.INTER_NEAREST)

        # Normalize
        yield {"input_od_output": meta_data, 
                "input_gps": ann['longtitude'],
                "input_time": ann['time']['hour']/24.,
                "input_frame_1":frame1/255.,
                "input_frame_2":frame2/255.,
                "input_frame_3":frame3/255.}, meta_data


def schedule(epoch):
  """ Schedule learning rate. """
  initial_learning_rate = param['base_learning_rate']
  learning_rate = initial_learning_rate
  for mult, start_epoch in param['lr_schedule']:
    if epoch >= start_epoch:
      learning_rate = initial_learning_rate * mult
    else:
      break
  tf.summary.scalar('learning rate', data=learning_rate, step=epoch)
  return learning_rate


def sampling(args):
    """Reparameterization trick by sampling fr an isotropic unit Gaussian.

    # Arguments
        args (tensor): mean and log of variance of Q(z|X)

    # Returns
        z (tensor): sampled latent vector
    """

    z_mean, z_log_var = args
    batch = tf.keras.backend.shape(z_mean)[0]
    dim = tf.keras.backend.int_shape(z_mean)[1]
    # by default, random_normal has mean=0 and std=1.0
    epsilon = tf.keras.backend.random_normal(shape=(batch, dim))
    return z_mean + tf.keras.backend.exp(0.5 * z_log_var) * epsilon



class MyCustomCallback(tf.keras.callbacks.Callback):

  def __init__(self):
    self.callback_file = open('model_callback_'+name+'.txt', 'w+')
    self.epoch = 0

  def on_train_batch_end(self, batch, logs=None):
    #print('For batch {}, epoch is {}, loss is {:7.2f}.'.format(batch, self.epoch, logs['loss']))
    self.callback_file.write('train {} {} {:7.2f}\n'.format(batch, self.epoch, logs['loss']))
  def on_test_batch_end(self, batch, logs=None):
    #print('For batch {}, epoch is {}, loss is {:7.2f}.'.format(batch, self.epoch, logs['loss']))
    self.callback_file.write('test {} {} {:7.2f}\n'.format(batch, self.epoch, logs['loss']))

  def on_epoch_end(self, epoch, logs=None):
    #print('The average loss for epoch {} is {:7.2f} and mean absolute error is {:7.2f}.'.format(epoch, logs['loss'], logs['mse']))
    self.epoch += 1



# Dataset preparation
train_dataset = tf.data.Dataset.from_generator(generator = train_generator,
                                            output_types = ({"input_od_output":tf.int8, "input_gps":tf.float32, "input_time":tf.float32, "input_frame_1":tf.float32, "input_frame_2":tf.float32, "input_frame_3":tf.float32}, tf.float32))

val_dataset = tf.data.Dataset.from_generator(generator = val_generator,
                                            output_types = ({"input_od_output":tf.int8, "input_gps":tf.float32, "input_time":tf.float32, "input_frame_1":tf.float32, "input_frame_2":tf.float32, "input_frame_3":tf.float32}, tf.float32))


# Preprocess data.
buffer_size = int(1024)
train_dataset = train_dataset.shuffle(buffer_size, reshuffle_each_iteration=True).batch(param['batch_size'], drop_remainder=False)
val_dataset = val_dataset.batch(buffer_size, drop_remainder=False)


# Build the model

# Inputs
input_od_output = tf.keras.layers.Input(shape=param['input_od_output_shape'], name='input_od_output')

input_gps = tf.keras.layers.Input(shape=param['input_gps_shape'], name='input_gps')
input_time = tf.keras.layers.Input(shape=param['input_time_shape'], name='input_time')

input_frame_1 = tf.keras.layers.Input(shape=param['input_frame_shape'], name='input_frame_1')
input_frame_2 = tf.keras.layers.Input(shape=param['input_frame_shape'], name='input_frame_2')
input_frame_3 = tf.keras.layers.Input(shape=param['input_frame_shape'], name='input_frame_3')


# Channel for input_od_output input.
conv_1 = tf.keras.layers.Conv2D(32, kernel_size=(1,1),
                                  activation='relu',
                                  input_shape=param['input_image_shape'], name='conv1')(input_od_output)
pool_1 = tf.keras.layers.MaxPooling2D(pool_size=(2,2))(conv_1)
flatten_1 = tf.keras.layers.Flatten()(pool_1)
dense_1 = tf.keras.layers.Dense(32, activation='relu')(flatten_1)


# Channels for frames.
VGG16 = tf.keras.applications.VGG16(weights='imagenet', include_top=False)
for layer in VGG16.layers:
  layer.trainable=False

features_1 = VGG16(input_frame_1)
features_2 = VGG16(input_frame_2)
features_3 = VGG16(input_frame_3)

flatten_feat1 = tf.keras.layers.Flatten()(features_1)
flatten_feat2 = tf.keras.layers.Flatten()(features_2)
flatten_feat3 = tf.keras.layers.Flatten()(features_3)

expand_feat1 = tf.keras.backend.expand_dims(flatten_feat1, axis=1)
expand_feat2 = tf.keras.backend.expand_dims(flatten_feat2, axis=1)
expand_feat3 = tf.keras.backend.expand_dims(flatten_feat3, axis=1)

concat_features = tf.keras.layers.Concatenate(axis=1, name = "concat_frame_features")([expand_feat1, expand_feat2, expand_feat3])

lstm = tf.keras.layers.LSTM(32, input_shape=(3, 8192))(concat_features)
lstm_output = tf.keras.layers.Dense(32, activation='relu', name='lstm_output')(lstm)

# Channels for GPS.
dense_gps = tf.keras.layers.Dense(32, activation='relu')(input_gps)

# Channels for Time.
dense_time = tf.keras.layers.Dense(32, activation='relu')(input_time)

# Create context vector
context_vector = tf.keras.layers.Concatenate(axis=1, name='context_vector')([dense_gps, dense_time, lstm_output])


# Combine input with feature vector.
combined_input = tf.keras.layers.Concatenate(axis=1, name='combined_input')([dense_1, context_vector])

dense_5 = tf.keras.layers.Dense(32, activation='relu')(combined_input)

z_mean = tf.keras.layers.Dense(param['latent_dim'], name='z_mean')(dense_5)
z_log_var = tf.keras.layers.Dense(param['latent_dim'], name='z_log_var')(dense_5)

# use reparameterization trick to push the sampling out as input
# note that "output_shape" isn't necessary with the TensorFlow backend
z = tf.keras.layers.Lambda(sampling, output_shape=(param['latent_dim'],), name='z')([z_mean, z_log_var])

concat_6 = tf.keras.layers.Concatenate(axis=1, name='merged_latent_inputs')([z, dense_5])

dense_7 = tf.keras.layers.Dense(16*16*8, activation='relu', name='decoder_dense_1')(concat_6)

reshape_8_1 = tf.keras.layers.Reshape((16, 16, 8))(dense_7)
reshape_8_2 = tf.keras.layers.Reshape((16,16,8))(input_od_output)

concat_9 = tf.keras.layers.Concatenate(axis=3)([reshape_8_1, reshape_8_2])

outputs = tf.keras.layers.Conv2DTranspose(filters=8,
                          kernel_size=(3,3),
                          activation='sigmoid',
                          padding='same',
                          name='outputs')(concat_9)

model = tf.keras.models.Model([input_od_output, input_time, input_gps, 
                              input_frame_1, 
                              input_frame_2,
                              input_frame_3], [outputs], name='model')

model.summary()
tf.keras.utils.plot_model(model, to_file='model.png', show_shapes=True)



# Compute VAE loss
def my_vae_loss(y_true, y_pred):
    reconstruction_loss = tf.keras.losses.binary_crossentropy(tf.keras.backend.flatten(y_true),  tf.keras.backend.flatten(y_pred))
    reconstruction_loss *= (16 * 16)

    kl_loss = 1 + z_log_var - tf.keras.backend.square(z_mean) - tf.keras.backend.exp(z_log_var)
    kl_loss = tf.keras.backend.sum(kl_loss, axis=-1)
    kl_loss *= -0.5
    vae_loss = tf.keras.backend.mean(reconstruction_loss + kl_loss)+1e-8

    return vae_loss





# Compile the model.
opt = tf.keras.optimizers.RMSprop()
model.compile(optimizer=opt, loss=my_vae_loss,
			  metrics=['mse'])



# Set logging settings.
log_dir="logs/fit/" + datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
file_writer = tf.summary.create_file_writer(log_dir + "/metrics")
file_writer.set_as_default()
tensorboard_callback = tf.keras.callbacks.TensorBoard(
  log_dir=log_dir,
  update_freq='batch',
  histogram_freq=1)

lr_schedule_callback = tf.keras.callbacks.LearningRateScheduler(schedule)

# Checkpoint
outputFolder = './output-checkpoints'
if not os.path.exists(outputFolder):
    os.makedirs(outputFolder)
filepath=outputFolder+"/model_"+name+"_-{epoch:02d}.hdf5"
checkpoint_callback = tf.keras.callbacks.ModelCheckpoint(filepath, verbose=1, \
                             save_best_only=False, save_weights_only=True, \
                             mode='auto', save_frequency=1)


# Train the model.
history = model.fit(train_dataset,
          epochs=param['epochs'],
          validation_data = val_dataset,
          validation_freq=1,
          callbacks=[lr_schedule_callback, checkpoint_callback, MyCustomCallback()], verbose=1)

with open(name, "w+") as outfile:
    param['history'] = {}
    for key in history.history.keys():
      pyfloat = [f.item() for f in history.history[key]]
      param['history'][key]=pyfloat
  
    param['raw_history'] = str(history.history)
    json.dump(param, outfile, indent=4)
# Evaluate the model.          
# model.evaluate(test_dataset)

