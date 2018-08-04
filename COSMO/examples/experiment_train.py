from model.COSMO import COSMO
import numpy as np
import tensorflow as tf


model = COSMO( num_concepts=90, num_relations=14, num_hidden=200, main_dir='COSMO', model_name='unnamed_model',
    gibbs_sampling_steps=1, learning_rate=0.5,decay_rate=0.99, batch_size=32, num_epochs=300, verbose=0, save_per_epoch=10)

model.temperature = 1.0

# Path to subset data.
path_to_train_data = 'PATH_TO_TRAINING_DATA'
path_to_validation_data = 'PATH_TO_VALIDATION_DATA'


model.fit(path_to_train_data, path_to_validation_data)


