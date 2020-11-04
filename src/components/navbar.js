import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/images/logopep.png';
import '../static/scss/app.css';

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <header className="header flex-row">
            <div className="logo-container">
            <img className="logo" src={logo}/> 
            </div>
            <div className="nav-links"> 
            <ul className="nav-links-ul flex-row">
                <li className="nav-links-li"><a href='resume-template'>Resume Templates</a></li>
                <li className="nav-links-li"><a href='about-us'>About Us</a></li>
                <li className="nav-links-li"><a href='getting-started'><button>Register</button></a></li>
                <li className="nav-links-li"><a href='sign-in'>Sign In</a></li>
            </ul>
            </div>
        </header>
      </div>
    );
  }
}