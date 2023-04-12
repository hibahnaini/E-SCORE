import React from 'react'; 
import {Row, Col} from 'reactstrap';
import { CriteriaButton } from '../Buttons/criteriaButton';

const Criteria = (props) => { 
  
  return ( 
    
    <Row className="mt-3 ">
    <Col className="col-3">
    What we know about your security criteria...
    </Col>
    <Col className="col-9">
    {props.criteria.map(criterion => {
        return (
            
            
           
        <CriteriaButton text={criterion} onClick={props.buttonClick} />
       

        );
    })}
     </Col>
    </Row>
    
  ); 
  
} 

export {Criteria};