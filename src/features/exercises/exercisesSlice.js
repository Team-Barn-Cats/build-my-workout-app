// This is where we take a subset of our array and make it nice for the other components

import { EXERCISES } from '../../app/shared/EXERCISES';

export const selectFullBody = () => {
    return EXERCISES;
};

export const selectUpperBody = () => {
    return EXERCISES.find((exercise) => exercise.category === 'upperbody');
};