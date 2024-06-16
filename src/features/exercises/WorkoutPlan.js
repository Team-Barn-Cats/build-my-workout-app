// This is the final "confirmation page" Yay!
import { selectExerciseDetailsByName } from "./exercisesSlice";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Col,
  CardHeader,
  CardFooter,
} from "reactstrap";

const WorkoutPlan = ({ checkedValues }) => {
  return (
    <div>
      <h2>Your Workout:</h2>
      <Col className="d-flex flex-wrap">
        {checkedValues.map((value) => (
          <Card className="col-sm-4">
            <CardHeader>{selectExerciseDetailsByName(value).name}</CardHeader>
            <CardImg
              top
              src={selectExerciseDetailsByName(value).image}
              alt={selectExerciseDetailsByName(value).name}
            />
            <CardBody>
              <CardText>
                {selectExerciseDetailsByName(value).description}
              </CardText>
              <CardFooter>
                Easy: {selectExerciseDetailsByName(value).easy}
              </CardFooter>
              <CardFooter>
                Medium: {selectExerciseDetailsByName(value).medium}
              </CardFooter>
              <CardFooter>
                Hard: {selectExerciseDetailsByName(value).hard}
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </Col>
    </div>
  );
};

export default WorkoutPlan;
