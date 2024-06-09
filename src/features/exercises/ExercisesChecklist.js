// This is where users see their subset of options and their selected exercises / difficulty

import { Col, Row, Card, Button } from "reactstrap";
import ExercisesCheckbox from "./ExercisesCheckbox";
import { selectFullBody } from "./exercisesSlice";
import { useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ExercisesChecklist = () => {
  const exercises = useSelector(selectFullBody);
  console.log("exercises:", exercises);

  return (
    <Col className="col-sm-6">
      <Formik
        initialValues={{
          checked: [],
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
            <div id="checkbox-group">Choose 5:</div>
            <div role="group" aria-labelledby="checkbox-group">
              {exercises.map((exercise) => {
                return (
                  <Card className="m-4" key={exercise.id}>
                    <ExercisesCheckbox exercise={exercise} />
                  </Card>
                );
              })}
            </div>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Col>
  );
};

export default ExercisesChecklist;
