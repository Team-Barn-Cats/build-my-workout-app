// the component that shows up when someone selects "Lower Body"
import { selectLowerBody } from "../features/exercises/exercisesSlice";
import { Container } from "reactstrap";
import TestSimpleList from "../features/exercises/TestSimpleList";

const LowerBody = () => {
  const lowerExercises = selectLowerBody();

  return (
    <Container>
      <TestSimpleList exerciseList={lowerExercises} />
    </Container>
  );
};

export default LowerBody;
