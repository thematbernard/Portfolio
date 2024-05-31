import React from 'react'

import { Link } from "react-router-dom";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h1> A little bit about me!</h1>

      <li> Oringally from Florida I studied Health Sciences, working in a Hospital
        for a few years I realized my passion was not there. </li>
      <li> Completed a bridge program at clemson condension the 4 years
          of undergrad into 1 year and fell in love with programming.
      </li>
      <li> I enjoy working out, playing videogames, solving puzzles and playing chess.
      </li>
      <li> Professional coding journey started 2 years ago when I became the 
        C++ Teachers Assistant for a professor at Clemson.
      </li>
      <li> Gained relative experience when starting an internship with Clemson 
        Engineers for Developing Communities, where we created a website 
        (check out my projects)
      </li>
      <li> Great leader and excellent listener, passionate about seeing things 
        through from start to finish
      </li>

      <div className="education">
        <h2>Some of my Education!</h2>
        <ul>
          <h1> Master's in Computer Science</h1>
          <p> Clemson University '2024 | GPA: 3.7 </p>

          <p> Related course work</p>
          <li> Network Security, Computer Graphics, Visal Computing, Data Structures and Algorithms, DDOS attacks & prevention</li>

          <h1>Bachelor's in Health Sciences</h1>
          <p> University of South Florida '2019</p>

          <li> Marine Biology Club, Best Buddies, Delta Tau Delta Fraternity Executive Board</li>
          
        </ul>
      </div>

      <div className="resume">
      <Link to="https://drive.google.com/file/d/1l7zEkAO9SYWuSF62fnaKh_wZTivrDxhW/view">
          <button>Take a look at my Resume! </button>
        </Link>
      </div>


    </div>
  )
}

export default About
