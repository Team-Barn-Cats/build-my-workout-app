// This is where users see their subset of options and their selected exercises / difficulty

import { Col, Row, Card, Button } from "reactstrap";
import ExercisesCheckbox from "./ExercisesCheckbox";
import { selectFullBody } from "./exercisesSlice";
import { useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ExercisesChecklist = () => {
  const initialValues = {checked: []};
  const exercises = useSelector(selectFullBody);
  console.log("exercises:", exercises);

  const handleSubmit = async (values) => {
    try {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
    
  return (
    <Col className="col-sm-6">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
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
      </Formik>
      <h1>Hello</h1>
    </Col>
  );
};

export default ExercisesChecklist;
