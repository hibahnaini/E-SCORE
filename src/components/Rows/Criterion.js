import React from 'react'; 
import {Row, Col} from 'reactstrap';


const Criterion = (props) => { 
  
  return ( 
    
    <Row className="mt-3 align-items-center">
    <Col className="col-3 ">
        
    You have chosen 
    </Col>
    <Col className="col-9 pl-4 " >
      <h5 className="text-ontology">  {props.criterion} </h5>
     </Col>
    </Row>
    
  ); 
  
} 

export {Criterion};