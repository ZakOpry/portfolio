import React from 'react'
import '../styles/projectsStyles.css'
import ProjectCards from './ProjectCards'

export default function Projects() {
    return (
        <div className="mainProjectsDiv">
            <div className="headerDiv"><h1 className="myProjects">My Latest Projects</h1></div>
            <ProjectCards/>
        </div>
    )
}
