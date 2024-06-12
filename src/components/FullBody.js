// the Detail that shows up when someone selects "Full Body"
import { selectAllExercises } from "../features/exercises/exercisesSlice";
import { Container } from "reactstrap";
import TestSimpleList from "../features/exercises/TestSimpleList";

const FullBody = () => {
  const fullBodyExercises = selectAllExercises();

  return (
    <Container>
      <TestSimpleList exerciseList={fullBodyExercises} />
    </Container>
  );
};

export default FullBody;