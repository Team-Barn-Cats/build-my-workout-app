// the component that shows up when someone selects "Upper Body"
import { Container, Row, Col, Button } from 'reactstrap';
import ExerciseDetail from '../features/exercises/ExerciseDetail';
import TestExercisesList from '../features/exercises/TestExercisesList';
import { selectExerciseDetailsById } from "../features/exercises/exercisesSlice";
import ExercisesChecklist from '../features/exercises/ExercisesChecklist';
import { useState } from 'react';

const UpperBody = () => {
    const [exerciseId, setExerciseId] = useState(0);
    const selectedExercise = selectExerciseDetailsById(exerciseId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <TestExercisesList setExerciseId={setExerciseId} />
                </Col>
                <Col sm='7' md='5'>
                    <ExerciseDetail exercise={selectedExercise} />
                </Col>
            </Row>
        </Container>
    );
};

export default UpperBody;