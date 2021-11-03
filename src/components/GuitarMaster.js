import React from 'react'
import guitar from '../images/guitarMaster.png'
import '../styles/guitarMasterStyles.css'

export default function GuitarMaster() {
    return (
        <div className='guitarMasterDiv'>
           
        <div className='bodyAndPicDiv'>
             <h1>Guitar Master</h1>
        <div className='picDiv'>
         <img className='pic' src={guitar}/>
        </div>
        <div className='bodyDiv'>
        <p>
                "Guitar Master" was my First Complete Front-End Project. As a Guitar Player Myself, I Wanted to Create a Site that Guitarists Could Used
                to Find Guitar Tabs and Learn their Favorite Songs. By Using a "Songsterr" API, I was Able to Use DOM Manipulation and Give Users the Ability
                to Search Through Thousands of Tabs and Pull up Links to them that Take Users to the Tab on Songsterr.com. The Site Fetches Data from the API 
                by Either Artist Name or Song Name and Renders Out the Results in a Scroll Box. I Also Included a "Learning Page" were I Give my Own Lesson on Reading
                and Using Guitar Tabs From Scratch. The Site is Also Completely Mobile Responsive.   
              </p>
             
              <p className='links'>Website: <a href='https://zakopry.github.io/front-end-project/index.html' target="blank">Guitar Master</a></p>
              <p className='links'>GitHub: <a href='https://github.com/ZakOpry/front-end-project' target='blank'>Guitar Master/GitHub</a></p>
              <p className='links'>Medium: <a href='https://medium.com/@zakopry/guitarmaster-com-35eb1f0d72d' target='blank'>Guitar Master/Medium</a></p>
        </div>
            </div>
        </div>
    )
}
