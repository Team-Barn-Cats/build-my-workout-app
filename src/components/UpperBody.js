// the component that shows up when someone selects "Upper Body"
import { selectUpperBody } from "../features/exercises/exercisesSlice";
import { Container } from "reactstrap";
import TestSimpleList from "../features/exercises/TestSimpleList";

const UpperBody = () => {
  const upperExercises = selectUpperBody();

  return (
    <Container>
      <TestSimpleList exerciseList={upperExercises} />
    </Container>
  );
};

export default UpperBody;