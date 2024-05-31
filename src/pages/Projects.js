import React from 'react'
import { ProjectList } from "../helpers/projectlist"
import ProjectItem from '../components/ProjectItem'
import "../styles/projects.css"

function Projects() {
    return (
      <div className="projects">
        <h1 className="projectTitle">My Projects</h1> 
        <div className="projectList"> 
          {ProjectList.map((projectItem, key) => (
            <ProjectItem
              key={key}
              image={projectItem.image}
              name={projectItem.name}
              link={projectItem.link}
            />
          ))}
        </div>
      </div>
    );
  }

export default Projects
