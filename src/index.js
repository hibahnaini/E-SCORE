import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './webvowl/data/Security-NOQuery.json';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

import Home from './pages/home';
import About from './pages/about';
import Ontology from './pages/useOntology';
import Feedback from './pages/feedback';
import reportWebVitals from './reportWebVitals';
import Visualizer from './pages/visualizer';
import MyNavbar from './components/NavBar/navbar';
import PageHeader from './components/PageHeader/pageheader';

const container =document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <div className="index-page">
   <MyNavbar/>
    <BrowserRouter> 
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ontology" element={<Ontology />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/vowl" element={<Visualizer />} />
    </Routes>
    </BrowserRouter>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
