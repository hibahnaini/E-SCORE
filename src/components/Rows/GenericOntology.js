import React, { useState } from 'react'; 
import {Row, Col} from 'reactstrap';
import { AllCriteria } from './AllCriteria';

const GenericOntology = (props) => { 
  const [checkedState,setCheckedState]=useState({
    checked:'',
  })
 
  const onClicked = (event) => {
    setCheckedState({checked:event.target.checked});
  }
  return ( 
    <>
    <Row className='mt-3'>
             <Col className="col-3">
             
             Would you like to explore the generic ontology?
             </Col>
             <Col className="col-9 pl-5">
                <div className="custom-switch custom-control">
                    <input type="checkbox" id="switch1" className="custom-control-input" onChange={onClicked}/>
                        <label className="custom-control-label" for="switch1" ></label>
                </div>
              </Col>
    </Row>
    {checkedState.checked ?
    <AllCriteria additionalCriteriaOption={props.additionalCriteriaOption}/>

     : null
    }
</>
    
  ); 
  
} 

export {GenericOntology};