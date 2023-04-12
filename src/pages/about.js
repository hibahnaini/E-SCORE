import React from 'react';

const About =() =>{
    return(
        <div className='div-about'>
            <h2> About </h2>  
            <p color="dark">The security criteria ontology aims to propose the specification of additional security requirements based on security criteria considered in a domain.
            It also proposes security mechanisms for each security criterion. A security mechanism belongs to one or more domain and enforces one or more security criteria. 
            For example, the CHIP and PIN security mechanism belong to the banking domain and enforces Authentication. Moreover, a security criterion can have a contribution
            another security criterion. For example, Access Control ensures Confidentiality. From such information in the ontology, we are able to provide the security criteria
            taken into consideration in each domain, their security mechanisms, and suggest additional security criteria. Yet, the ontology only represents the knowledge we were able, up until now,
            to gather about each domain.
            </p>
        </div>
    )
}

export default About;
