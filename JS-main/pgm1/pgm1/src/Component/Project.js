import React  from 'react';
import './Project.css'

const Project = (props) => {
    return(
        <React.Fragment className="projects">
          <h1>Projects</h1> 
          <ul className = "project-list">
              <li>Face detection</li>
              <li>Online Food Ordering</li>
              <li>Gold Price Prediction</li>
              <li>Online Insurance-portal</li>
          </ul>
        </React.Fragment>
    )
}

export default Project;