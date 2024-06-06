// This puts the exercise objects from the array into checkboxes

import { Formik, Field, Form } from "formik";
import ExerciseCard from "../../components/ExercisesCard";

const ExercisesCheckbox = ({ exercise }) => {
  const { id, name } = exercise;
  return (
    <div>
        <ExerciseCard exercise={exercise}/>
        <input type="checkbox" />
{/*        <label>{name}</label> */}
    </div>
  );
};

export default ExercisesCheckbox;
