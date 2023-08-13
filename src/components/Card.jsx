import React, { Component } from "react";
import './Card.css';

export default class Card extends Component {
  
  render() {
    let defaultImage = "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/afa5354659da81156bdc3f3fc8445940.jpg";
    let defaultTitle = "The headline is not found currently I'm searching for you a best headline";
    let defaultDescription = "The description is not found currently I'm searching for you a best description please revisit to our website after some time or wait it will auto render after some time";
    let defaultUrl = "https://timesofindia.indiatimes.com/home/headlines";
    let { title, description,imageUrl,readMore} = this.props;
    return (
      <div>
        <div className="card my-3 " style={{ width: "20rem" }}>
          <div id="box_image">
          <img  src={(imageUrl===null)?(defaultImage):(imageUrl)} className="card-img-top" alt="Head_line_iamge" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{((title === null)?(defaultTitle.substring(0,40)):((title => 40)?(title.substring(0,40)):(title)))}...</h5>
            <p className="card-text">{((description === null)?(defaultDescription.substring(0,90)):((description => 40)?(description.substring(0,90)):(description)))}</p>
            <a  href={(readMore === null)?(defaultUrl):(readMore)} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
              Read More...
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}
