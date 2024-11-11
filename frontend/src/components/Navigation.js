import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import search from 'react-bootstrap-icons';

function Navigation(){
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setshowSearch(!showSearch);
  }
    return(
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
            <Navbar.Brand href="#home">Foody</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to='/Log'>Log</Nav.Link>
                    <Nav.Link href='#link'>Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>  
    );
}

export default Navigation;