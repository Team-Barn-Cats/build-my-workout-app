// Creates the page w/ details for users to view information about an exercise before selecting it

import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectExerciseById } from '../../features/exercises/exercisesSlice';
import ExerciseDetail from '../../features/exercises/ExerciseDetail';


const ExerciseDetailPage = () => {
    const { exerciseId } = useParams();
    const exercise = useSelector(selectExerciseById(exerciseId));
    console.log('exercise:', exercise)

    return (
        <Container class="modal">
            <Row>
                <ExerciseDetail exercise={exercise} />
            </Row>
        </Container>
    );
};

export default ExerciseDetailPage;