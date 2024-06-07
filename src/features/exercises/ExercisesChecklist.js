// This is where users see their subset of options and their selected exercises / difficulty

import {Col, Row, Card} from 'reactstrap';
import ExercisesCheckbox from './ExercisesCheckbox';
import { selectFullBody } from './exercisesSlice';
import { useSelector } from 'react-redux';

const ExercisesChecklist = () => {
    const exercises = useSelector(selectFullBody);
    console.log('exercises:', exercises);
    
    return (
            
            <Col className='col-sm-6'>
                {
                    exercises.map((exercise) => {
                        return (
                            <Card
                                
                                className='m-4'
                                key={exercise.id}
                            >
                                <ExercisesCheckbox exercise={exercise}/>
                            </Card>
                        );
                    })
                }
            </Col>

    );
}

export default ExercisesChecklist;