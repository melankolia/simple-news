import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const News = props => {
  return (
    <Col xs={10} md={6} lg={{ span: 3, order: 3 }}>
      <Link to="/detail">
        <img width="100%" src={props.news.image} alt="news" />
        <p className="title">{props.news.title}</p>
      </Link>
      <p className="desc">{props.news.description}</p>
      <div className="time-stamp">
        <p style={{ marginRight: 10 }}>Posted </p>
        <p style={{ marginRight: 5 }}>10h </p>
        <p style={{ marginRight: 5 }}> | </p>
        <p style={{ marginRight: 10 }}>{props.news.language}</p>
      </div>
    </Col>
  );
};

export default News;
