// This puts the exercise objects from the array into checkboxes

import { Formik, Field, Form } from "formik";

const ExercisesCheckbox = ({ exercise }) => {
  const { id, name } = exercise;
  return (
    <div>
        <input type="checkbox" />
        <label>{name}</label>
    </div>
  );
};

export default ExercisesCheckbox;
