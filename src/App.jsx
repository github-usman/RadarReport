import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import News from "./components/News"


export default class App extends Component {

  render() {
    return (

      <>
      <div className='bg_desing'>
        <NavBar/>
        <News/>
        </div>
      </>


    )
  }
}

