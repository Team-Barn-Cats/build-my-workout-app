// This is where users see their subset of options and their selected exercises / difficulty

import {Col, Row} from 'reactstrap';
import ExercisesCheckbox from './ExercisesCheckbox';
import { selectFullBody } from './exercisesSlice';
import { useSelector } from 'react-redux';

const ExercisesChecklist = () => {
    const exercises = useSelector(selectFullBody);
    console.log('exercises:', exercises);
    
    return (
        <Row className='ms-auto'>
            {
                exercises.map((exercise) => {
                    return (
                        <Col
                            md='5'
                            className='m-4'
                            key={exercise.id}
                        >
                            <ExercisesCheckbox exercise={exercise}/>
                        </Col>
                    );
                }) 
            }

        </Row>
    );
}

export default ExercisesChecklist;