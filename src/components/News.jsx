import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
        <>
                <div className="container">
                <h1>Today's Top head line</h1>
                </div>
                <NewsItem />
        </>
    )
  }
}
