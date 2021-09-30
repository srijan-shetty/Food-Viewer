import React from "react";
import { MDBFooter} from "mdbreact";
import { Row } from "react-bootstrap";

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-0 fixed" style={{marginBottom: '-25px', marginTop: '-100px'}}>
        <Row style={{backgroundColor: '#003f63', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0px 10px 0px'}}>
            Developed By :<span style={{color: '#003f63'}}>h</span>  
            <a href="#home"> <span> DIWI</span></a>
        </Row>
      
    </MDBFooter>
  );
}

export default Footer;