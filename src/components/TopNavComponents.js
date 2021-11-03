import React from 'react'
import '../styles/topNavBarStyles.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

export default function TopNavComponents() {
    return (
        <>
       <Link className="link" to='/'><div className="navButton"><h2>About Me</h2></div></Link>
       <Link className="link" to='/projects'><div className="navButton"><h2>Projects</h2></div></Link>
        <Link className="link" to='/contact'><div className="navButton"><h2>Contact</h2></div></Link>
        <div className="navIcons">
        <IconContext.Provider value = {{className: "navBarIcons"}}>
                   <a href="https://www.linkedin.com/in/zak-o-pry-a461731b4"><AiFillLinkedin/></a>
                   <a href="https://github.com/ZakOpry"><FaGithub/></a>
                   </IconContext.Provider>
            </div>   
        </>
    )
}
