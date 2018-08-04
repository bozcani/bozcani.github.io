import numpy as np
#from Scene import *


def getIndex(o):
	if(o.shape=='cube'     and o.size=='small' and o.material=='metal' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 0;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='metal' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 1;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='metal' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 2;

	if(o.shape=='cube'     and o.size=='large' and o.material=='metal' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 3;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='metal' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 4;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='metal' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 5;

	if(o.shape=='cube'     and o.size=='small' and o.material=='rubber' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 6;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='rubber' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 7;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='rubber' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 8;

	if(o.shape=='cube'     and o.size=='large' and o.material=='rubber' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 9;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='rubber' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 10;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='rubber' and (o.color=='red' or o.color=='green' or o.color=='purple' or o.color=='cyan') ): return 11;


	if(o.shape=='cube'     and o.size=='small' and o.material=='metal' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 12;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='metal' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 13;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='metal' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 14;

	if(o.shape=='cube'     and o.size=='large' and o.material=='metal' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 15;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='metal' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 16;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='metal' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 17;

	if(o.shape=='cube'     and o.size=='small' and o.material=='rubber' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 18;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='rubber' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 19;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='rubber' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 20;

	if(o.shape=='cube'     and o.size=='large' and o.material=='rubber' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 21;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='rubber' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 22;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='rubber' and (o.color=='blue' or o.color=='gray' or o.color=='brown' or o.color=='yellow') ): return 23;


	'''
	if(o.shape=='cube'     and o.size=='small' and o.material=='metal' and o.color=='green'): return 24;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='metal' and o.color=='green'): return 25;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='metal' and o.color=='green'): return 26;

	if(o.shape=='cube'     and o.size=='large' and o.material=='metal' and o.color=='green'): return 27;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='metal' and o.color=='green'): return 28;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='metal' and o.color=='green'): return 29;

	if(o.shape=='cube'     and o.size=='small' and o.material=='rubber' and o.color=='green'): return 30;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='rubber' and o.color=='green'): return 31;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='rubber' and o.color=='green'): return 32;

	if(o.shape=='cube'     and o.size=='large' and o.material=='rubber' and o.color=='green'): return 33;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='rubber' and o.color=='green'): return 34;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='rubber' and o.color=='green'): return 35;

	
	if(o.shape=='cube'     and o.size=='small' and o.material=='metal' and o.color=='cyan'): return 36;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='metal' and o.color=='cyan'): return 37;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='metal' and o.color=='cyan'): return 38;

	if(o.shape=='cube'     and o.size=='large' and o.material=='metal' and o.color=='cyan'): return 39;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='metal' and o.color=='cyan'): return 40;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='metal' and o.color=='cyan'): return 41;

	if(o.shape=='cube'     and o.size=='small' and o.material=='rubber' and o.color=='cyan'): return 42;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='rubber' and o.color=='cyan'): return 43;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='rubber' and o.color=='cyan'): return 44;

	if(o.shape=='cube'     and o.size=='large' and o.material=='rubber' and o.color=='cyan'): return 45;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='rubber' and o.color=='cyan'): return 46;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='rubber' and o.color=='cyan'): return 47;
	

	if(o.shape=='cube'     and o.size=='small' and o.material=='metal' and o.color=='purple'): return 48;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='metal' and o.color=='purple'): return 49;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='metal' and o.color=='purple'): return 50;

	if(o.shape=='cube'     and o.size=='large' and o.material=='metal' and o.color=='purple'): return 51;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='metal' and o.color=='purple'): return 52;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='metal' and o.color=='purple'): return 53;

	if(o.shape=='cube'     and o.size=='small' and o.material=='rubber' and o.color=='purple'): return 54;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='rubber' and o.color=='purple'): return 55;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='rubber' and o.color=='purple'): return 56;

	if(o.shape=='cube'     and o.size=='large' and o.material=='rubber' and o.color=='purple'): return 57;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='rubber' and o.color=='purple'): return 58;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='rubber' and o.color=='purple'): return 59;

	
	if(o.shape=='cube'     and o.size=='small' and o.material=='metal' and o.color=='yellow'): return 60;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='metal' and o.color=='yellow'): return 61;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='metal' and o.color=='yellow'): return 62;

	if(o.shape=='cube'     and o.size=='large' and o.material=='metal' and o.color=='yellow'): return 63;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='metal' and o.color=='yellow'): return 64;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='metal' and o.color=='yellow'): return 65;

	if(o.shape=='cube'     and o.size=='small' and o.material=='rubber' and o.color=='yellow'): return 66;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='rubber' and o.color=='yellow'): return 67;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='rubber' and o.color=='yellow'): return 68;

	if(o.shape=='cube'     and o.size=='large' and o.material=='rubber' and o.color=='yellow'): return 69;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='rubber' and o.color=='yellow'): return 70;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='rubber' and o.color=='yellow'): return 71;

	
	if(o.shape=='cube'     and o.size=='small' and o.material=='metal' and o.color=='gray'): return 72;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='metal' and o.color=='gray'): return 73;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='metal' and o.color=='gray'): return 74;

	if(o.shape=='cube'     and o.size=='large' and o.material=='metal' and o.color=='gray'): return 75;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='metal' and o.color=='gray'): return 76;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='metal' and o.color=='gray'): return 77;

	if(o.shape=='cube'     and o.size=='small' and o.material=='rubber' and o.color=='gray'): return 78;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='rubber' and o.color=='gray'): return 79;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='rubber' and o.color=='gray'): return 80;

	if(o.shape=='cube'     and o.size=='large' and o.material=='rubber' and o.color=='gray'): return 81;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='rubber' and o.color=='gray'): return 82;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='rubber' and o.color=='gray'): return 83;


	if(o.shape=='cube'     and o.size=='small' and o.material=='metal' and o.color=='brown'): return 84;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='metal' and o.color=='brown'): return 85;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='metal' and o.color=='brown'): return 86;

	if(o.shape=='cube'     and o.size=='large' and o.material=='metal' and o.color=='brown'): return 87;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='metal' and o.color=='brown'): return 88;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='metal' and o.color=='brown'): return 89;

	if(o.shape=='cube'     and o.size=='small' and o.material=='rubber' and o.color=='brown'): return 90;
	if(o.shape=='sphere'   and o.size=='small' and o.material=='rubber' and o.color=='brown'): return 91;
	if(o.shape=='cylinder' and o.size=='small' and o.material=='rubber' and o.color=='brown'): return 92;

	if(o.shape=='cube'     and o.size=='large' and o.material=='rubber' and o.color=='brown'): return 93;
	if(o.shape=='sphere'   and o.size=='large' and o.material=='rubber' and o.color=='brown'): return 94;
	if(o.shape=='cylinder' and o.size=='large' and o.material=='rubber' and o.color=='brown'): return 95;
	'''
	
def createInputForm(s):
	objs = np.zeros((24,))
	for o in s.objects:
		objs[getIndex(o)] = 1

	rels = np.zeros((4,24,24))

	for r in s.relationships.behind:
		for it in range(len(s.objects)):
			i = getIndex(s.objects[it])
			for it2 in s.relationships.behind[it]:
				j = getIndex(s.objects[it2])
				rels[0][i][j] = 1

	for r in s.relationships.front:
		for it in range(len(s.objects)):
			i = getIndex(s.objects[it])
			for it2 in s.relationships.front[it]:
				j = getIndex(s.objects[it2])
				rels[1][i][j] = 1

	for r in s.relationships.left:
		for it in range(len(s.objects)):
			i = getIndex(s.objects[it])
			for it2 in s.relationships.left[it]:
				j = getIndex(s.objects[it2])
				rels[2][i][j] = 1

	for r in s.relationships.right:
		for it in range(len(s.objects)):
			i = getIndex(s.objects[it])
			for it2 in s.relationships.right[it]:
				j = getIndex(s.objects[it2])
				rels[3][i][j] = 1

	
	return np.hstack((objs, rels.ravel()))	
	
	
def createMask():

	C = np.zeros((24+24*24*4, 24+24*24*4))

	nrow,ncol = C.shape 

	for ind in range(24,ncol):
		i = ((ind%(24*24))/24)-1
		j = ((i+1)*24 + (ind%24)) + (24*24 *(ind/(24*24)))
		C[i,j] = 1
		C[j,i] = 1

		i2 = ind%24
		j2 = j

		C[i2,j2] = 1
		C[j2,i2] = 1

	return C

