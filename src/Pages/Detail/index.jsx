import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../../Components/Navbar/index.jsx";
import "./index.css";

class Detail extends Component {
  state = { language: "id" };
  handleLanguageChange = language => {
    this.setState({ language: language });
  };
  render() {
    return (
      <>
        <NavBar
          page="/listnews"
          language={this.state.language}
          onLanguageChange={this.handleLanguageChange}
        />
        {this.props.location.news ? (
          <div className="container">
            <div className="image-col">
              <p className="headline-text">{this.props.location.news.title}</p>
              <p className="author-text">
                <span>{this.props.location.news.author} - </span>
                <span>{this.props.location.news.source}</span>
              </p>
              <img
                width="80%"
                src={this.props.location.news.image}
                alt="headline"
              />
            </div>
            <div className="desc-col">
              <p className="headline-desc">
                {this.props.location.news.content}
              </p>
              <div className="time-stamp">
                <p style={{ marginRight: 10 }}>Posted </p>
                <p style={{ marginRight: 5 }}>10h </p>
                <p style={{ marginRight: 5 }}> | </p>
                <p style={{ marginRight: 10 }}>
                  {this.props.location.news.language}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
  }
}

export default Detail;
