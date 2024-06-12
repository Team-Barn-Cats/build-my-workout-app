import TestExercisesCheckbox from "./TestExercisesCheckbox";
import {
  Col,
  CardBody,
  Card,
  CardTitle,
  CardHeader,
  Button,
  Row,
} from "reactstrap";
import { useState } from "react";
import { selectExerciseDetailsById } from "./exercisesSlice";
import ExerciseDetail from "./ExerciseDetail";

const TestSimpleList = ({ exerciseList }) => {
    const [exerciseId, setExerciseId] = useState(0);
    const selectedExercise = selectExerciseDetailsById(exerciseId);

  return (
    <Row>
      <Col sm="5">
        <Card>
          <CardHeader>Select Five:</CardHeader>
          {exerciseList.map((exercise) => (
            <CardBody
              key={exercise.id}
              className="col-sm-12 border d-flex justify-content-between align-items-center"
            >
              <TestExercisesCheckbox exercise={exercise} />
              <Button type='button' className="" onClick={() => setExerciseId(exercise.id)}>Details</Button>
            </CardBody>
          ))}
        </Card>
      </Col>
      <Col sm="7" md="7">
        <ExerciseDetail exercise={selectedExercise} />
      </Col>
    </Row>
  );
};

export default TestSimpleList;
