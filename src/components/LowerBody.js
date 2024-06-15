// the component that shows up when someone selects "Lower Body"
import { selectLowerBody } from "../features/exercises/exercisesSlice";
import { Container, Button } from "reactstrap";
import { Formik, Form } from "formik";
import { useState } from "react";
import WorkoutPlan from "../features/exercises/WorkoutPlan";
import ExercisesChecklist from "../features/exercises/ExercisesChecklist";

const LowerBody = () => {
  const lowerExercises = selectLowerBody();
  const [showChoices, setShowChoices] = useState(false); // This displays the WorkoutPlan Component
  const [checkedValues, setCheckedValues] = useState([]); // This stores the checked exercises

  const onSubmit = (values) => { // This handles the submit button
    setCheckedValues(values.checklist);
    setShowChoices(true);
    {
      console.log(values.checklist);
    }
  };

  return (
    <Container>
      <Formik initialValues={{ checklist: [] }} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <ExercisesChecklist id="checklist" exercises={lowerExercises} />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
      {showChoices && <WorkoutPlan checkedValues={checkedValues} />} 
    </Container>
  );
};

export default LowerBody;
