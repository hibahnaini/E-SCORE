import React from "react";

// reactstrap components
import { Container } from "reactstrap";

const PageHeader =() => {
  return (
    <div className="page-header header-filter">
      <div className="squares square1 row align-items-center text-center" ><div className="col-md-12"> Confidentiality</div></div>
      <div className="squares square2 row align-items-center text-center" > <div className="col-md-12"> Availabilty</div> </div>
      <div className="squares square3 row align-items-center text-center" > <div className="col-md-12"> Integrity</div> </div>
      <div className="squares square4 row align-items-center text-center" > <div className="col-md-12"> Privacy</div></div>
      <div className="squares square5 row align-items-center text-center" > <div className="col-md-12"> Trust</div></div>
      <div className="squares square6 row align-items-center text-center" > <div className="col-md-12"> Resilience</div></div>
      <div className="squares square7 row align-items-center text-center" > <div className="col-md-12"> Access Control</div></div>
      <Container>
        
      </Container>
    </div>
  );
}
export default PageHeader;