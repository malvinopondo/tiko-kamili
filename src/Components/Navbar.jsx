import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

const Navbar = () => {
  return (
    <><Navbar.Brand as={Link} to="/">
          TikoKamili
      </Navbar.Brand><Navbar.Toggle aria-controls="basic-navbar-nav" /><Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse><Nav className="me-auto">
              <Nav.Link as={Link} to="/schedule">
                  Schedule
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                  Contact
              </Nav.Link>
          </Nav><Nav>
              <Button as={Link} to="/login" variant="outline-success">
                  Login
              </Button>
          </Nav></>
  )
}

export default Navbar;