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
                "Instagram Clone" is a Front-End Project I developed as Part of a Mock Interview Take Home Assignment. 
                I Used React Functional Components in Addition to Styled Components and CSS. Some Features of this Project
                Include a Fixed Nav Bar and CSS Grid Display. Images were put Into an Array of Objects then Mapped Over and Passed Down 
                as Props Into the Child Component thus Rendering Each Image Div on the Grid.   
              </p>
             
              <p className='links'>Website: <a href='https://zakopry.github.io/instagram-clone/' target="blank">Instagram Clone</a></p>
              <p className='links'>GitHub: <a href='https://github.com/ZakOpry/instagram-clone' target='blank'>IG Clone/GitHub</a></p>
              
        </div>
            </div>
        </div>
    )
}
