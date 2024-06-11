// This puts the exercise objects from the array into checkboxes
// Keeping this for later: <ExerciseCard exercise={exercise}/>
import { Card, CardHeader, CardTitle, CardText, CardFooter, CardBody } from "reactstrap";


const TestExercisesCheckbox = ({ exercise }) => {
  const { id, name } = exercise;
  
  return (
    <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>{id}</CardText>
            </CardBody>
        </Card>
  );
};

export default TestExercisesCheckbox;