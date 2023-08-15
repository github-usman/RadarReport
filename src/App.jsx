import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";


export default class App extends Component {

  render() {
    return (

      <>
      <div className='bg_desing'>
        <NavBar/>
        <News/>
        <Footer/>
      </div>
      </>


    )
  }
}

