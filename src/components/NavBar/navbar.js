import React from 'react';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,

    NavItem,
    NavLink,
 
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";
const MyNavbar =() =>{
    return(
        <>
        <header className="header-global">
        <Navbar collapseOnSelect expand="lg" className="navbar-main navbar-transparent navbar-light headroom" >
        <Container>
         <Navbar.Brand href="/" className="navbar-brand">Security Criteria Ontology</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
            <Nav >
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link">About</Nav.Link>
            <Nav.Link href="/ontology" className="nav-link">Use Ontology</Nav.Link>
            <Nav.Link href="/vowl" className="nav-link">Visualizer</Nav.Link>
            <Nav.Link href="/feedback" className="nav-link">Feedback</Nav.Link>
            </Nav>
           
         </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
         
    
       </>
        
    )
}

export default MyNavbar;