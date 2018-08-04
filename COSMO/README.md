# COSMO

COSMO is a variant of Boltzmann Machines that is used for contextualized scene modeling. It extends Boltzmann Machines by adding relation and affordance nodes between visible nodes. You can see the [web page](https://bozcani.github.io/COSMO/) and the [paper](https://arxiv.org/abs/1807.00511).


# Introduction

Scene models allow robots to understand what is in the scene, what else should be in it and what shouldn't be in it according to the context of the scene. COSMO models the environment in terms of presence of objects; relations among them and affordances. 

Objects, relations and affordances correspond to visible units of Boltzmann Machine; and context is represented by hidden units. Two object and one relation or affordance nodes are linked with triway edges. All visible nodes are connected to all hidden nodes and no connections within hidden nodes are allowed.

The COSMO has abilities that is related to scene modeling:
 - Relation estimation between objects,
 - Finding missing objects in the scene,
 - Finding irrelevant objects in the scene,
 - Affordance prediction,
 - Finding object that afford some specific action,
 - Finding subject that acts some action with specific object,
 - Random scene generation,

# Dataset
We formed a dataset composed of 6,976 scenes, half of which is sampled from the [Visual Genome (VG)](https://visualgenome.org/) dataset and the other half from the [SUNRGBD](http://rgbd.cs.princeton.edu/) dataset.

Our dataset consists of 90 objects that commonly exist in scenes, including human-like (man, woman, boy etc.), physical objects (cup, bottle, jacket etc.), part of buildings (door, window etc.). Object vocabulary is given in ``object_vocabulary.txt``.

Our dataset is composed of the following eight spatial relations: left, right, front, behind, on-top, under, above, below. These spatial relations are annotated in the VG dataset already. However, we extended the original SUN-RGBD dataset by manually annotating these eight spatial relations. Moreover, we included verb-relations in the VG dataset as affordances into the dataset. The set of affordances include eat-ability, push-ability, play-ability, wear-ability, sit-ability, hold-ability, carry-ability, ride-ability, push-ability, use-ability.

``COSMO_dataset.zip`` consists the dataset which is splitted into three parts: 60% for training, 30% for testing and 10% for validation. The dataset is organized as batches with 32-sized.

 Batches starting with 's' (i.e `s_batch_05_3.csv`) contain samples from SUNRGBD dataset. Others (i.e `batch_17`) are from VG dataset.

``info`` folder includes links the references to the images used in the dataset.

# Using COSMO
## Files
Description of files is here:
- COSMO.py is implementation of COSMO by using Tensorflow and Python.
- utils.py includes helper functions for COSMO implementation.
- utils2.py includes additional helper functions for COSMO implementation.
- zconfig.py includes configuration settings for COSMO implementation.
- experiment_train.py is simple training script for COSMO.
- experiment_test.py is simple testing script for COSMO.

## Installation Requirements
Required packages are here:
- python >= 2.7.12
- tensorflow >= 1.4.1
- numpy >= 1.13.3
- pandas >= 0.20.3

## Training

To train COSMO with specific dataset, you can use experiment_train.py file. Hyper-parameters of COSMO, paths to training and validation sets are specified in the file.
Run the code to train COSMO:
```
python experiment_train.py
```

## Testing
To run the tasks on test set, you can use experiment_test.py file:
```
python experiment_test.py
```

# References

[COSMO: Contextualized Scene Modeling with Boltzmann Machines](http://www.kovan.ceng.metu.edu.tr/~ilker/publications/BozcanKalkan2018_COSMO.pdf). İlker Bozcan, Sinan Kalkan, submitted to the Robotics and Autonomous Systems (RAS) special issue on Semantic Policy and Action Representations for Autonomous Robots (SPAR), 2018.
