import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <>
        <div className="container text-center text-white my-3">
          <h1>
            <span>R</span>adar<span>R</span>eport - Top{" "}
            {this.props.categeory.substring(10, 11).toUpperCase()}
            {this.props.categeory.substring(
              11,
              this.props.categeory.length
            )}{" "}
            Headline
          </h1>
        </div>
        <NewsItem
          API_Key={this.props.API_Key}
          country={this.props.country}
          categeory={this.props.categeory}
          Language={this.props.Language}
        />
      </>
    );
  }
}
