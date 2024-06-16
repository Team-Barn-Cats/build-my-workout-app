// this is where users see additional information about each exercise and choose their difficulty level

import { Card, CardImg, CardText, CardBody, Col, CardHeader } from 'reactstrap';

const ExerciseDetail = ( {exercise} ) => {
    const { image, name, description } = exercise;

    return (
        
            <Card>
                <CardHeader>{name}</CardHeader>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        
    );
};

export default ExerciseDetail;