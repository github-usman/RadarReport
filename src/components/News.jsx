import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
        <>
                <div className="container text-center text-white my-3">
                <h1>Today's Top head line</h1>
                </div>
                <NewsItem />
        </>
    )
  }
}
