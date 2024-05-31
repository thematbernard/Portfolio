import React from 'react'

export default function ProjectItem({image, name, link}) {
    console.log('Image prop:', image);
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Check out this project
      </a>
    </div>
  )
};
