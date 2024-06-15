/* import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Checkbox } from '@mui/material'; // Import Checkbox component from Material UI
import ExerciseDetail from './ExerciseDetail'; // Import your ExerciseDetail component

import { EXERCISES } from '../../app/shared/EXERCISES';

const ChecklistForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ selectedExercises: [] }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log('Selected Exercises:', values.selectedExercises);
          // You can use the selectedExercises array to show the ExerciseDetail components
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <h2>Select Exercises</h2>
            {EXERCISES.map((exercise) => (
              <div key={exercise.id}>
                <Field type="checkbox" name={`selectedExercises[${exercise.id}]`} value={exercise.id} />
                <label htmlFor={`selectedExercises[${exercise.id}]`}>{exercise.name}</label>
                <ErrorMessage name={`selectedExercises[${exercise.id}]`} component="div" className="error" />
              </div>
            ))}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {values.selectedExercises.length > 0 && (
        <h2>Selected Exercises</h2>
      )}
      {values.selectedExercises.map((exerciseId) => (
        <ExerciseDetail key={exerciseId} exercise={EXERCISES.find((e) => e.id === exerciseId)} />
      ))}
    </div>
  );
};

export default ChecklistForm;
 */