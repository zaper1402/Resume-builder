import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';
// import './static/scss/app.css';

import Navbar from "./components/navbar.js";
import Homepage from './components/homepage';
import gettingStarted from './components/getting-started';
import resume from './components/resume-template';
import aboutUs from './components/aboutUs';
import signIn from './components/sign-in';
import education from './components/education';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/getting-started" component={gettingStarted} />
        <Route path="/about-us" component={aboutUs} />
        <Route path="/resume-template" component={resume} />
        <Route path="/sign-in" component={signIn} />
        <Route path="/trial" component={education} />
      </Router>
    </div>
  );
}

export default App;
