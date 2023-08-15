import React, { Component } from "react";
import Card from "./Card";
import "../App.css";
import "./NewsItem.css";
// import Items from "../sampleOutput";
import Spinner from "./Spinner";
export default class NewsItem extends Component {
  
  // st_value = 0;
  // end_value = 8;

  constructor() {
    super();
    console.log("from constructor");
    this.state = {
      loading:false,
      st_value:0,
      items: [],
      end_value:8,
      Page:1,
     
      
    };
    // this.setState({loading:false});
  }

     async componentDidMount(){
    console.log("cdm");
    this.setState({loading:true});
    
    let url_data = await fetch(url);
    let parsedData = await url_data.json();
    console.log(parsedData);
    this.setState({items:parsedData.news,loading:false})
}
scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

  handleNextClick = async ()=>{
    console.log("next");
    this.setState({loading: true});
    this.setState({st_value:this.state.end_value,end_value:this.state.end_value+8,Page:this.state.Page+1,loading:false});
    console.log(this.state.st_value+" =value="+this.state.end_value);
    this.scrollToTop();
  }

  handlePrevClick = async ()=>{
    console.log("next");
    this.setState({loading: true});
    this.setState({st_value:this.state.st_value-8,end_value:this.state.end_value-8,Page:this.state.Page-1,loading: false});
    console.log(this.state.st_value+" =value="+this.state.end_value);
    this.scrollToTop();
  }




  render() {
    return (
      <>
       {this.state.loading && this.state.loading && <Spinner/>}
        <div id="home_testing" className="news_card my-3 container">
        {!this.state.loading && this.state.items.slice(this.state.st_value, this.state.end_value).map((item) => {
            return (
              <div key={item.url}>
                <Card
                  title={item.title}
                  description={item.description}
                  imageUrl={item.image}
                  readMore = {item.url}
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
          <button type="button" class="btn btn-light">Pages : {this.state.Page} of {Math.ceil((this.state.items.length)/8) } </button>
          <button
            disabled={(this.state.st_value+8) >= this.state.items.length}
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
