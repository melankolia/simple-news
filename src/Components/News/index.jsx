import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

const News = props => {
  return (
    <Col lg={{ order: 3 }}>
      <p>{props.news.title}</p>
    </Col>
  );
};

export default News;
