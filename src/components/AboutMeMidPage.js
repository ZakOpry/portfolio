import React from 'react'
import '../styles/aboutMeStyles.css'
import img from '../images/zak.jpeg'

export default function AboutMeMidPage() {
    return (
        <div className="aboutMeMidPage">
            <h1 className="aLittleBit">A Little Bit About Me</h1>
            <div className="infoDiv">
            <img className = "profilePic"src={img}/>
            <div className="infoBodyDiv">
            <h3>Hello, I'm Zak!</h3> <br /><p>
            I'm a full-stack Web Developer. I'm very passionate about building Web Applications and learning new technologies. 
            To me, coding is like an art form where I get to be the artist and the possibilities of creations are endless. Prior to coding, I had a career in the quality side of manufacturing.
            I decided to make the career change due to my interest in tech and wanted the satisfaction of getting to build and create things. I joined DigitalCrafts Full-Stack Coding Bootcamp and have
            been coding and creating ever since.
            Outside of coding, some of my interests include music, playing guitar, and really any outdoor activities.
          Originally born and raised in Southern Louisiana, I also thoroughly enjoy cooking up Cajun cuisine for all of my friends and family!</p>
            </div>
            </div>
            <div className="skillsDiv">
            <h2>Skills</h2>
            <p>I have experience and knowledge working with the following technologies:</p>
            <p><br/>JavaScript | React | Node.js | Python | Redux | Express Node.js | PostgreSQL | HTML | CSS </p>
            </div>
            <div className="openToWork">
            <h2>Open to Work</h2>
            <p>
              I'm open to full-time and contract work. I'm also open to remote and office positions. I am a passionate coder who gets along with everyone. Though I'm a full-stack developer, I 
              thoroughly enjoy working on front-end projects.
            </p>

            </div>
        </div>
    )
}
