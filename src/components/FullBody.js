// the Detail that shows up when someone selects "Full Body"

import ExercisesChecklist from "../features/exercises/ExercisesChecklist";
import {Col, Row, Card} from 'reactstrap';
import React, { useState } from "react";

// This component is a placeholder for ExerciseDetail
function TestDetail() {
    return (
      <div className='m-4'>
        
            <h4>This is where ExerciseDetail Will Render</h4>
            <p>The button needs to be next to each checklist item</p>
      </div>
    );
  }
// End of Test component

const FullBody = () => {
    const [showDetail, setShowDetail] = useState(false);
    const toggleDetail = () => {
        setShowDetail(!showDetail);
    }


    return (
        <Row className='ms-auto'>
            <ExercisesChecklist />
            
            <Col className='col-sm-6'>
                {showDetail && <TestDetail />}
                <button onClick={toggleDetail} >
                        {showDetail ? 'Turn Off ExerciseDetail' : 'Turn On ExerciseDetail'}
                      </button>
            </Col>

        </Row>
    );
};

export default FullBody;