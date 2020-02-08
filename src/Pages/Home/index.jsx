import React, { Component } from "react";
import NavBar from "../../Components/Navbar/index.jsx";
import TopHeadline from "../../Components/TopHeadlines/index.jsx";
import News from "../../Components/News/index.jsx";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./index.css";

class Home extends Component {
  goToDetail = () => {
    console.log("Clicked");
  };
  render() {
    return (
      <>
        <NavBar page={"/"} />
        <Container>
          <Row>
            <TopHeadline
              headline={{
                image:
                  "https://cdn.cnn.com/cnnnext/dam/assets/190508000602-deadly-colorado-school-shooting-update-highlands-ranch-watt-ctn-vpx-00003906-super-tease.jpg",
                title:
                  "One Colorado school shooting suspect pleads guilty to murder charges - CNN",
                desc:
                  "Alec McKinney pleaded guilty to 17 counts related to the May 2019 shooting."
              }}
            />
            <News
              news={{
                image: "image",
                title: "News",
                desc: "desc"
              }}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
