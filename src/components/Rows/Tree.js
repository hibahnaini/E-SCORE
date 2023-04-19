import React, { useEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import { MarkerType } from 'react-flow-renderer';
import axios from 'axios';
import Constants from '../../config';
const ip=Constants.ip;



export const resetTree = ()=>{
    [root,rel,ensures,precedes,isAppliedBy,provides,testsFor,conserves,contributesTo,revokes,allCriteria]=[[],[],[],[],[],[],[],[],[],[],[]];
}
export const beforeInit = async (crit,dom) =>{
    criterion=crit;
    domain=dom;
    
    await (root[0]={
        id :crit,
        type:'input',
        data:{label:crit},
        position:{
            x:250,
            y:0,
        },
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
            width: 180,
        }
      })
      let j=0;
      for(let r of root[Symbol.iterator]()){
          //console.log("This is the criteria "+allCriteria[j]);
         //console.log(r)
        // root.length= getTree(r.id,150+100*j).length;
         console.log((await getTree(r.id,150+100*j)).values);
         j++;
    
      }
      //console.log(root.length);
}


const onInit = async () =>{

 }
let [root,rel,ensures,precedes,isAppliedBy,provides,testsFor,conserves,contributesTo,revokes,allCriteria]=[[],[],[],[],[],[],[],[],[],[],[]];
let [criterion,domain] = ["",""];


const getAdditionalCriteriaInDomain = async (crit,dom,rel) =>{
  console.log(crit);
  console.log(dom);
  //console.log(rel);
  return axios.get(ip+'/domain/'+dom+'/'+rel+'/'+crit)
  .then( async (response)=>{
      console.log(response.data);
      if(rel=="ensures")
      await (ensures=response.data)
      if(rel=="isAppliedBy")
      await (isAppliedBy=response.data)
      if(rel=="precedes")
      await (precedes=response.data)
      if(rel=="provides")
      await (provides=response.data)
      if(rel=="testsFor")
      await (testsFor=response.data)
      if(rel=="conserves")
      await (conserves=response.data)
      if(rel=="contributesTo")
      await (contributesTo=response.data)
      if(rel=="revokes")
      await (revokes=response.data)
  })
  .catch(function (error) {
      console.log(error.toJSON());
  });

}
const getTree=  async (criteria, row) =>{

  console.log(criteria);
  console.log(root);
  console.log(rel);
  await getAdditionalCriteriaInDomain(criteria,domain,"ensures").then(()=>
  {
    for(let i=0;i<ensures.length;i++){
        //console.log(additionalEnsuresCriteriaState.additionalCriteria[i]);
        console.log(!root.find(element => element.id === ensures[i]));
        if(ensures[i]!=criterion && !root.find(element => element.id === ensures[i]) ){
        root.push({
            id :ensures[i],
            data:{label:ensures[i]},
            position:{
                x:250+(i*(-1)+1)*row*0.75,
                y:i+70+row,
            },
             style: {
                border: '1px solid #fd5d93',
                width: 180,
            }

        });
        rel.push({
            id: (ensures[i]+'-'+criteria), target: ensures[i], source: criteria, label: 'ensures ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
        });
        
        //getTree(ensures[i],row+100);
        }
        //else continue;
    }
  });
  await getAdditionalCriteriaInDomain(criteria,domain,"isAppliedBy").then(()=>{
    for(let i=0;i<isAppliedBy.length;i++){
        console.log(isAppliedBy[i]);
        if(isAppliedBy[i]!=criterion && !root.find(element => element.id === isAppliedBy[i]) ){
        root.push({
            id :isAppliedBy[i],
            data:{label:isAppliedBy[i]},
            position:{
                x:250+(i+2)*row,
                y:i+100+row,
            },
            style: {
                border: '1px solid #fd5d93',
                width: 180,
            }

        });
        rel.push({
            id: (isAppliedBy[i]+'-'+criteria), target: isAppliedBy[i], source: criteria, label: 'isAppliedBy ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
        });
        //getTree(isAppliedBy[i],row+100);
    }
    //else continue;
}
  });
  await getAdditionalCriteriaInDomain(criteria,domain,"precedes").then(()=>{
    for(let i=0;i<precedes.length;i++){
        console.log(precedes[i]);
        if(precedes[i]!=criterion && !root.find(element => element.id === precedes[i]) ){
        root.push({
            id :precedes[i],
            data:{label:precedes[i]},
            position:{
                x:250+(i*(-1)+1)*row,
                y:i+row,
            },
            style: {
                border: '1px solid #fd5d93',
                width: 180,
            }

        });
        rel.push({
            id: (precedes[i]+'-'+criteria), target: precedes[i], source: criteria, label: 'precedes ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
        });
        //getTree(precedes[i],row+100);
    }
    //else continue;
}
  });
  await getAdditionalCriteriaInDomain(criteria,domain,"provides").then(()=>{
    for(let i=0;i<provides.length;i++){
        console.log(provides[i]);
        if(provides[i]!=criterion && !root.find(element => element.id === provides[i]) ){
        root.push({
            id :provides[i],
            data:{label:provides[i]},
            position:{
                x:105+(i*0.5)*(row/1.5),
                y:i+row,
            },
            style: {
                border: '1px solid #ff8d72',
                width: 180,
            }

        });
        rel.push({
            id: (provides[i]+'-'+criteria), target: provides[i], source: criteria, label: 'provides ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
        });
        //getTree(provides[i],row+100);
    }
    //else continue;
}
  });
  await getAdditionalCriteriaInDomain(criteria,domain,"testsFor").then(()=>{
    for(let i=0;i<testsFor.length;i++){
        console.log(testsFor[i]);
        if(testsFor[i]!=criterion&& !root.find(element => element.id === testsFor[i]) ){
        root.push({
            id :testsFor[i],
            data:{label:testsFor[i]},
            position:{
                x:250+(i+1)*row,
                y:i+row,
            },
            style: {
                border: '1px solid #ff8d72',
                width: 180,
            }
            

        });
        rel.push({
            id: (testsFor[i]+'-'+criteria), target: testsFor[i], source: criteria, label: 'testsFor ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
        });
        //getTree(testsFor[i],row+100);
    }
    //else continue;
}
  });
  await getAdditionalCriteriaInDomain(criteria,domain,"conserves").then(()=>{
    for(let i=0;i<conserves.length;i++){
        console.log(conserves[i]);
        if(conserves[i]!=criterion && !root.find(element => element.id === conserves[i]) ){
        root.push({
            id :conserves[i],
            data:{label:conserves[i]},
            position:{
                x:25+(i*-1)*row*0.6,
                y:i*50+row,
            },
            style: {
                border: '1px solid #ff8d72',
                width: 180,
            }

        });
        rel.push({
            id: (conserves[i]+'-'+criteria), target: conserves[i], source: criteria, label: 'conserves ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
        });
        //getTree(conserves[i],row+100);
    }
   // else continue;
}

  });
  await getAdditionalCriteriaInDomain(criteria,domain,"revokes").then(()=>{
    for(let i=0;i<revokes.length;i++){
        console.log(revokes[i]);
        if(revokes[i]!=criterion && !root.find(element => element.id === revokes[i]) ){
        root.push({
            id :revokes[i],
            data:{label:revokes[i]},
            position:{
                x:(i*-1)*row,
                y:i+row,
            },
            style: {
                border: '1px solid  #00f2c3',
                width: 180,
            }

        });
        rel.push({
            id: (revokes[i]+'-'+criteria), target: revokes[i], source: criteria, label: 'revokes ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
        });
        //getTree(revokes[i],row+100);
    }
    //else continue;
    
    
}
  });
  await getAdditionalCriteriaInDomain(criteria,domain,"contributesTo").then(()=>{
    for(let i=0;i<contributesTo.length;i++){
        console.log(contributesTo[i]);
        if(contributesTo[i]!=criterion && !root.find(element => element.id === contributesTo[i]) ){
        root.push({
            id :contributesTo[i],
            data:{label:contributesTo[i]},
            position:{
                x:50+(i+1)*(row/1.5),
                y:i+row,
            },
            style: {
                border: '1px solid  #00f2c3',
                width: 180,
            }

        });
        rel.push({
            id: (contributesTo[i]+'-'+criteria), target: contributesTo[i], source: criteria, label: 'contributesTo ^',markerStart: {type: MarkerType.ArrowClosed},type: 'smoothstep'
        });
        //getTree(contributesTo[i],row+100);
    }
}
  });
  //allCriteria.push(...ensures);
  //allCriteria.push(...isAppliedBy);
  //allCriteria.push(...precedes);
  //allCriteria.push(...provides);
  //allCriteria.push(...testsFor);
  //allCriteria.push(...conserves);
  //allCriteria.push(...revokes);
  //allCriteria.push(...contributesTo);
  //console.log(allCriteria);
  //console.log(ensures);
 // console.log(additionalEnsuresCriteriaState.additionalCriteria +' '+row);

         
         
         

         
        

          
         
      //
      //if(j+1<=allCriteria.length)
      //getTree(allCriteria[j+1],row+100,j+1);
  //console.log(rel);
  console.log(root)
  return root;

}


const OverviewFlow = (props) => {


  const [nodes, setNodes, onNodesChange] = useNodesState(root);
  const [edges, setEdges, onEdgesChange] = useEdgesState(rel);
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
 
  //console.log(props.criterion);
  //criterion=props.criterion;
  //domain=props.domain;
  //[root,rel,ensures,precedes,isAppliedBy,provides,testsFor,conserves,contributesTo,revokes,allCriteria]=[[],[],[],[],[],[],[],[],[],[],[]];


  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={props.onClick}
      //onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodesConnectable="false"
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';

          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return '#fff';
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default OverviewFlow;
