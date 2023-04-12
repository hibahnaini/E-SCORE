import React from 'react'; 

const AdditionalCriteriaButton = (props) => { 
  
  return ( 
    
    <button className="btn-simple btn-round btn btn-info mt-2"  value={props.text}>{props.text}</button> 
    
  ); 
  
} 

export {AdditionalCriteriaButton};