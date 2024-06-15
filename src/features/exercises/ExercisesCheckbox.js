// This puts the exercise objects from the array into checkboxes
// Keeping this for later: <ExerciseCard exercise={exercise}/>
/* import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { Button } from 'reactstrap';
import ExerciseDetailPage from "../../app/pages/ExerciseDetailPage";
import ExerciseDetail from "./ExerciseDetail";

const ExercisesCheckbox = ({ exercise }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const { id, name } = exercise;
  
  return (
    <div>
      <label>
        <Field type="checkbox" name="checked" value={name} id={id}/>
        {name}
      </label>
      <Button type="button" role="link" onClick={() => openInNewTab(`/${id}`)}>Detail</Button>
    </div>
  );
};

export default ExercisesCheckbox;
 */