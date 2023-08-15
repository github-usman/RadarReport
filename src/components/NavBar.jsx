import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      humburOpen: true,
    };
  }
  handleClick = async () => {
    this.setState({ humburOpen: true });
  };
  handleBigClick = async () => {
    this.setState({ humburOpen: false });
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top bg_color_nav ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <div className="box_logo">
                <span>R</span>ADAR <span>R</span>EPORT
              </div>
            </Link>
            <button
              className="navbar-toggler hum_outer"
              onClick={this.handleBigClick}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon humb_inner "></span>
            </button>
            <div
              className={`${
                this.state.humburOpen === true ? "collapse" : ""
              } navbar-collapse`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active home_link"
                    aria-current="page"
                    to="/"
                    onClick={this.handleClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/top"
                    onClick={this.handleClick}
                    className="nav-link active home_link"
                  >
                    Top
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active home_link"
                    onClick={this.handleClick}
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active home_link"
                    onClick={this.handleClick}
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/health"
                    onClick={this.handleClick}
                    className="nav-link active home_link"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/politics"
                    onClick={this.handleClick}
                    className="nav-link active home_link"
                  >
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active home_link"
                    onClick={this.handleClick}
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={this.handleClick}
                    to="/science"
                    className="nav-link active home_link b-nav-item"
                  >
                    Science
                  </Link>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <Link className="nav-link text-light mx-3" to="/about">
                  About Me
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
