import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function navBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/smartphones">
                Smartphone
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/laptops">
                Laptops
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/mens-watches">
                Reloj de Hombre
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/womens-watches">
                Reloj de Mujer
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;
