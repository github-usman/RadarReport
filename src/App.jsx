import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";

export default class App extends Component {
  API_Key = process.env.REACT_APP_NEWS_API;
 
  render() {
      
    return (
      <div className="bg_desing">
      <BrowserRouter>
        
          <NavBar />
       
            <Routes>
            
              <Route exact path='/' index element={<News API_Key={this.API_Key} key='home' country={''}  categeory={''} Language={'&language=hi'} />} />
              <Route exact path='/top' index element={<News API_Key={this.API_Key} key='top' country={''}  categeory={''} Language={''} />} />
              <Route exact path='/sports' index element={<News API_Key={this.API_Key} key='sports' country={'&country=in'}  categeory={'&category=sports'} Language={'&language=en'} />} />
              <Route exact path='/entertainment' index element={<News API_Key={this.API_Key} key='entertainment' country={'&country=in'}  categeory={'&category=entertainment'} Language={'&language=en'} />} />
              <Route exact path='/business' index element={<News API_Key={this.API_Key} key='business' country={'&country=in'}  categeory={'&category=business'} Language={'&language=en'} />} />
              <Route exact path='/health' index element={<News API_Key={this.API_Key} key='health' country={'&country=in'}  categeory={'&category=health'} Language={'&language=en'} />} />
              <Route exact path='/politics' index element={<News API_Key={this.API_Key} key='politics' country={'&country=in'}  categeory={'&category=politics'} Language={'&language=en'} />} />
              <Route exact path='/science' index element={<News API_Key={this.API_Key} key='science' country={''}  categeory={'&category=science'} Language={'&language=en'} />} />
              <Route exact path='/about' element={<About/>}></Route>
              {/* <Route exact path='/science' index element={<News API_Key={this.API_Key} key='science' country={'&country=in'}  categeory={'&category=science'}  />} /> */}
              
              
              </Routes>
           
        <Footer />
        
      </BrowserRouter>
      </div>
    );
  }
}





// <Routes>
// <Route path='/' element={<Newsbox API_Key={this.API_Key} key='general' pageSize={12} country='us' category='general' />}></Route>
// <Route path='/business' element={<Newsbox API_Key={this.API_Key} key='business' pageSize={12} country='us' category='business' />}></Route>
// <Route path='/entertainment' element={<Newsbox API_Key={this.API_Key} key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
// <Route path='/health' element={<Newsbox API_Key={this.API_Key} key='health' pageSize={12} country='us' category='health' />}></Route>
// <Route path='/science' element={<Newsbox API_Key={this.API_Key} key='science' pageSize={12} country='us' category='science' />}></Route>
// <Route path='/sports' element={<Newsbox API_Key={this.API_Key} key='sports' pageSize={12} country='us' category='sports' />}></Route>
// <Route path='/technology' element={<Newsbox API_Key={this.API_Key} key='technology' pageSize={12} country='us' category='technology' />}></Route>
// </Routes>