import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { exercisesReducer } from '../features/exercises/exercisesSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    exercises: exercisesReducer
  },
});
