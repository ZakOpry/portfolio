import React from 'react'
import '../styles/instagramCloneStyles.css'
import insta from '../images/instagramClone.png'

export default function InstagramClone() {
    return (
        <div className='instaGramCloneDiv'>
           
        <div className='bodyAndPicDiv'>
             <h1>Instagram Clone</h1>
        <div className='picDiv'>
         <img className='pic' src={insta}/>
        </div>
        <div className='bodyDiv'>
        <p>
                "Instagram Clone" is a front-end project I developed as part of a mock interview take home assignment. 
                I used React functional components in addition to styled components and CSS. Some features of this project
                include a fixed nav bar and CSS grid display. Images were put into an array of objects then mapped over and passed down 
                as props into the child component thus rendering each image div on the grid.   
              </p>
             
              <p className='links'>Website: <a href='https://zakopry.github.io/instagram-clone/' target="blank">Instagram Clone</a></p>
              <p className='links'>GitHub: <a href='https://github.com/ZakOpry/instagram-clone' target='blank'>IG Clone/GitHub</a></p>
              
        </div>
            </div>
        </div>
    )
}
