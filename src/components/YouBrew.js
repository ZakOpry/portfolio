import React from 'react'
import '../styles/youBrewStyles.css'
import youBrew from '../images/youBrew.png'


export default function YouBrew() {
    return (
        <div className='youBrewMainDiv'>
           
        <div className='bodyAndPicDiv'>
             <h1>YouBrew</h1>
        <div className='picDiv'>
         <img className='pic' src={youBrew}/>
        </div>
        <div className='bodyDiv'>
        
              <p>
                "YouBrew" is a project I developed as a solo front-end React project. YouBrew allows users to scroll through and view
                different beer recipes. The user can also save their favorite recipes and find them on the "Favorites" page. In addition to React, this 
                project also makes use of React Redux and React Router.  
              </p>
              <p className='links'>Website: <a href='https://zakopry.github.io/react-front-end-project-2/#/' target="blank">YouBrew</a></p>
              <p className='links'>GitHub: <a href='https://github.com/ZakOpry/react-front-end-project-2' target='blank'>YouBrew/GitHub</a></p>
              <p className='links'>Medium: <a href="https://medium.com/@zakopry/youbrew-e57eba4e2208" target='blank'>YouBrew/Medium</a></p>
        </div>
            </div>
        </div>
    )
}
