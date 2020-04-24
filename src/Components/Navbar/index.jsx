import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { getNews } from "../../Redux/Actions/News";
import "./index.css";

const NavigationBar = props => {
  const getNewsData = async selectedKey => {
    const url = "/top-headlines";
    const config = {
      params: {
        pageSize: props.page === "/" ? 6 : 5,
        category: "technology",
        country: selectedKey,
        apiKey: "8aa607ed11dd49afaccc6f4a31328a61"
      }
    };
    props.onLanguageChange(selectedKey);
    await props.dispatch(getNews(url, config));
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/">Simple News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mr-auto"
            onSelect={selectedKey => getNewsData(selectedKey)}
            activeKey={props.page}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listnews">List News</Nav.Link>
            <NavDropdown
              title={props.country || "Country"}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item eventKey="us">United States</NavDropdown.Item>
              <NavDropdown.Item eventKey="gb">United Kingdom</NavDropdown.Item>
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

const mapStateToProps = state => {
  return {
    News: state.news
  };
};

export default connect(mapStateToProps)(NavigationBar);
