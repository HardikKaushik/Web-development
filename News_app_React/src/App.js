import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';


import { BrowserRouter as Router, Route,  Routes} 
        from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>

            <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general" />}/>
            < Route exact path="/Sports" element={<News key="Sports"pageSize={6} country="in" category="Sports" />}/>
            <Route exact path="/Business"element={<News key="Business"pageSize={6} country="in" category="Business" />}/>
            <Route exact path="/Entertainment"element={<News key="Entertainment"pageSize={6} country="in" category="Entertainment" />}/>
            <Route exact path="/Health"element={<News key="Health"pageSize={6} country="in" category="Health" />}/>
            <Route exact path="/Science"element={<News key="sports"pageSize={6} country="in" category="Science"/>}/>
            <Route exact path="/Technology"element={<News key="sports"pageSize={6} country="in" category="Technology" />}/>
               
          </Routes>



        </Router>
      </div>
    )
  }
}
