import React, { Component } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { connect } from "react-redux";
import NavBar from "../../Components/Navbar/index.jsx";
import News from "../../Components/News/index.jsx";
import { getNews } from "../../Redux/Actions/News";
import "./index.css";

class ListNews extends Component {
  state = {
    status: "loading",
    language: "id",
    pageSize: 5,
    page: 1
  };
  goToDetail = () => {
    console.log("Clicked");
  };
  getNewsData = async page => {
    const url = "/top-headlines";
    const config = {
      params: {
        pageSize: this.state.pageSize,
        page: page,
        category: "technology",
        country: this.state.language,
        apiKey: "8aa607ed11dd49afaccc6f4a31328a61"
      }
    };
    await this.props.dispatch(getNews(url, config));
    let totalPage = Math.ceil(
      this.props.News.DataNews.totalResults / this.state.pageSize
    );
    if (page < 1) {
      page = 1;
    } else if (page > totalPage) {
      page = totalPage;
    }
    this.setState({
      status: this.props.News.DataNews.status,
      page: page,
      totalPage: totalPage
    });
  };
  handleLanguageChange = language => {
    this.setState({ language: language, page: 1 });
  };
  componentDidMount() {
    this.getNewsData(1);
  }
  render() {
    return (
      <>
        <NavBar
          page="/listnews"
          language={this.state.language}
          onLanguageChange={this.handleLanguageChange}
        />
        {this.state.status !== "loading" ? (
          <>
            <Container>
              <Row>
                {this.props.News.DataNews.articles.map((item, index) => (
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
                ))}
              </Row>
            </Container>
            <div className="pagination">
              <Pagination>
                <Pagination.First onClick={() => this.getNewsData(1)} />
                <Pagination.Prev
                  onClick={() => this.getNewsData(this.state.page - 1)}
                />
                <Pagination.Item onClick={() => this.getNewsData(1)}>
                  {1}
                </Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item active>{this.state.page}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item
                  onClick={() => this.getNewsData(this.state.totalPage)}
                >
                  {this.state.totalPage}
                </Pagination.Item>
                <Pagination.Next
                  onClick={() => this.getNewsData(this.state.page + 1)}
                />
                <Pagination.Last
                  onClick={() => this.getNewsData(this.state.totalPage)}
                />
              </Pagination>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    News: state.News
  };
};

export default connect(mapStateToProps)(ListNews);
