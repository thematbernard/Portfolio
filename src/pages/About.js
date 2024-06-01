import React from 'react'

import { Link } from "react-router-dom";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h1> A little bit about me!</h1>

      <li> Oringally from Florida, I completed my bachelors in Health Sciences and then worked in a Hospital
        for a few years. </li>

      <li> Completed the bridge program at Clemson Unversity that condensed the 4 years
          of undergrad into 1 year and fell in love with programming.
      </li>

      <li> The bridge program consisted of all the fundamentals of programming indluding:
        Memory management, structure, syntax, object oriented programming, and data structures and
        algorithms (hopefully which I have displayed on this website).
      </li>
      <li> I enjoy working out, playing video games, solving puzzles and playing chess.
      </li>
      <li> Professional coding journey started 2 years ago when I became the 
        C++ Teachers Assistant for a professor at Clemson.
      </li>
      <li> Gained relative experience after starting an internship with Clemson 
        Engineers for Developing Communities, where we created a website 
        (check out my projects).
      </li>
      <li> Great leader and excellent team player, passionate about seeing things 
        through from start to finish and looking forward to being part of a dynamic team
        to solve problems and create solutions.
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
      <Link to="https://drive.google.com/file/d/12LdC0-Z8peGSsTQLtQlUEwtjMQWqvI1B/view" target="_blank">
          <button>Take a look at my Resume! </button>
        </Link>
      </div>


    </div>
  )
}

export default About
