import React, { useEffect, useState } from 'react';
import { Row,Col } from 'reactstrap';
import axios from 'axios';
import { MarkerType } from 'react-flow-renderer';
import { GenericOntology } from '../components/Rows/GenericOntology';
import { Criteria } from '../components/Rows/Criteria';
import { Criterion } from '../components/Rows/Criterion';
import { CriterionOptions } from '../components/Rows/CriterionOptions';
import { Mechanisms} from '../components/Rows/Mechanisms';
import { AdditionalCriteriaOptions } from '../components/Rows/AdditionalCriteriaOptions';
import { AdditionalCriteria } from '../components/Rows/AdditionalCriteria';
import OverviewFlow, { beforeInit, resetTree } from '../components/Rows/Tree';
import { AllCriteria } from '../components/Rows/AllCriteria';
import Constants from '../config';
const ip=Constants.ip;

/*

Calls the ontology's API to give answers in the form

*/

const Ontology =() =>{
    let root=[];
    let rel=[];
    let allCriteria=[];
    const [nodesState,setNodesState] =useState({
        nodes: [],
    });
    const [edgesState,setEdgesState] =useState({
        edges: [],
    });
    const [appState, setAppState] = useState({
        domains: [],
        

    })  
    const [criteriaState, setCriteriaState] = useState({
        criteria: [],
    }); 
    const [domainChosenState, setDomainChosenState] = useState({
        domainChosen: '',
    });
    const [criterionChosenState, setCriterionChosenState] = useState({
        criterionChosen: '',
    });
    const [criterionChosenMechanismsState, setCriterionChosenMechanismsState] = useState({
        mechanisms: [],
    });
    const [treeCriterionMechanismsState, setTreeCriterionMechanismsState] = useState({
        mechanisms: [],
    });
    const [additionalCriteriaState, setAdditionalCriteriaState] = useState({
        demanded: '',
    });
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

        priority: [],
    });
    const [loading, setLoading] = useState({
        isLoading:false,
    });

    //var criteria;
    const getDomains =() =>{
        axios.get(ip+'domain')
        .then((response)=>{
            
            setAppState({domains:response.data});
            console.log(appState.domains);
        })
        .catch(function (error) {
            console.log(error.toJSON());
        });
    }
    const getDomainCriteria =(dom) =>{
        if(dom!='---'){
        axios.get(ip+'domain/'+dom+'/criteria')
        .then((response)=>{
            
            setCriteriaState({criteria:response.data});
            console.log(criteriaState.criteria);
        })
        .catch(function (error) {
            console.log(error.toJSON());
        });
    }

    }  
    const getCriteriaMechanismInDomain =(crit,dom) =>{
        console.log(crit);
        console.log(dom);
        axios.get(ip+'domain/'+dom+'/'+crit)
        .then((response)=>{
            console.log(response.data);
            setCriterionChosenMechanismsState({mechanisms:response.data});
            //console.log(criterionChosenMechanismsState.mechanisms);
        })
        .catch(function (error) {
            console.log(error.toJSON());
        });
    

    } 
    const getCriteriaTreeMechanismInDomain =(crit,dom) =>{
        console.log(crit);
        console.log(dom);
        axios.get(ip+'domain/'+dom+'/'+crit)
        .then((response)=>{
            console.log(response.data);
            setTreeCriterionMechanismsState({mechanisms:response.data});
            //console.log(criterionChosenMechanismsState.mechanisms);
        })
        .catch(function (error) {
            console.log(error.toJSON());
        });
    

    } 

    const getAdditionalCriteriaInDomain = async (crit,dom,rel) =>{
        //console.log(crit);
        //console.log(dom);
        //console.log(rel);
        return axios.get(ip+'domain/'+dom+'/'+rel+'/'+crit)
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

            console.log(additionalPrecedesCriteriaState.additionalCriteria);
        })
        .catch(function (error) {
            console.log(error.toJSON());
        });
    

    } 

    

    const addCriteriaQuestion = (event) => {
        setDomainChosenState({domainChosen:event.target.value});
        console.log(domainChosenState.domainChosen);
        getDomainCriteria(event.target.value);
        setCriterionChosenState({criterionChosen:''});
        setCriterionChosenMechanismsState({mechanisms:''});
        setAdditionalCriteriaState({demanded:''});
        resetHigh();
        resetMedium();
        resetLow();
        setAdditionalPriorityState({priority:''});
        setTreeCriterionMechanismsState({mechanisms:[]});
        setLoading({isLoading:false});

       
    }  
    const criteriaClicked = async (event) => {
        setCriterionChosenState({criterionChosen:event.target.value});
        setCriterionChosenMechanismsState({mechanisms:''});
        setAdditionalCriteriaState({demanded:''});
        resetHigh();
        resetMedium();
        resetLow();
        setAdditionalPriorityState({priority:''});
        setTreeCriterionMechanismsState({mechanisms:[]});
        setLoading({isLoading:false});
        //resetTree();
        //await beforeInit(event.target.value);
        //console.log(event.target.value);
        //console.log(criterionChosenState.criterionChosen);


    }
    const addMechanisms = () => {
        //setCriterionChosenMechanismsState({mechanisms:event.target.value});

        getCriteriaMechanismInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen);
        console.log(criterionChosenMechanismsState.mechanisms);
        setAdditionalCriteriaState({demanded:''});
        resetHigh();
        resetMedium();
        resetLow();
        setAdditionalPriorityState({priority:''});
        setTreeCriterionMechanismsState({mechanisms:[]});
        setLoading({isLoading:false});
       
    } 
    const addTreeMechanisms = (event)=>{
        console.log(event.target.innerText)
        getCriteriaTreeMechanismInDomain(event.target.innerText,domainChosenState.domainChosen);
    }
    const additionalCriteria = () => {
        setCriterionChosenMechanismsState({mechanisms:''});
        setAdditionalCriteriaState({demanded:"yes"});
        setAdditionalPriorityState({priority:''});
        setTreeCriterionMechanismsState({mechanisms:[]});
        setLoading({isLoading:false});
        //console.log(event.target.value);
        //console.log(criterionChosenState.criterionChosen);


    }

    const additionalCriteriaOption = async (event) => {
        setCriterionChosenMechanismsState({mechanisms:''});
        setAdditionalPriorityState({priority:event.target.value});
        setTreeCriterionMechanismsState({mechanisms:[]});
        if(event.target.value=="high" || event.target.value=="all") {
            getAdditionalCriteriaInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen,"ensures");
            getAdditionalCriteriaInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen,"isAppliedBy");
            getAdditionalCriteriaInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen,"precedes");
            
        }
        if(event.target.value=="medium" || event.target.value=="all"){
            getAdditionalCriteriaInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen,"provides");
            getAdditionalCriteriaInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen,"testsFor");
            getAdditionalCriteriaInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen,"conserves");
           
        }
        if(event.target.value=="low" || event.target.value=="all"){
            getAdditionalCriteriaInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen,"revokes");
            getAdditionalCriteriaInDomain(criterionChosenState.criterionChosen,domainChosenState.domainChosen,"contributesTo");
        }
        
        if(event.target.value=="tree"){
            setLoading({isLoading:true});
            event.target.classList.add("disabled");
            root[0]={
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
            };
            //console.log(root);
            setNodesState({nodes:root});
            allCriteria=[criterionChosenState.criterionChosen];
            resetTree();
            
            await beforeInit(criterionChosenState.criterionChosen,domainChosenState.domainChosen);
            setLoading({isLoading:false});
            event.target.classList.remove("disabled");
          /*   for (let j=0; j<nodesState.nodes.length;j++){
                await getCriteriaTree(nodesState.nodes[j].id,j*100);
               
            } */
            setAdditionalPriorityState({priority:"treeOK"});
            console.log(allCriteria.length)
        }


    }

   /*  const getCriteriaTree= async (criteria, row) =>{
        //resetHigh();
        //resetMedium();
        //resetLow();
        console.log(additionalEnsuresCriteriaState.additionalCriteria );
        console.log(criteria);
        //console.log(root);
        await getAdditionalCriteriaInDomain(criteria,domainChosenState.domainChosen,"ensures").then(
            ()=>{
                console.log(...additionalEnsuresCriteriaState.additionalCriteria);
                allCriteria.push(...additionalEnsuresCriteriaState.additionalCriteria);
                console.log(allCriteria);
                for(let i=0;i<additionalEnsuresCriteriaState.additionalCriteria.length;i++){
                    //console.log(additionalEnsuresCriteriaState.additionalCriteria[i]);
                    //console.log(!root.find(element => element.id === additionalEnsuresCriteriaState.additionalCriteria[i]));
                    if(additionalEnsuresCriteriaState.additionalCriteria[i]!=criterionChosenState && !root.find(element => element.id === additionalEnsuresCriteriaState.additionalCriteria[i]) ){
                    root.push({
                        id :additionalEnsuresCriteriaState.additionalCriteria[i],
                        data:{label:additionalEnsuresCriteriaState.additionalCriteria[i]},
                        position:{
                            x:250+(i*(-1)+1)*175,
                            y:i+100,
                        }

                    });
                    rel.push({
                        id: (additionalEnsuresCriteriaState.additionalCriteria[i]+'-'+criteria), target: additionalEnsuresCriteriaState.additionalCriteria[i], source: criteria, label: 'ensures ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
                    });
                    
                    //getCriteriaTree(additionalEnsuresCriteriaState.additionalCriteria[i],row+100);
                    }
                    //else continue;
                }
            }
        );
        await getAdditionalCriteriaInDomain(criteria,domainChosenState.domainChosen,"isAppliedBy").then(
            ()=>{
                allCriteria.push(...additionalIsAppliedByCriteriaState.additionalCriteria);
                for(let i=0;i<additionalIsAppliedByCriteriaState.additionalCriteria.length;i++){
                    console.log(additionalIsAppliedByCriteriaState.additionalCriteria[i]);
                    if(additionalIsAppliedByCriteriaState.additionalCriteria[i]!=criterionChosenState && !root.find(element => element.id === additionalIsAppliedByCriteriaState.additionalCriteria[i]) ){
                    root.push({
                        id :additionalIsAppliedByCriteriaState.additionalCriteria[i],
                        data:{label:additionalIsAppliedByCriteriaState.additionalCriteria[i]},
                        position:{
                            x:250+(i+1)*75,
                            y:i+200,
                        }

                    });
                    rel.push({
                        id: (additionalIsAppliedByCriteriaState.additionalCriteria[i]+'-'+criteria), target: additionalIsAppliedByCriteriaState.additionalCriteria[i], source: criteria, label: 'isAppliedBy ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
                    });
                    //getCriteriaTree(additionalIsAppliedByCriteriaState.additionalCriteria[i],row+100);
                }
                //else continue;
            }

            }
        );
        await getAdditionalCriteriaInDomain(criteria,domainChosenState.domainChosen,"precedes").then(
            ()=>{
                allCriteria.push(...additionalPrecedesCriteriaState.additionalCriteria);
                for(let i=0;i<additionalPrecedesCriteriaState.additionalCriteria.length;i++){
                    console.log(additionalPrecedesCriteriaState.additionalCriteria[i]);
                    if(additionalPrecedesCriteriaState.additionalCriteria[i]!=criterionChosenState && !root.find(element => element.id === additionalPrecedesCriteriaState.additionalCriteria[i]) ){
                    root.push({
                        id :additionalPrecedesCriteriaState.additionalCriteria[i],
                        data:{label:additionalPrecedesCriteriaState.additionalCriteria[i]},
                        position:{
                            x:250+(i*(-1)+1)*75,
                            y:i+150,
                        }

                    });
                    rel.push({
                        id: (additionalPrecedesCriteriaState.additionalCriteria[i]+'-'+criteria), target: additionalPrecedesCriteriaState.additionalCriteria[i], source: criteria, label: 'precedes ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
                    });
                    //getCriteriaTree(additionalPrecedesCriteriaState.additionalCriteria[i],row+100);
                }
                //else continue;
            }
            }
        );
        await getAdditionalCriteriaInDomain(criteria,domainChosenState.domainChosen,"provides").then(
            ()=>{
                allCriteria.push(...additionalProvidesCriteriaState.additionalCriteria);
                for(let i=0;i<additionalProvidesCriteriaState.additionalCriteria.length;i++){
                    console.log(additionalProvidesCriteriaState.additionalCriteria[i]);
                    if(additionalProvidesCriteriaState.additionalCriteria[i]!=criterionChosenState && !root.find(element => element.id === additionalProvidesCriteriaState.additionalCriteria[i]) ){
                    root.push({
                        id :additionalProvidesCriteriaState.additionalCriteria[i],
                        data:{label:additionalProvidesCriteriaState.additionalCriteria[i]},
                        position:{
                            x:250+(i+1)*75,
                            y:i+250,
                        }

                    });
                    rel.push({
                        id: (additionalProvidesCriteriaState.additionalCriteria[i]+'-'+criteria), target: additionalProvidesCriteriaState.additionalCriteria[i], source: criteria, label: 'provides ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
                    });
                   // getCriteriaTree(additionalProvidesCriteriaState.additionalCriteria[i],row+100);
                }
                //else continue;
            }
            }
        );
        await getAdditionalCriteriaInDomain(criteria,domainChosenState.domainChosen,"testsFor").then(
            ()=>{
                allCriteria.push(...additionalTestsForCriteriaState.additionalCriteria);
                for(let i=0;i<additionalTestsForCriteriaState.additionalCriteria.length;i++){
                    console.log(additionalTestsForCriteriaState.additionalCriteria[i]);
                    if(additionalTestsForCriteriaState.additionalCriteria[i]!=criterionChosenState && !root.find(element => element.id === additionalTestsForCriteriaState.additionalCriteria[i]) ){
                    root.push({
                        id :additionalTestsForCriteriaState.additionalCriteria[i],
                        data:{label:additionalTestsForCriteriaState.additionalCriteria[i]},
                        position:{
                            x:250+(i+1)*75,
                            y:i+250,
                        }

                    });
                    rel.push({
                        id: (additionalTestsForCriteriaState.additionalCriteria[i]+'-'+criteria), target: additionalTestsForCriteriaState.additionalCriteria[i], source: criteria, label: 'testsFor ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
                    });
                    //getCriteriaTree(additionalTestsForCriteriaState.additionalCriteria[i],row+100);
                }
               // else continue;
            }
            }
        );
        await getAdditionalCriteriaInDomain(criteria,domainChosenState.domainChosen,"conserves").then(
            ()=>{
                allCriteria.push(...additionalConservesCriteriaState.additionalCriteria);
                for(let i=0;i<additionalConservesCriteriaState.additionalCriteria.length;i++){
                    console.log(additionalConservesCriteriaState.additionalCriteria[i]);
                    if(additionalConservesCriteriaState.additionalCriteria[i]!=criterionChosenState && !root.find(element => element.id === additionalConservesCriteriaState.additionalCriteria[i]) ){
                    root.push({
                        id :additionalConservesCriteriaState.additionalCriteria[i],
                        data:{label:additionalConservesCriteriaState.additionalCriteria[i]},
                        position:{
                            x:50+(i*-1)*375,
                            y:i+150,
                        }

                    });
                    rel.push({
                        id: (additionalConservesCriteriaState.additionalCriteria[i]+'-'+criteria), target: additionalConservesCriteriaState.additionalCriteria[i], source: criteria, label: 'conserves ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
                    });
                    //getCriteriaTree(additionalConservesCriteriaState.additionalCriteria[i],row+100);
                }
                //else continue;
            }

            }
        );
        await getAdditionalCriteriaInDomain(criteria,domainChosenState.domainChosen,"revokes").then(
            ()=>{
                allCriteria.push(...additionalRevokesCriteriaState.additionalCriteria);
                for(let i=0;i<additionalRevokesCriteriaState.additionalCriteria.length;i++){
                    console.log(additionalRevokesCriteriaState.additionalCriteria[i]);
                    if(additionalRevokesCriteriaState.additionalCriteria[i]!=criterionChosenState && !root.find(element => element.id === additionalRevokesCriteriaState.additionalCriteria[i]) ){
                    root.push({
                        id :additionalRevokesCriteriaState.additionalCriteria[i],
                        data:{label:additionalRevokesCriteriaState.additionalCriteria[i]},
                        position:{
                            x:50+(i*-1)*375,
                            y:i+200,
                        }

                    });
                    rel.push({
                        id: (additionalRevokesCriteriaState.additionalCriteria[i]+'-'+criteria), target: additionalRevokesCriteriaState.additionalCriteria[i], source: criteria, label: 'revokes ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
                    });
                    //getCriteriaTree(additionalContributesToCriteriaState.additionalCriteria[i],row+100);
                }
            }
            }
        );
        getAdditionalCriteriaInDomain(criteria,domainChosenState.domainChosen,"contributesTo").then(
            ()=>{
                allCriteria.push(...additionalContributesToCriteriaState.additionalCriteria);
                for(let i=0;i<additionalContributesToCriteriaState.additionalCriteria.length;i++){
                    console.log(additionalContributesToCriteriaState.additionalCriteria[i]);
                    if(additionalContributesToCriteriaState.additionalCriteria[i]!=criterionChosenState && !root.find(element => element.id === additionalContributesToCriteriaState.additionalCriteria[i]) ){
                    root.push({
                        id :additionalContributesToCriteriaState.additionalCriteria[i],
                        data:{label:additionalContributesToCriteriaState.additionalCriteria[i]},
                        position:{
                            x:50+(i*-1)*375,
                            y:i+200,
                        }

                    });
                    rel.push({
                        id: (additionalContributesToCriteriaState.additionalCriteria[i]+'-'+criteria), target: additionalContributesToCriteriaState.additionalCriteria[i], source: criteria, label: 'contributesTo ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
                    });
                    //getCriteriaTree(additionalContributesToCriteriaState.additionalCriteria[i],row+100);
                }
            }
            }
        );
       
        //allCriteria.push(...additionalIsAppliedByCriteriaState.additionalCriteria);
        //allCriteria.push(...additionalPrecedesCriteriaState.additionalCriteria);
        //allCriteria.push(...additionalProvidesCriteriaState.additionalCriteria);
        //allCriteria.push(...additionalTestsForCriteriaState.additionalCriteria);
        //allCriteria.push(...additionalConservesCriteriaState.additionalCriteria);
        //allCriteria.push(...additionalRevokesCriteriaState.additionalCriteria);
        //allCriteria.push(...additionalContributesToCriteriaState.additionalCriteria);
        console.log(allCriteria);
        //console.log(ensures);
       // console.log(additionalEnsuresCriteriaState.additionalCriteria +' '+row);

               
               
               
                
                
                
               
                
    
        //console.log(rel);
        //return root;
        //if(j+1<=allCriteria.length)
        //getCriteriaTree(allCriteria[j+1],row+100,j+1);
        setNodesState({nodes:root});
        setEdgesState({edges:rel});
        console.log(edgesState.edges);
        console.log(nodesState.nodes);
    } */
    const resetHigh = () =>{
        setAdditionalEnsuresCriteriaState({additionalCriteria:[]});
        setAdditionalPrecedesCriteriaState({additionalCriteria:[]});
        setAdditionalIsAppliedByCriteriaState({additionalCriteria:[]});
    }
    const resetMedium = () =>{
        setAdditionalProvidesCriteriaState({additionalCriteria:[]});
        setAdditionalTestsForCriteriaState({additionalCriteria:[]});
        setAdditionalConservesCriteriaState({additionalCriteria:[]});
    }
    const resetLow = () =>{
        setAdditionalContributesToCriteriaState({additionalCriteria:[]});
        setAdditionalRevokesCriteriaState({additionalCriteria:[]});
    }
    const preventDefault = (event) => {
        event.preventDefault();
    ;
  
    } 

  
    useEffect(() => {
        getDomains();
    
    },[]);
    return(
        <div className='div-ontology'>
            <h2> Use Ontology </h2>  
        
            <form id="form-ontology" onSubmit = {preventDefault}>
                <Row>
                <Col className="col-3">
                <label for="domains">
                What is your domain?</label>
                </Col>
                <Col className="col-9">
                <select className="w-50 form-control"  name="domains" onChange={addCriteriaQuestion}>
                    <option key='---' value='---' selected>---</option>
                    {appState.domains.map(domain => {
                        return (<option key={domain} value={domain}>{domain}</option>);
                    })}
                    <option key='None' value='None' >None</option>
                </select>
                
        
                </Col>
                
     
            </Row>
            
            {domainChosenState.domainChosen=="None"?
                <GenericOntology />

             : null
            }
            
            {criteriaState.criteria.length ? (
                <Criteria criteria={criteriaState.criteria} buttonClick={criteriaClicked}/>
             )
            : null
            }
             {criterionChosenState.criterionChosen!='' ?
             <>
                <Criterion criterion= {criterionChosenState.criterionChosen} />
                <CriterionOptions onClickSecurity={addMechanisms} onClickAdditionalCriteria={additionalCriteria}/>
            </>

             : null
            } 
            {criterionChosenMechanismsState.mechanisms.length ? (
                
                <Mechanisms mechanisms={criterionChosenMechanismsState.mechanisms} type="1"/>
                
             )
            : null
            }
            {additionalCriteriaState.demanded=="yes" ? (
                
                <AdditionalCriteriaOptions onClickAdditionalCriteria={additionalCriteriaOption}/>
                
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
                        
                        <AdditionalCriteria criteria={additionalEnsuresCriteriaState.additionalCriteria} criterion={criterionChosenState.criterionChosen} rel="ensure" />
                        
                        
                    )
                    : null
                    }

           
              
                
                             
                    {additionalIsAppliedByCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalIsAppliedByCriteriaState.additionalCriteria} criterion={criterionChosenState.criterionChosen} rel="are applied by" />
                    
                        
                    )
                    : null
                    }
                    {additionalPrecedesCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalPrecedesCriteriaState.additionalCriteria} criterion={criterionChosenState.criterionChosen} rel="precede" />
                    
                        
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
                        
                        <AdditionalCriteria criteria={additionalProvidesCriteriaState.additionalCriteria} criterion={criterionChosenState.criterionChosen} rel="provide" />
                        
                        
                    )
                    : null
                    }

           
              
                
                             
                    {additionalTestsForCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalTestsForCriteriaState.additionalCriteria} criterion={criterionChosenState.criterionChosen} rel="test for" />
                    
                        
                    )
                    : null
                    }
                    {additionalConservesCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalConservesCriteriaState.additionalCriteria} criterion={criterionChosenState.criterionChosen} rel="conserve" />
                    
                        
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
                        
                        <AdditionalCriteria criteria={additionalRevokesCriteriaState.additionalCriteria} criterion={criterionChosenState.criterionChosen} rel="revoke" />
                        
                        
                    )
                    : null
                    }

           
              
                
                             
                    {additionalContributesToCriteriaState.additionalCriteria.length ? (
                        
                        <AdditionalCriteria criteria={additionalContributesToCriteriaState.additionalCriteria} criterion={criterionChosenState.criterionChosen} rel="contribute to" />
                    
                        
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
                      src={require("../assets/img/loading.gif")}
                      width="15%"
                    /></Col></Row> : null }
            {additionalPriorityState.priority=="treeOK" ?
                 (<><Row className="mt-3">
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

                    <Col className="col-9 pl-4 h-map"><hr className="w-100 bg-default"/><OverviewFlow criterion={criterionChosenState.criterionChosen} domain={domainChosenState.domainChosen} initialNodes={nodesState.nodes} initialEdges={edgesState.edges} onClick={addTreeMechanisms}/></Col>

                 </Row>
                 <Row className="mt-5">
                 <Col className="col-3  "><h5 className="text-ontology">Color Code:</h5></Col>
                 <Col className="col-3"><p className="text-danger">High Priority Criteria</p></Col>
                 <Col className="col-3"><p className="text-warning">Medium Priority Criteria</p></Col>
                 <Col className="col-3"><p className="text-success">Low Priority Criteria</p></Col>
                 

             </Row>
             </>) : null}
            
              
              
                   
        
            
            </form>
        </div>
    )
}

export default Ontology;