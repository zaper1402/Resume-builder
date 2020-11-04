import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../static/scss/app.css';
import resume from '../static/images/resume.png';
export default class Homepage extends Component {

  render() {
    return (
      <div>
        <div className ="container landing-page">
            <h1 className= "heading text-center">Create a resume that stands out</h1>
            <h3 className="sub-heading text-center">Create a resume that perfectly describe your skills and match job progress</h3>
            <div className="text-center">
            <button className="btn">Get started for Free</button>
            </div> 
            <div className="text-center">
            <img className="landing-page-img" src={resume}></img>
            </div>
        </div>
      </div>
    );
  }
}