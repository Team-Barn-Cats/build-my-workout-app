// This puts the exercise objects from the array into checkboxes
// Keeping this for later: <ExerciseCard exercise={exercise}/>
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { Button } from 'reactstrap';

const ExercisesCheckbox = ({ exercise }) => {

  const { id, name } = exercise;
  return (
    <div>
      <label>
        <Field type="checkbox" name="checked" value="One" />
        {name}
      </label>
      <Button>Details</Button>
    </div>
  );
};

export default ExercisesCheckbox;
