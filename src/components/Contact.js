import React from 'react'
import ContactUpperPic from './ContactUpperPic.js'
import '../styles/contactStyles.css'

export default function Contact() {
    return (
        <div className="mainContactDiv">
            <ContactUpperPic/>
            <div className="mainMiddleDiv">
            <div className="ContactMe"><h1>Contact Me</h1></div>
            <p>LinkedIn: <a href ="https://www.linkedin.com/in/zak-o-pry-a461731b4">ZakOpry</a></p>
            <p>GitHub: <a href = "https://github.com/ZakOpry">GitHub</a></p>
            <p>Email: <a href = "mailto:" >ZakOpry</a></p>
            <p>I look forward to getting back with you as soon as I can!</p>

            </div>

          
            
        </div>
    )
}
