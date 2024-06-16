import React from "react";
import { Field } from "formik";
import {
  Col,
  CardBody,
  Card,
  CardHeader,
  Button,
  Row,
} from "reactstrap";
import { selectExerciseDetailsById } from "../../features/exercises/exercisesSlice";
import { useState } from "react";
import ExerciseDetail from "../../features/exercises/ExerciseDetail";

const ExercisesChecklist = ({ id, exercises }) => {
  const [exerciseId, setExerciseId] = useState(0);
  const selectedExercise = selectExerciseDetailsById(exerciseId);

  return (
    <Row>
      <Col sm="5">
        <Card>
          <CardHeader>Select Five:</CardHeader>
          {exercises.map((exercise) => (
            <CardBody
              className="col-sm-12 border d-flex justify-content-between align-items-center"
              key={exercise.id}
            >
              <Field type="checkbox" name={id} value={exercise.name} />
              <label htmlFor={exercise.id}>{exercise.name}</label>
              <Button
                type="button"
                className=""
                onClick={() => setExerciseId(exercise.id)}
              >
                Details
              </Button>
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


export default ExercisesChecklist;
