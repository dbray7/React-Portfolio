import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import '../images/profilepic.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" />
        <div className="container">
          <div className="col-8">
            <h2>Hello!</h2>
              <p>My name is Deven Bray and I currently live in Cleveland, Ohio. I am a Full Stack Web Developer with a background in human behavior. Recently earned a certificate in Full Stack Development and acquired skills in HTML, CSS, and jQuery from Case Western Reserve University. I have five years of management experience and would love to use those skills to help people learn and continue to grow in the field. Possessing strong  communication, leadership and critical thinking skills throughout the course and want to continue to hone in on those skills to further my career in development. </p>
          </div>
          <div className="col-2">
            <img className="profile" src={require('../images/profilepic.jpg')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
