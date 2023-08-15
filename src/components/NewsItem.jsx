import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "../App.css";
import "./NewsItem.css";

import Spinner from "./Spinner";
export default class NewsItem extends Component {
  static defaultProps = {
    country: "",
    pageSize: 8,
    categeory: "",
    Language: "",
  };

  static propTypes = {
    country: PropTypes.string,
    categeory: PropTypes.string,
    Language: PropTypes.string,
    API_Key: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      loading: false,
      st_value: 0,
      items: [],
      end_value: 8,
      Page: 1,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://api.currentsapi.services/v1/latest-news?apiKey=${this.props.API_Key}${this.props.Language}${this.props.categeory}${this.props.country}`;
    let url_data = await fetch(url);
    let parsedData = await url_data.json();

    this.setState({ items: parsedData.news, loading: false });
  }
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  handleNextClick = async () => {
    this.setState({ loading: true });
    this.setState({
      st_value: this.state.end_value,
      end_value: this.state.end_value + 8,
      Page: this.state.Page + 1,
    });

    this.scrollToTop();
    this.setState({ loading: false });
  };

  handlePrevClick = async () => {
    this.setState({ loading: true });
    this.setState({
      st_value: this.state.st_value - 8,
      end_value: this.state.end_value - 8,
      Page: this.state.Page - 1,
    });

    this.scrollToTop();
    this.setState({ loading: false });
  };

  render() {
    return (
      <>
        <div className={`${this.state.loading === true ? "spinner" : ""}`}>
          {this.state.loading && <Spinner />}
        </div>

        <div id="home_testing" className="news_card my-3 container">
          {!this.state.loading &&
            this.state.items
              .slice(this.state.st_value, this.state.end_value)
              .map((item) => {
                return (
                  <div key={item.id}>
                    <Card
                      title={item.title}
                      description={item.description}
                      imageUrl={item.image}
                      readMore={item.url}
                      publishedDate={item.published}
                      author={item.author}
                    />
                  </div>
                );
              })}
        </div>
        <div className="container d-flex justify-content-between mb-3">
          <button
            disabled={this.state.st_value === 0}
            className="btn btn-sm preNext "
            onClick={this.handlePrevClick}
          >
            &laquo;Prev
          </button>
          <button type="button" className="btn btn-light">
            Pages : {this.state.Page} of{" "}
            {Math.ceil(this.state.items.length / 8)}{" "}
          </button>
          <button
            disabled={this.state.st_value + 8 >= this.state.items.length}
            className="btn btn-sm preNext "
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </>
    );
  }
}
