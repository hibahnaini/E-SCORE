import React from 'react'; 
import {Row, Col} from 'reactstrap';


const AdditionalCriteriaOptions = (props) => { 
  
  return ( 
    
    <Row className="mt-3">
    <Col className="col-3 ">
        What additional criteria? 
    </Col>
    <Col className="col-9  " >
    <button className=" btn-round btn btn-outline-info mt-2" onClick={props.onClickAdditionalCriteria} value="tree">Additional Criteria Tree</button> 
    <button className=" btn-round btn btn-outline-info mt-2" onClick={props.onClickAdditionalCriteria} value="all">Direct Additional Criteria</button> 
    <button className=" btn-round btn btn-outline-info mt-2" onClick={props.onClickAdditionalCriteria} value="high"> High Priority Additional Criteria </button> 
    <button className=" btn-round btn btn-outline-info mt-2" onClick={props.onClickAdditionalCriteria} value="medium"> Medium Priority AdditionalCriteria</button> 
    <button className=" btn-round btn btn-outline-info mt-2" onClick={props.onClickAdditionalCriteria} value="low"> Low Priority Additional Criteria</button>
    
     </Col>
    </Row>
    
  ); 
  
} 

export {AdditionalCriteriaOptions};