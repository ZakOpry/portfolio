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
                "Guitar Master" was my first complete front-end project. As a guitar player myself, I wanted to create a site that guitarists could used
                to find guitar tabs and learn their favorite songs. By using a "Songsterr" API, I was able to use DOM manipulation and give users the ability
                to search through thousands of tabs and pull up links to them that take users to the tab on Songsterr.com. The site fetches data from the API 
                by either artist name or song name and renders out the results in a scroll box. I also included a "Learning Page" were I give my own lesson on reading
                and using guitar tabs from scratch. The site is also completely mobile responsive.   
              </p>
             
              <p className='links'>Website: <a href='https://zakopry.github.io/front-end-project/index.html' target="blank">Guitar Master</a></p>
              <p className='links'>GitHub: <a href='https://github.com/ZakOpry/front-end-project' target='blank'>Guitar Master/GitHub</a></p>
              <p className='links'>Medium: <a href='https://medium.com/@zakopry/guitarmaster-com-35eb1f0d72d' target='blank'>Guitar Master/Medium</a></p>
        </div>
            </div>
        </div>
    )
}
