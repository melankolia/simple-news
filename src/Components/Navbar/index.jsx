import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./index.css";

const NavigationBar = props => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/">Nostra News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mr-auto"
            onSelect={selectedKey => console.log(selectedKey)}
            activeKey={props.page}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listnews">List News</Nav.Link>
            <NavDropdown
              title={props.country || "Country"}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item eventKey="us">United States</NavDropdown.Item>
              <NavDropdown.Item eventKey="uk">United Kingdom</NavDropdown.Item>
              <NavDropdown.Item eventKey="sg">Singapore</NavDropdown.Item>
              <NavDropdown.Item eventKey="jp">Japan</NavDropdown.Item>
              <NavDropdown.Item eventKey="id">Indonesia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
