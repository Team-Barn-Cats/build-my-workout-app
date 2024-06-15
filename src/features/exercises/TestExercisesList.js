/* import { Col, Row, Button, Card, CardHeader,CardBody } from "reactstrap";
import TestExercisesCheckbox from "./TestExercisesCheckbox";
import { selectAllExercises } from "./exercisesSlice";

const TestExercisesList = ({setExerciseId}) => {
    const exercises = selectAllExercises();

    return (
        <Card >
            <CardHeader>Select Five:
            </CardHeader>
            {exercises.map((exercise) => {
                return (
                    <CardBody key={exercise.id} className="col-sm-12 border d-flex justify-content-between align-items-center">
                        <TestExercisesCheckbox exercise={exercise} />
                        <Button type='button' className="" onClick={() => setExerciseId(exercise.id)}>Details</Button>
                    </CardBody>
                )
            })}
        </Card>
    );
};

export default TestExercisesList; */