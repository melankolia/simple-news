import React, { Component } from "react";
import NavBar from "../../Components/Navbar/index.jsx";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar page={"/"} />
        <Container>
          <Row>
            
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
