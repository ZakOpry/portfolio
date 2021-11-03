import React from 'react'
import '../styles/sideBarStyles.css'

export default function SideBarMiddleLinks() {
    return (
        <div className="mainSideBarLinksDiv">
            <div className="link" id="aboutMe"><h2>About Me</h2></div>
            <div className="link" id="projects"><h2>Projects</h2></div>
            <div className="link" id="contact"><h2>Contact</h2></div>
        </div>
    )
}
