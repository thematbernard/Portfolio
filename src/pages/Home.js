import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/clemson.PNG"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ 
      backgroundImage: `url(${BannerImage})`,
      backgroundAlt: 'Clemson University Banner Image' }}>
      <div className="headerContainer">
        <h1>Hi, I'm Mat!</h1>
        <h3>Software Developer | Recent Masters Grad Student from Clemson</h3>
        <p>Actively seeking full-time software developer positions</p>
        <Link to="/projects">
          <button>Check out my Projects</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
