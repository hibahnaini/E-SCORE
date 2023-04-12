import React from 'react'; 
import {Badge} from 'reactstrap';

const MechanismsBadge= (props) => { 
  
  return ( 
    <Badge className="badge-info mr-3 mt-3">{props.text}</Badge>
    
  ); 
  
} 

export {MechanismsBadge};