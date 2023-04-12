import React, { useState } from 'react';
import { Col, Input, Row } from 'reactstrap';

const Feedback =() =>{
    
const [typeState,setTypeState] =useState({
    type: "",
});
    return(
        <>
        <div className="underConstruction text-center">
            <h5>This page is still under construction</h5>
        </div>
        <div className='div-feedback'>
            <h2> Feedback </h2> 
            <p>We would like to know your feedback on the ontology! If you also think that a class, relationship, or individual should be modified, please use the feedback area to let us know. </p> 
            <Input
                      placeholder="Your Feedback"
                      type="textarea"
                      rows='8'                    
                    />
             <div className="text-center">
                <button className=" btn btn-info mt-2 " onClick="" value="feedback">Submit</button> 
             </div>
             <h2> Contribute </h2> 
             <p> Do have a suggestion for the ontology? We would like to know that too! You can propose a class, relationship, or an individual to be added to the ontology.</p> 
             <br/>
             <Row>
                <Col className="col-5">
                <label for="type">
                What do you suggest to be added?</label>
                </Col>
                <Col className="col-7">
             <select className="w-50 form-control"  name="type" onChange={(e)=>{setTypeState({type:e.target.value})}} >
                    <option key='---' value='---' selected>---</option>
                    <option key='Class' value='Class' >Class</option>
                    <option key='Relationship' value='Relationship' >Relationship</option>
                    <option key='Individual' value='Individual' >Individual</option>
            </select>
            </Col>
            </Row>
           
            {typeState.type=="Relationship"?
                <>
                <Row className="mt-4">
                <Col className="col-5">
                <label for="type">
                Name of the relationship:</label>
                <br/>
                <small>verb or start with a verb (example: hasClass)</small>
                </Col>
                <Col >
                <Input
                      placeholder="Relationship Name"
                      type="text"
                      id="relationshipName" 
                      className="w-50 form-control"                   
                    />
                </Col>
                </Row>
                <Row className="mt-4">
                <Col className="col-5">
                <label for="type">
                Domain: </label>
                <br/>
                <small>Subject of the relationship (<b>Domain</b> -> relationship -> Range)<br/> One of the existing classes or a class you suggested</small>
                </Col>
                <Col >
                <Input
                      placeholder="Domain"
                      type="text"
                      id="domain" 
                      className="w-50 form-control"                   
                    />
                
                </Col>
                </Row>
                <Row className="mt-4">
                <Col className="col-5">
                <label for="type">
                Range: </label>
                <br/>
                <small>Object of the relationship (Domain -> relationship -> <b>Range</b>)<br/> One of the existing classes or a class you suggested</small>
                </Col>
                <Col >
                <Input
                      placeholder="Range"
                      type="text"
                      id="range" 
                      className="w-50 form-control"                   
                    />
                
                </Col>
                </Row>
                <Row className="mt-4 text-center">
                <Col >
                <button className=" btn btn-info mt-2 " onClick="" value="submitRelationship">Submit Relationship</button> 
                </Col>
                </Row>
                </>

             : null
            }
            {typeState.type=="Class"?
                <>
                <Row className="mt-4">
                <Col className="col-5">
                <label for="type">
                Name of the class:</label>
               
                </Col>
                <Col >
                <Input
                      placeholder="Class Name"
                      type="text"
                      id="className" 
                      className="w-50 form-control"                   
                    />
                </Col>
                </Row>
                <Row className="mt-4">
                <Col className="col-5">
                <label for="type">
                Comment: </label>
                
                </Col>
                <Col >
                <Input
                      placeholder="Your Comment"
                      type="textarea"
                      rows='8'
                      id="commentClass"                    
                />
                <small>Please explain your suggestion to add this class with example individuals (example: Confidentiality is an individual of the class Security Criterion) </small>
                </Col>

                </Row>
                <Row className="mt-4 text-center">
                <Col >
                <button className=" btn btn-info mt-2 " onClick="" value="submitClass">Submit Class</button> 
                </Col>
                </Row>
        
                </>

             : null
            }
            {typeState.type=="Individual"?
                <>
                <Row className="mt-4">
                <Col className="col-5">
                <label for="type">
                Name of the individual:</label>
               
                </Col>
                <Col >
                <Input
                      placeholder="Individual Name"
                      type="text"
                      id="individualName" 
                      className="w-50 form-control"                   
                    />
                </Col>
                </Row>
                <Row className="mt-4">
                <Col className="col-5">
                <label for="type">
                Comment: </label>
                
                </Col>
                <Col >
                <Input
                      placeholder="Your Comment"
                      type="textarea"
                      rows='8'
                      id="commentInd"                    
                />
                <small>Please explain your suggestion to add this individual (example: Confidentiality is an individual of the class Security Criterion) </small>
                </Col>

                </Row>
                <Row className="mt-4 text-center">
                <Col >
                <button className=" btn btn-info mt-2 " onClick="" value="submitIndividual">Submit Individual</button> 
                </Col>
                </Row>
                </>

             : null
            }
            
        </div>
        </>
    )
}

export default Feedback;