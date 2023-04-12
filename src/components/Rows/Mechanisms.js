import React from 'react'; 
import {Row, Col} from 'reactstrap';
import { MechanismsBadge} from '../Buttons/MechanismsButton';

const Mechanisms = (props) => { 
  
  return ( 
    
    <Row className='mt-3'>
      {props.type=="1"?
      (<Col className="col-3">
      What we know about your security mechanisms...
      </Col>) : null}
    
    <Col className="col">
    {props.mechanisms.map(mechanism => {
        return (
            
            
           
        <MechanismsBadge text={mechanism} />
       

        );
    })}
     </Col>
    </Row>
    
  ); 
  
} 

export {Mechanisms};