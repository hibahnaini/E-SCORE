import React from 'react'; 

const CriteriaButton = (props) => { 
  
  return ( 
    
    <button className="btn-simple btn-round btn btn-info mt-2" onClick={props.onClick} value={props.text}>{props.text}</button> 
    
  ); 
  
} 

export {CriteriaButton};