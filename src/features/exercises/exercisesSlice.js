// This is where we take a subset of our array and make it nice for the other components

import { EXERCISES } from '../../app/shared/EXERCISES';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exercisesArray: EXERCISES
};

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState
});

export const exercisesReducer = exercisesSlice.reducer;

export const selectFullBody = (state) => {
    return state.exercises.exercisesArray;
};

export const selectExerciseById = (id) => (state) => {
    return state.exercises.exercisesArray.find(
        (exercise) => exercise.id === parseInt(id)
    );
};

export const selectExerciseDetailsById = (id) => {
    return EXERCISES.find((exercise) => exercise.id === id);
};

export const selectExerciseDetailsByName = (name) => {
    return EXERCISES.find((exercise) => exercise.name === name);
};

export const selectAllExercises = () => {
    return EXERCISES;
};

export const selectLowerBody = () => {
    return EXERCISES.filter((exercise) => exercise.category === 'lowerbody');
};
export const selectUpperBody = () => {
    return EXERCISES.filter((exercise) => exercise.category === 'upperbody');
};
/* export const selectUpperBody = (state) => {
    return state.exercises.exercisesArray.filter((exercise) => exercise.category === 'upperbody');
};

export const selectLowerBody = (state) => {
    return state.exercises.exercisesArray.filter((exercise) => exercise.category === 'lowerbody');
}; */