import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const TopHeadline = props => {
  console.log(props.headline);
  return (
    <>
      <Col md={12} lg={{ span: 6, order: 2 }} className="image-col">
        <Link to="/detail">
          <img width="100%" src={props.headline.image} alt="headline" />
        </Link>
      </Col>
      <Col md={12} lg={{ span: 3, order: 1 }} className="desc-col">
        <Link to="/detail">
          <p className="headline-text">{props.headline.title}</p>
        </Link>
        <p className="headline-desc">{props.headline.desc}</p>
        <div className="time-stamp">
          <p style={{ marginRight: 10 }}>Posted </p>
          <p style={{ marginRight: 5 }}>10h </p>
          <p style={{ marginRight: 5 }}> | </p>
          <p style={{ marginRight: 10 }}>Indonesia</p>
        </div>
      </Col>
    </>
  );
};

export default TopHeadline;
