import React from 'react'
import '../styles/aboutMeStyles.css'
import AboutMeMidPage from './AboutMeMidPage'
import AboutMePic from './AboutMePic'

export default function AboutMe() {
    return (
        <div className="aboutMeMainDiv">
            <AboutMePic/>
            <AboutMeMidPage/>
        </div>
    )
}
