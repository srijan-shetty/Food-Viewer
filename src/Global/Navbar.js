import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function getCanteens() {
  return [
    { 
      "id": "INBA",
      "name" : "Bangalore"
    }, 
    { 
      "id": "LTVI",
      "name" : "Vilnius"
    }, 
    { 
      "id": "DKHT",
      "name" : "Høje Taastrup"
    },
    { 
      "id": "DKHK",
      "name" : "Holmens kanal"
    }, 
    { 
      "id": "DKBB",
      "name" : "Brabrand"
    }
  ]
}

const Navbar1 = (props) => {

  const handleCanteenChange = (event) => {
    props.selectCanteen(event.target.value)
  }

  return (

    <Navbar
      style={{ backgroundColor: "white"}}
      expand="lg"
      classname="nav-item-link-text"
    >
      <img src="https://diwi-dfv.s3.ap-south-1.amazonaws.com/Gobi.jpg" alt="LOGO" style={{width: '70px', marginLeft: '0px', height: '70px'}}></img>
      <Link to="/Welcome">
        <Navbar.Brand
          href="#home"
          style={{ color: "black", marginLeft: "0%", fontSize: '18px' }}
        >
          <strong><span style={{color: 'white'}}>h</span>DANSKE FOOD VIEWER</strong>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mt-3">
          <select className="browser-default custom-select" onChange={handleCanteenChange}>
            {getCanteens().map(c =>
            <option value={c.id}>{c.name}</option>
            )}
          </select>
        
        </Nav>  
        <Nav>
          <img src='userImageM.webP' alt="UserImage" style={{width: '40px',
          height: '40px',
          verticalAlign: 'middle',
          backgroundSize: 'cover',
          display: 'block',
          borderRadius: '50%'}}/>
          <Link to="/Login">
          <Nav.Link href="#home" >
            <span style={{ color: "black", fontSize: "14px" }}><strong>{props.userName ? props.userName : "Please Login"}</strong></span>
          </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

)
}

export default Navbar1;
