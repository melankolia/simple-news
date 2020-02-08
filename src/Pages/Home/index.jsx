import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import NavBar from "../../Components/Navbar/index.jsx";
import News from "../../Components/News/index.jsx";
import TopHeadline from "../../Components/TopHeadlines/index.jsx";
import { getNews } from "../../Redux/Actions/News";
import "./index.css";

class Home extends Component {
  state = {
    status: "loading",
    language: "id"
  };
  goToDetail = () => {
    console.log("Clicked");
  };
  getNewsData = async () => {
    const url = "/top-headlines";
    const config = {
      params: {
        pageSize: 6,
        category: "technology",
        country: this.state.language,
        apiKey: "8aa607ed11dd49afaccc6f4a31328a61"
      }
    };
    await this.props.dispatch(getNews(url, config));
    this.setState({ status: this.props.News.DataNews.status });
  };
  handleLanguageChange = language => {
    this.setState({ language: language });
  };
  componentDidMount() {
    this.getNewsData();
  }
  render() {
    console.log("RENDER");
    return (
      <>
        <NavBar
          page={"/"}
          language={this.state.language}
          onLanguageChange={this.handleLanguageChange}
        />
        <Container>
          <Row>
            {this.state.status !== "loading" ? (
              <>
                <TopHeadline
                  headline={{
                    image: this.props.News.DataNews.articles[0].urlToImage,
                    title: this.props.News.DataNews.articles[0].title,
                    description: this.props.News.DataNews.articles[0]
                      .description,
                    language:
                      this.state.language === "id"
                        ? "Indonesia"
                        : this.state.language === "gb"
                        ? "United Kingdom"
                        : this.state.language === "us"
                        ? "United State"
                        : this.state.language === "sg"
                        ? "Singapore"
                        : this.state.language === "jp"
                        ? "Japan"
                        : null
                  }}
                />
                {this.props.News.DataNews.articles.map((item, index) =>
                  index >= 1 ? (
                    <News
                      key={index}
                      news={{
                        image: item.urlToImage,
                        title: item.title,
                        description: item.description,
                        language:
                          this.state.language === "id"
                            ? "Indonesia"
                            : this.state.language === "gb"
                            ? "United Kingdom"
                            : this.state.language === "us"
                            ? "United State"
                            : this.state.language === "sg"
                            ? "Singapore"
                            : this.state.language === "jp"
                            ? "Japan"
                            : null
                      }}
                    />
                  ) : null
                )}
              </>
            ) : null}
          </Row>
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    News: state.News
  };
};

export default connect(mapStateToProps)(Home);
