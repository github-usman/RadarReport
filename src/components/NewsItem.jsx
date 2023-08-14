import React, { Component } from "react";
import Card from "./Card";
import "../App.css";
import Items from '../sampleOutput'
export default class NewsItem extends Component {


     
  constructor() {
    super();
    console.log("from constructor");
    this.state = {
      items: Items,
      
    };
  }
   
//   async componentDidMount(){
//     console.log("cdm");
//     let url = "https://api.currentsapi.services/v1/latest-news?apiKey=YMAzR4Vompb1qsrKi-2QuAjjvxw7ggV1nDyKedAMcbMqGqbb&=&language=en&country=jp";
//     let url_data = await fetch(url);
//     let parsedData = await url_data.json();
//     console.log(parsedData);
//     this.setState({items:parsedData.news})
// }

  render() {
    return (
      <div className="news_card my-3 container">
        
          {this.state.items.map((item) => {
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
    );
  }
}
