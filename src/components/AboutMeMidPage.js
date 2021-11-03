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
            I'm a Full-Stack Web Developer. I'm Very Passionate About Building Web Applications and Learning New Technologies. 
            To me, Coding is Like an Art Form Where I Get to be the Artist and the Possibilities of Creations are Endless. Prior to Coding, I had a Career in the Quality Side of Manufacturing.
            I Decided to Make the Career Change due to my Interest in Tech and Wanted the Satisfaction of Getting to Build and Create Things. I Joined DigitalCrafts Full-Stack Coding Bootcamp and Have
            Been Coding and Creating Ever Since.
            Outside of Coding, Some of My Interests Include Music, Playing Guitar, and Really any Outdoor Activities.
          Originally Born and Raised in Southern Louisiana, I Also Thoroughly Enjoy Cooking Up Cajun Cuisine for all of my Friends and Family!</p>
            </div>
            </div>
            <div className="skillsDiv">
            <h2>Skills</h2>
            <p>I Have Experience and Knowledge Working With the Following Technologies:</p>
            <p><br/>JavaScript | React | Node.js | Python | Redux | SQL | PostgreSQL | HTML | CSS </p>
            </div>
            <div className="openToWork">
            <h2>Open to Work</h2>
            <p>
              I'm Open to Full Time and Contract Work. I'm also Open to Remote and Office Positions. I am a Passionate Coder Who gets Along with Everyone. Though I'm a Full-Stack Developer, I 
              Thoroughly Enjoy Working on Front-End Projects.
            </p>

            </div>
        </div>
    )
}
