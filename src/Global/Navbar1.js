import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbar1 = (props) => {

    return (

        <Navbar
            style={{ backgroundColor: "#397798" }}
            expand="lg"
            classname="nav-item-link-text"
        >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/Welcome">
                    <Nav.Link href="#home">
                        <span style={{ color: "white", fontSize: "14px" }}><strong>Today's menu</strong></span>
                    </Nav.Link>
                    </Link>

                    <Link to="/Future">
                        <Nav.Link href="#home">
                            <span style={{ color: "white", fontSize: "14px" }}><strong>Future menu</strong></span>
                        </Nav.Link>
                    </Link>
                    <Link to="/Buddies">
                        <Nav.Link href="#home">
                            <span style={{ color: "white", fontSize: "14px" }}><strong>Lunch Buddies</strong></span>
                        </Nav.Link>
                    </Link>
                    {/* <Link to="/About">
                        <Nav.Link href="#home">
                            <span style={{ color: "white", fontSize: "14px" }}><strong>About Us</strong></span>
                        </Nav.Link>
                    </Link> */}
                </Nav>
                <Nav>
                    {/* <ButtonGroup>
                 
                    <ToggleButton
                        className = "text-light"
                        type = "checkbox"
                        checked = {props.toggle}
                        onChange = {props.setToggle}
                        style = {{float:"right"}}
                        >
                        Veg. only 
                    </ToggleButton>

                    </ButtonGroup> */}

                    <Nav.Link href="mailto:etoc-mcc@exchange.danskebank.com">
                        <span style={{ color: "white", fontSize: "14px" }}><strong>Contact Us</strong></span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navbar1;
