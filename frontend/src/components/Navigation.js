import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
//import search from 'react-bootstrap-icons';

function Navigation(){
  // const [showSearch, setShowSearch] = useState(false);

  // const handleSearchClick = () => {
  //   setshowSearch(!showSearch);
  // }
    return(
      <Navbar className='custom-navbar'>
        <Container>
            <Navbar.Brand href="#home" className="text-white">Foody</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto">
                    <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to='/Log'>Log</Nav.Link>
                    <Nav.Link className="text-white" href='#link'>Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>  
    );
}

export default Navigation;