import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { exercisesReducer } from '../features/exercises/exercisesSlice';


export const store = configureStore({
  reducer: {
    
    exercises: exercisesReducer
  },
});
