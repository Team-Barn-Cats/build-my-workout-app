import {
  Col,
  CardBody,
  Card,
  CardHeader,
  Button,
  Row,
} from "reactstrap";
import { useState } from "react";
import { selectExerciseDetailsById } from "./exercisesSlice";
import ExerciseDetail from "./ExerciseDetail";
import { Field } from 'formik';

const TestSimpleList = ({name, exerciseList }) => {
  const [exerciseId, setExerciseId] = useState(0);
    const selectedExercise = selectExerciseDetailsById(exerciseId);

  return (
    <Row>
      <Col sm="5">
        <Card>
          <CardHeader>Select Five:</CardHeader>
          {exerciseList.map((exercise) => (
            <CardBody className="col-sm-12 border d-flex justify-content-between align-items-center" key={exercise.id}>
              <Field type="checkbox" name={name} value={exercise.name} />
              <label htmlFor={exercise.id}>{exercise.name}</label>
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
