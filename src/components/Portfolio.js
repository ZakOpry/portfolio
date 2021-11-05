import React from 'react'
import '../styles/portfolioStyles.css'
import image from '../images/portfolio.png'

export default function Portfolio() {
    return (
        <div className='portfolioDiv'>
           
        <div className='bodyAndPicDiv'>
             <h1>Portfolio</h1>
        <div className='picDiv'>
         <img className='pic' src={image}/>
        </div>
        <div className='bodyDiv'>
        <p>
            "Portfolio" is a fully functional front-end React project that is used as my personal portfolio to show off some of 
            my recent work and projects. Using React Router, this site features 3 tabs including "About Me", "Projects", and "Contact". The "About Me" page gives
            some general info on me. The "Projects" page highlights some of my work. To see more about a specific project, just click the "See More" button and a new 
            component will be rendered that shows more info on the project. Finally, the "Contact" page gives you info on how to reach me. 


              </p>
             
              <p className='links'>Website: <a href='https://zakopry.github.io/portfolio/#/' target="blank">Portfolio</a></p>
              <p className='links'>GitHub: <a href='https://github.com/ZakOpry/portfolio' target='blank'>Portfolio/GitHub</a></p>
              
        </div>
            </div>
        </div>
    )
}
