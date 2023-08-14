import React, { Component } from "react";
import "./NavBar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top bg_color_nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="box_logo">
                <span>R</span>ADAR <span>R</span>EPORT
              </div>
            </a>
            <button
              className="navbar-toggler hum_outer"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon humb_inner"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active home_link"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                
                {/* for langauges */}
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Languages
                  </a>
                  <ul className="dropdown-menu bg_dropDowan">
                    <li>
                      <a className="dropdown-item" href="/">
                        Hindi(हिन्दी)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        English
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        Chinese
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Japanese
                      </a>
                    </li>
                  </ul>
                </li>

                {/* for category purpose */}

                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <ul className="dropdown-menu bg_dropDowan">
                    <li>
                      <a href="/" className="dropdown-item">
                        Top
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Entertainment
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        Business
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Health
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Politics
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                  <ul className="dropdown-menu bg_dropDowan">
                    <li>
                      <a href="/" className="dropdown-item">
                        India
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        America
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Japan
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        China
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        England
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                      Saudi Arabia 
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                
               
                  <a className="nav-link text-light mx-3" href="/">
                    About Me
                   </a>
               
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
