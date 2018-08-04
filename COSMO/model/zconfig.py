models_dir = 'models/'  # dir to save/restore models
data_dir = 'data/'  # directory to store algorithm data
summary_dir = 'logs/'  # directory to store tensorflow summaries

import numpy as np


class Data_Manipulator():
    def __init__(self, num_concepts):
        self.manipulator_type = None
        self.num_concepts     = num_concepts

    def ManipulateObjVec2RelMatrix(self, data):
                
        # Shape of batch data
        N, D = data.shape

        # Create empty relation matrix
        new_relation_matrix = np.zeros((N, self.num_concepts, self.num_concepts ))

        # Get slice of data matrix that shows object vector
        object_vectors = data[:,:self.num_concepts]
        
        # Iterate over all samples in the batch.
        for i in range(N):
            # Find indices that eqauls to 1 (i.e. find active objects)
            inds = np.argwhere(object_vectors[i]==1).T[0]
            
            # Set relation matrix.
            new_relation_matrix[i, inds.T, :] = object_vectors[i]
            #print new_relation_matrix[i]
         
        new_relation_matrix = new_relation_matrix.reshape((N, -1 ))
        new_data_matrix = np.concatenate((new_relation_matrix, data[:,self.num_concepts:]),axis=1)
        return new_data_matrix