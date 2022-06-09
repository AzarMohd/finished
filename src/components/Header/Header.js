import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Container, Form, FormControl, Nav} from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form>
                            <FormControl
                                style={{border:"none",boxShadow:"none",outline:"none",borderBottom:"0.1px solid  #0099ff",borderRadius:"0px",backgroundColor:"white"}}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />

                        </Form>
                        <Nav
                            className="ms-auto my-2  my-lg-0"
                            style={{ maxHeight: '50px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1"><FontAwesomeIcon icon={faHome} style={{ padding: "0px 30px", color: " #3399ff" }} /></Nav.Link>
                            <Nav.Link href="#action2"><i style={{ color: " #3399ff", padding: "0px 30px" }} class="fa fa-th"></i></Nav.Link>
                            <Nav.Link href="#action2"><i style={{ color: " #3399ff", padding: "0px 30px" }} class="fa fa-th-list"></i></Nav.Link>
                            <Nav.Link href="#action2"><i style={{ color: " #3399ff", padding: "0px 30px" }} class="fa fa-globe"></i></Nav.Link>
                            <Navbar.Brand href="#" style={{ fontSize:"15px" }}>Hi,Balaji</Navbar.Brand>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header;