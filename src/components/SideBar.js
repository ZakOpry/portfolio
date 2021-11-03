import React from 'react'
import SideBarMiddleLinks from './SideBarMiddleLinks'
import '../styles/sideBarStyles.css'
import img from '../images/zak.jpeg'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import { IconContext } from 'react-icons'

export default function SideBar() {
    return (
        <div className="sideBarContainer">
            <div className="imageDiv">
                <div className="profilePicDiv">
                 <img className="sideBarProfilePic" src={img}/>
                  </div>
                 <h1 className="profileName">Zak O'Pry</h1>
                  <div className="icons">
                   <IconContext.Provider value = {{className: "sideBarIcons"}}>
                   <a href="https://www.linkedin.com/in/zak-o-pry-a461731b4"><AiFillLinkedin/></a>
                   <a href="https://github.com/ZakOpry"><FaGithub/></a>
                   </IconContext.Provider>
                  </div>
            </div>
            <SideBarMiddleLinks/>
        </div>
    )
}
