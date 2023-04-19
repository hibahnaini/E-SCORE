import React, { useEffect, useState } from 'react'; 
import {Row, Col} from 'reactstrap';
import { CriteriaButton } from '../Buttons/criteriaButton';
import axios from 'axios';
import { AdditionalCriteriaOptions } from './AdditionalCriteriaOptions';
import { CriterionOptions } from './CriterionOptions';
import { Criterion } from './Criterion';
import { Mechanisms } from './Mechanisms';
import { AdditionalCriteria } from './AdditionalCriteria';
import { GenericOverviewFlow,resetTree,beforeInit} from './GenericTree';
import Constants from '../../config';
const ip=Constants.ip;


const AllCriteria = (props) => { 

  const [allCriteriaState,setAllCriteriaState]=useState({
      criteria:[],
  });
  const [criterionChosenState,setCriterionChosenState]=useState({
    criterion:'',
  })
  const [mechanismsState,setMechanismsState]=useState({
    mechanisms:'',
  })
  const [additionalCriteriaState,setAdditionalCriteriaState]=useState({
    demanded:'',

  })
  const [additionalEnsuresCriteriaState, setAdditionalEnsuresCriteriaState] = useState({
    additionalCriteria: [],
    
});
const [additionalIsAppliedByCriteriaState, setAdditionalIsAppliedByCriteriaState] = useState({
    
    additionalCriteria: [],

});
const [additionalPrecedesCriteriaState, setAdditionalPrecedesCriteriaState] = useState({
   
    additionalCriteria: [],
    
});
const [additionalProvidesCriteriaState, setAdditionalProvidesCriteriaState] = useState({
   
    additionalCriteria: [],
   
});
const [additionalTestsForCriteriaState, setAdditionalTestsForCriteriaState] = useState({
   
    additionalCriteria: [],
   
});
const [additionalConservesCriteriaState, setAdditionalConservesCriteriaState] = useState({
   
    additionalCriteria: [],
   
});

const [additionalContributesToCriteriaState, setAdditionalContributesToCriteriaState] = useState({

    additionalCriteria: [],
    
});
const [additionalRevokesCriteriaState, setAdditionalRevokesCriteriaState] = useState({

    additionalCriteria: [],
});
const [additionalPriorityState, setAdditionalPriorityState] = useState({

    priority: "",
});
const [treeCriterionMechanismsState, setTreeCriterionMechanismsState] = useState({
    mechanisms: [],
});
const [loading, setLoading] = useState({
    isLoading:false,
});
  const getAllCriteria= () =>{
    setLoading({isLoading:false});
    axios.get(ip+'criteria')
        .then((response)=>{
            
            setAllCriteriaState({criteria:response.data});
            //console.log(appState.domains);
        })
        .catch(function (error) {
            console.log(error.toJSON());
        });
}

const getMechanisms= () =>{
    setLoading({isLoading:false});
    setAdditionalCriteriaState({demanded:''});
    setAdditionalPriorityState({priority:''});
    axios.get(ip+'criteria/'+criterionChosenState.criterion+'/mechanisms')
        .then((response)=>{
            
            setMechanismsState({mechanisms:response.data});
            //console.log(appState.domains);
        })
        .catch(function (error) {
            console.log(error.toJSON());
        });
}
const getAdditionalCriteria= async (crit,rel) =>{
    
    console.log(crit);
    return axios.get(ip+'criteria/'+rel+'/'+crit)
        .then(async (response)=>{
            console.log(response.data);
            if(rel=="ensures")
            await setAdditionalEnsuresCriteriaState({additionalCriteria:response.data});
            if(rel=="isAppliedBy")
            await setAdditionalIsAppliedByCriteriaState({additionalCriteria:response.data});
            if(rel=="precedes")
            await setAdditionalPrecedesCriteriaState({additionalCriteria:response.data});
            if(rel=="provides")
            await setAdditionalProvidesCriteriaState({additionalCriteria:response.data});
            if(rel=="testsFor")
            await setAdditionalTestsForCriteriaState({additionalCriteria:response.data});
            if(rel=="conserves")
            await setAdditionalConservesCriteriaState({additionalCriteria:response.data});
            if(rel=="contributesTo")
            await setAdditionalContributesToCriteriaState({additionalCriteria:response.data});
            if(rel=="revokes")
            await setAdditionalRevokesCriteriaState({additionalCriteria:response.data});


            //console.log(additionalPrecedesCriteriaState.additionalCriteria);
        })
        .catch(function (error) {
            console.log(error.toJSON());
        });
    
}
const getAdditionalOptions = () =>{
    setMechanismsState({mechanisms:''});
    setAdditionalCriteriaState({demanded:'true'});
    setLoading({isLoading:false});

}

const addAdditionalCriteria = async (event) =>{
        setMechanismsState({mechanisms:''});
        setAdditionalPriorityState({priority:event.target.value});
        console.log(criterionChosenState.criterion);
        //setTreeCriterionMechanismsState({mechanisms:[]});
        if(event.target.value=="high" || event.target.value=="all") {
            getAdditionalCriteria(criterionChosenState.criterion,"ensures");
            getAdditionalCriteria(criterionChosenState.criterion,"isAppliedBy");
            getAdditionalCriteria(criterionChosenState.criterion,"precedes");
            
        }
        if(event.target.value=="medium" || event.target.value=="all"){
            getAdditionalCriteria(criterionChosenState.criterion,"provides");
            getAdditionalCriteria(criterionChosenState.criterion,"testsFor");
            getAdditionalCriteria(criterionChosenState.criterion,"conserves");
           
        }
        if(event.target.value=="low" || event.target.value=="all"){
            getAdditionalCriteria(criterionChosenState.criterion,"revokes");
            getAdditionalCriteria(criterionChosenState.criterion,"contributesTo");
        }
       
        if(event.target.value=="tree"){
            /* root[0]={
                id :criterionChosenState.criterionChosen,
                type:'input',
                data:{label:criterionChosenState.criterionChosen},
                position:{
                    x:250,
                    y:0,
                },
                style: {
                    background: '#D6D5E6',
                    color: '#333',
                    border: '1px solid #222138',
                    width: 180,
                },
            }; */
            //console.log(root);
            //setNodesState({nodes:root});
            //allCriteria=[criterionChosenState.criterionChosen];
            setLoading({isLoading:true});
            event.target.classList.add("disabled");
            resetTree();
            await beforeInit(criterionChosenState.criterion);
          /*   for (let j=0; j<nodesState.nodes.length;j++){
                await getCriteriaTree(nodesState.nodes[j].id,j*100);
               
            } */
            setLoading({isLoading:false});
            event.target.classList.remove("disabled");
            setAdditionalPriorityState({priority:"treeOK"});
        
           
        }


    

}
const addTreeMechanisms = (event)=>{
    console.log(event.target.innerText)
    getCriteriaTreeMechanism(event.target.innerText);
}
const getCriteriaTreeMechanism =(crit) =>{
    console.log(crit);
    axios.get(ip+'criteria/'+crit+'/mechanisms')
    .then((response)=>{
        console.log(response.data);
        setTreeCriterionMechanismsState({mechanisms:response.data});
        //console.log(criterionChosenMechanismsState.mechanisms);
    })
    .catch(function (error) {
        console.log(error.toJSON());
    });


}
useEffect(() => {
    getAllCriteria();

},[]);


  
  return ( 
    <>
    <Row className="mt-3 ">
    <Col className="col-3">
    All security criteria...
    </Col>
    <Col className="col-9">
    {allCriteriaState.criteria.map(criterion => {
        return (
            
            
           
        <CriteriaButton text={criterion} onClick={(e) => {setCriterionChosenState({criterion:e.target.value}); setMechanismsState({mechanisms:''}); setAdditionalPriorityState({priority:''});}} />
       

        );
    })}
     </Col>
    </Row>
    {criterionChosenState.criterion!='' ?
    <>
    <Criterion criterion= {criterionChosenState.criterion} />
    <CriterionOptions onClickSecurity={getMechanisms} onClickAdditionalCriteria={getAdditionalOptions} />
    </>

     : null
    }
    {mechanismsState.mechanisms.length ? (
                
                <Mechanisms mechanisms={mechanismsState.mechanisms} type="1"/>
                
             )
            : null
    }
    {additionalCriteriaState.demanded=="true" ? (
                
                <AdditionalCriteriaOptions onClickAdditionalCriteria={addAdditionalCriteria}/>
                
             )
            : null
    }
     {(additionalPriorityState.priority=="high" || additionalPriorityState.priority=="all") && (additionalEnsuresCriteriaState.additionalCriteria.length || additionalIsAppliedByCriteriaState.additionalCriteria.length || additionalPrecedesCriteriaState.additionalCriteria.length) ?  (
                
                <>
                    <Row>
                        <Col className="col-3"><p className="text-danger">High Priority Criteria</p></Col>
                        <Col className="col-9"><hr className="w-100"></hr></Col>
                    </Row>   
                    {additionalEnsuresCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalEnsuresCriteriaState.additionalCriteria} criterion={criterionChosenState.criterion} rel="ensure" />
                        
                        
                    )
                    : null
                    }

           
              
                
                             
                    {additionalIsAppliedByCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalIsAppliedByCriteriaState.additionalCriteria} criterion={criterionChosenState.criterion} rel="are applied by" />
                    
                        
                    )
                    : null
                    }
                    {additionalPrecedesCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalPrecedesCriteriaState.additionalCriteria} criterion={criterionChosenState.criterion} rel="precede" />
                    
                        
                    )
                    : null
                    }
            </>
            )
            : <>
                {additionalPriorityState.priority=="high" || additionalPriorityState.priority=="all" ? (
                <Row className="mt-3">
                    <Col className="col-3"><p className="text-danger">High Priority Criteria</p></Col>
                    <Col className="col-9 pl-4"><h5 className="text-ontology">None</h5></Col>
                </Row>) : null}
            </>
            }

            {(additionalPriorityState.priority=="medium" || additionalPriorityState.priority=="all") && (additionalProvidesCriteriaState.additionalCriteria.length || additionalTestsForCriteriaState.additionalCriteria.length || additionalConservesCriteriaState.additionalCriteria.length) ?  (
                
                <>
                    <Row>
                        <Col className="col-3"><p className="text-warning">Medium Priority Criteria</p></Col>
                        <Col className="col-9"><hr className="w-100"></hr></Col>
                    </Row>   
                    {additionalProvidesCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalProvidesCriteriaState.additionalCriteria} criterion={criterionChosenState.criterion} rel="provide" />
                        
                        
                    )
                    : null
                    }

           
              
                
                             
                    {additionalTestsForCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalTestsForCriteriaState.additionalCriteria} criterion={criterionChosenState.criterion} rel="test for" />
                    
                        
                    )
                    : null
                    }
                    {additionalConservesCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalConservesCriteriaState.additionalCriteria} criterion={criterionChosenState.criterion} rel="conserve" />
                    
                        
                    )
                    : null
                    }
            </>
            )
            : <>
                {additionalPriorityState.priority=="medium" || additionalPriorityState.priority=="all" ? (
                <Row className="mt-3">
                    <Col className="col-3"><p className="text-warning">Medium Priority Criteria</p></Col>
                    <Col className="col-9 pl-4"><h5 className="text-ontology">None</h5></Col>
                </Row>) : null}
            </>
            }
            {(additionalPriorityState.priority=="low" || additionalPriorityState.priority=="all") && (additionalRevokesCriteriaState.additionalCriteria.length || additionalContributesToCriteriaState.additionalCriteria.length)  ?  (
                
                <>
                    <Row>
                        <Col className="col-3"><p className="text-success">Low Priority Criteria</p></Col>
                        <Col className="col-9"><hr className="w-100"></hr></Col>
                    </Row>   
                    {additionalRevokesCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalRevokesCriteriaState.additionalCriteria} criterion={criterionChosenState.criterion} rel="revoke" />
                        
                        
                    )
                    : null
                    }

           
              
                
                             
                    {additionalContributesToCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalContributesToCriteriaState.additionalCriteria} criterion={criterionChosenState.criterion} rel="contribute to" />
                    
                        
                    )
                    : null
                    }
                   
            </>
            )
            : <>
                {additionalPriorityState.priority=="low" || additionalPriorityState.priority=="all" ? (
                <Row className="mt-3">
                    <Col className="col-3"><p className="text-success">Low Priority Criteria</p></Col>
                    <Col className="col-9 pl-4 "><h5 className="text-ontology">None</h5></Col>

                </Row>) : null}
            </>
            }
            {loading.isLoading ? <Row className="mt-3">
                    <Col className="col-6 text-right "><h3 className="mt-2">Loading</h3>
                    </Col>
                    <Col  className="col-6 text-left">
                    <img
                      alt="..."
                      className=""
                      src={require("../../assets/img/loading.gif")}
                      width="15%"
                    /></Col></Row> : null }
            {additionalPriorityState.priority=="treeOK" ?
                 (<Row className="mt-3">
                    <Col className="col-3"><p className="text-ontology">Criteria Tree</p>
                        <br/>
                        {treeCriterionMechanismsState.mechanisms.length ?
                                (<Row className="mt-3">
                                    <Col className="col">
                                        <p className="text-default">Security Mechanisms:</p>
                                        <Mechanisms mechanisms={treeCriterionMechanismsState.mechanisms} />

                                    </Col>
                                   

                                </Row>) : null}

                    </Col>

                    <Col className="col-9 pl-4 h-map"><hr className="w-100 bg-default"/><GenericOverviewFlow criterion={criterionChosenState.criterion}  onClick={addTreeMechanisms}/></Col>

                 </Row>) : null}

    </>
  ); 
  
} 

export {AllCriteria};