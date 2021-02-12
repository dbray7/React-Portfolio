import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './projects.css';


class projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="My Work" />
          <div className="container">
            <div className="row skills">
              <div className="row one">
                <div className="col-xs-3">
                  <img className="project-img" src={require('../images/project1.png')}/>
                  <a href="https://github.com/hmorton77/Project1">
     <button className='btn' type="button">
          See more!
     </button>
 </a>
                </div>
                <div className="col-xs-3">
                  <img className="project-img" src={require('../images/project2.png')}/>
                  <a href="https://github.com/dbray7/nosql-workouttracker">
     <button className='btn' type="button">
          See more!
     </button>
 </a>
                </div>
                <div className="col-xs-3">
                  <img className="project-img" src={require('../images/project3.png')}/>
                  <a href="https://github.com/dbray7/Day-Planner-2">
     <button className='btn' type="button">
          See more!
     </button>
 </a>
                </div>
              </div>

              <div className="row two">
                <div className="col-xs-3">
                  <img className="project-img" src={require('../images/project4.png')}/>
                  <a href="https://github.com/dbray7/CodingQuiz">
     <button className='btn' type="button">
          See more!
     </button>
 </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default projects
