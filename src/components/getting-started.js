import React, { Component } from 'react';
import template from '../static/images/template.jpg';
import '../static/scss/app.css';
export default class gettingStarted extends Component {

  render() {
    return (
      <div>
       <h1 className=" heading text-center">Select a resume page to get started </h1>
       <h3 className="text-center">You'll be able to edit and change templates later </h3>
       <div className="template-set flex-row">
          <img className="template-img" src ={template}></img>
          <img className="template-img" src ={template}></img>
          <img className="template-img" src ={template}></img>
       </div>
      </div>
    );
  }
}