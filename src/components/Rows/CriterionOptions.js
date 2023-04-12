import React from 'react'; 
import {Row, Col} from 'reactstrap';


const CriterionOptions = (props) => { 
  
  return ( 
    
    <Row className="mt-2 align-items-center">
    <Col className="col-3 ">
        What would you like to know? 
    </Col>
    <Col className="col-9  " >
    <button className="btn-simple btn-round btn btn-outline-default mt-2" onClick={props.onClickSecurity} value="SecurityMechanisms">Security Mechanisms</button> 
    <button className="btn-simple btn-round btn btn-outline-default mt-2" onClick={props.onClickAdditionalCriteria} value="AdditionalCriteria">Additional Criteria</button> 
     </Col>
    </Row>
    
  ); 
  
} 

export {CriterionOptions};