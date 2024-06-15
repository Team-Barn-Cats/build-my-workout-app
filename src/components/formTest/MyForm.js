import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Checklist from './Checklist';
import Choices from './Choices';
import { selectUpperBody } from '../../features/exercises/exercisesSlice';

const options = [
  { value: 'item1', text: 'Item 1' },
  { value: 'item2', text: 'Item 2' },
  { value: 'item3', text: 'Item 3' },
];

const MyForm = () => {
    const upperExercises = selectUpperBody();
  const [showChoices, setShowChoices] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);

  const onSubmit = (values) => {
    setCheckedValues(values.checklist); 
    setShowChoices(true);
  };

  return (
    <div>
      <Formik initialValues={{ checklist: [] }} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            {/* <Checklist name="checklist" options={options} /> */}
            <Checklist name="checklist" exercises={upperExercises} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {showChoices && <Choices checkedValues={checkedValues} />}
    </div>
  );
};

export default MyForm;
