import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";
  
const Home =() =>{
    return(
        <div className="page-header header-filter">
        <div className="squares square1 row align-items-center text-center" > <div className="col-md-12"> Confidentiality</div></div>
        <div className="squares square2 row align-items-center text-center" > <div className="col-md-12"> Availabilty</div> </div>
        <div className="squares square3 row align-items-center text-center" > <div className="col-md-12"> Integrity</div> </div>
        <div className="squares square4 row align-items-center text-center" > <div className="col-md-12"> Privacy</div></div>
        <div className="squares square5 row align-items-center text-center" > <div className="col-md-12"> Trust</div></div>
        <div className="squares square6 row align-items-center text-center" > <div className="col-md-12"> Resilience</div></div>
        <div className="squares square7 row align-items-center text-center" > <div className="col-md-12"> Access Control</div></div>
    
        <section className="section section-lg section-coins">
          <Container>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../assets/img/artificial-intelligence.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Use the Ontology</h4>
                        <hr className="line-blue" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem  className="text-black pb-4">Search the ontology using a form tha automaticaly generates queries or write your own SPARQL queries.</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="light " href="/ontology">
                      Use Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../assets/img/browser.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Explore</h4>
                        
                        <hr className="line-blue" />
                      </Col>
                    </Row>
                    <Row >
                      <ListGroup>
                        <ListGroupItem  className="text-black pb-4">Know more about the ontology's classes and relationships using a graphical ontology </ListGroupItem>
                        
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="light" href="/vowl">
                     Explore
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../assets/img/testimonial.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Feedback</h4>
                        
                        <hr className="line-blue" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem  className="text-black">Contribute to the ontology by giving a feedback or proposing concepts, relationships or individuals (more information).</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="light" href="/feedback">
                      Contact
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
             
            </Row>
          </Container>
        </section>
        
      </div>
    )
}

export default Home;
