import React, { Component } from 'react';
import "./Footer.css";


export default class Footer extends Component {
  render() {
    return (
      <div>
       
          <footer className="bg-dark text-center text-lg-start text-white" >
        
            <div className="container p-3">
           
              <div className="d-flex justify-content-center">
                    <a href="https://github.com/github-usman/"><i class="bi bi-github"></i> GitHub</a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/u-s-m-a-n/"><i class="bi bi-linkedin"></i> LinkedIn</a>&nbsp;&nbsp;
                    <a href="/"><i class="bi bi-file-earmark-code-fill"></i> LeetCode</a>&nbsp;&nbsp;
                    <a href="/"><i class="bi bi-person-check"></i> Prtfolio</a>&nbsp;&nbsp;
                    <a href="mailto:usman.placement@gmail.com"><i class="bi bi-envelope"></i> Contact</a>
                 
                    
              </div>
          
            </div>
          
            <div
              className="text-center p-3"
              style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}
            >
              © {new Date().getFullYear()} Copyright&nbsp;
              <a className="text-white" href="https://github.com/github-usman/" >
                RadarReport Dev by <span>USMAN ALI ANSARI</span>
              </a>
            </div>
           
          </footer>
        </div>
      
    )
  }
}
