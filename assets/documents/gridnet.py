import tensorflow as tf
import numpy as np


class GridNet_v01(tf.keras.Model):
  """GridNet tensorflow 2.0 implementation."""

  def __init__(self, config):
    super(Conv_Conditional_VAE_with_skip, self).__init__()
    self.latent_dim = config["latent_dim"]
    # Build the encoder
    input_encoder = tf.keras.layers.Input(shape=(6, 14, 17), name='encoder_input')
    input_location = tf.keras.layers.Input(shape=(2,), name='location_input')
    dense_location = tf.keras.layers.Dense(8, activation="relu")(input_location)


    conv_1 = tf.keras.layers.Conv2D(filters=16, kernel_size=(7,7), padding="same", activation="relu")(input_encoder)
    conv_2 = tf.keras.layers.Conv2D(filters=32, kernel_size=(7,7), padding="same", activation="relu")(conv_1)

    flatten_1 = tf.keras.layers.Flatten()(conv_2)
    dense_1 = tf.keras.layers.Dense(64)(flatten_1)
    relu_1  = tf.keras.layers.Activation("relu")(dense_1)
    drop_1 = tf.keras.layers.Dropout(0.5)(relu_1)

    concat_1 = tf.keras.layers.Concatenate(axis=1, name="concatenation")([drop_1, dense_location])
    

    dense_2 = tf.keras.layers.Dense(self.latent_dim+self.latent_dim)(concat_1)
    self.encoder = tf.keras.models.Model(inputs=[input_encoder, input_location], outputs=[dense_2], name="encoder")

    def reparameterize(h):
        mean, logvar = tf.split(h, num_or_size_splits=2, axis=1)
        eps = tf.random.normal(shape=tf.shape(mean))
        res = eps * tf.exp(logvar * .5) + mean
        return res

    input_sampler = tf.keras.layers.Input(shape=(self.latent_dim+self.latent_dim,), name="sampler_input")
    sample_1 = tf.keras.layers.Lambda(reparameterize)(input_sampler)
    self.sampler = tf.keras.models.Model(inputs=[input_sampler], outputs=[sample_1], name="sampler")

    input_decoder = tf.keras.layers.Input(shape=(self.latent_dim,), name="decoder_input")

    concat_decoder = tf.keras.layers.Concatenate(axis=1, name="concatenation")([input_decoder, dense_location])

    dense_3_1 = tf.keras.layers.Dense(units=6*14*17)(concat_decoder)
    reshape_3_1 = tf.keras.layers.Reshape(target_shape=(6,14,17))(dense_3_1)
    conv_3 = tf.keras.layers.Conv2D(filters=16, kernel_size=(7,7), padding="same", activation="relu")(reshape_3_1)
    conv_4 = tf.keras.layers.Conv2D(filters=32, kernel_size=(7,7), padding="same", activation="relu")(conv_3)


    add_4 = tf.keras.layers.Add()([conv_4, conv_2])
    relu_4  = tf.keras.layers.Activation("relu")(add_4)
    flatten_4 = tf.keras.layers.Flatten()(relu_4)
    dense_5 = tf.keras.layers.Dense(units=6*14*17, activation="linear")(flatten_4)
    reshape_5 = tf.keras.layers.Reshape(target_shape=(6,14,17), name="decoder_output")(dense_5)

    self.decoder = tf.keras.models.Model(inputs=[input_encoder, input_decoder, input_location], outputs=[reshape_5], name="decoder")

    # instantiate VAE model
    outputs = self.decoder([input_encoder, self.sampler(self.encoder([input_encoder, input_location])), input_location])

    self.whole_network = tf.keras.models.Model(inputs=[input_encoder, input_location], outputs=[outputs], name="whole")
 
 
  def train_step(self, x):
    """Executes one training step and returns the loss.

    This function computes the loss and gradients, and uses the latter to
    update the model's parameters.
    """
    with tf.GradientTape() as tape:
      loss = conditional_vae_loss_w_skip_and_f1(self, x)
    gradients = tape.gradient(loss, self.trainable_variables)
    self.optimizer.apply_gradients(zip(gradients, self.trainable_variables))
    return({"elbo": -loss})

  def to_json(self):
      encoder_json = self.encoder.to_json()
      sampler_json = self.sampler.to_json()
      decoder_json = self.decoder.to_json()

      return [("encoder", encoder_json), 
              ("sampler" ,sampler_json),
              ("decoder", decoder_json)]


  def call(self,x):
      #self.add_loss(lambda: vae_loss(self,x))

      e = self.encoder([x["encoder_input"], x["location_input"]])
      s = self.sampler(e)
      d = self.decoder([x["encoder_input"],s, x['location_input']])
      return d
