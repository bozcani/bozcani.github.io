from model.COSMO import COSMO
import numpy as np
import tensorflow as tf
import numpy as np
import pandas as pd

from os import listdir
from os.path import isfile, join

model_path = 'PATH_TO_MODELS/model_that_tensorflow_logger_saved'
test_data = 'PATH_TO_TEST_DATA'



a=1 #amplify unit set to 1.
m=100 #model index.


model = COSMO( num_concepts=70, num_relations=4, num_hidden=800, batch_size=128)
#model.task1SpatialRelationEstimation(test_data,  model_path + str(m), a)
#model.task2WhatIsMissingOnTheScene(test_data,  model_path)
#model.task4AffordanceEstimation(test_data,  model_path + str(m), a)

#model.task3WhatIsExtraOnTheScene(test_data,  model_path + str(m))
#model.task5WhatisTheObjectForAffordances(test_data,  model_path + str(m), a)
#model.task6WhatisTheSubjectForAffordances(test_data,  model_path + str(m), a)
#model.additionalTask(model_path)
#model.additionalTask_2(model_path)
tf.reset_default_graph()
