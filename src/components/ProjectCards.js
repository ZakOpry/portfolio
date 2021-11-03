import React from 'react'
import youBrew from '../images/youBrew.png'
import instaClone from '../images/instagramClone.png'
import guitar from '../images/guitarMaster.png'
import portPic from '../images/portfolio.png'
import { Link } from 'react-router-dom'

export default function ProjectCards() {
    return (
        <>
        <div className="projectCardDiv">
        <h1>YouBrew</h1>
        <img className="youBrewPic"src={youBrew}/>
        <p>A complete front-end React project</p>
        <Link to="/youbrew"><button className='seeMoreButton'>See More</button></Link>
        </div>

        <div className="projectCardDiv">
        <h1>Instagram Clone</h1>
        <img className="instaClonePic" src={instaClone}/>
        <p>An Instagram Page React Clone</p>
        <Link to='/instagramclone'><button className='seeMoreButton'>See More</button></Link>
        </div>

        <div className="projectCardDiv">
        <h1>Guitar Master</h1>
        <img className="guitarMasterPic" src={guitar}/>
        <p>A HTML, JS, and CSS front-end site</p>
        <Link to="/guitarmaster"><button className='seeMoreButton'>See More</button></Link>
        </div>
        <div className="projectCardDiv">
        <h1>Portfolio</h1>
        <img className='portfolioProjectPic' src={portPic}/>
        <p>A React front-end project</p>
        <Link to='/portfolio'><button className='seeMoreButton'>See More</button></Link>
        </div>

        </>
    )
}
