import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/thematbernard" target="_blank" rel="noopener noreferrer">
        <GitHubIcon /> 
        </a>
        <a href="https://www.linkedin.com/in/mathew-bernard/" target="_blank" rel="noopener noreferrer">
        < LinkedInIcon/>
        </a>
        </div>
        <p>&copy; 2024 Mat's Portfolio</p>
    </div>
  )
}

export default Footer
