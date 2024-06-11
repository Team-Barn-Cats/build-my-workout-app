import { Col, Row } from "reactstrap";
import TestExercisesCheckbox from "./TestExercisesCheckbox";
import { selectAllExercises } from "./exercisesSlice";

const TestExercisesList = ({setExerciseId}) => {
    const exercises = selectAllExercises();

    return (
        <Row>
            {exercises.map((exercise) => {
                return (
                    <Col key={exercise.id} onClick={() => setExerciseId(exercise.id)}>
                        <TestExercisesCheckbox exercise={exercise} />
                    </Col>
                )
            })}
        </Row>
    );
};

export default TestExercisesList;