import React from 'react'; 
import {Row, Col} from 'reactstrap';
import { AdditionalCriteriaButton } from '../Buttons/AdditionalCriteriaButton';

const AdditionalCriteria = (props) => { 
  
  return ( 
    
    <Row className="mt-3 align-items-center">
    <Col className="col-3">
    Additional criteria that {props.rel} {props.criterion}
    </Col>
    <Col className="col-9">
    {props.criteria.map(criterion => {
        return (
            
            
           
        <AdditionalCriteriaButton text={criterion}  />
       

        );
    })}
     </Col>
    </Row>
    
  ); 
  
} 

export {AdditionalCriteria};