import React from 'react'
import './Hero.css'
import HeroImage from './images/HeroImage.svg'

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='hero-left'>
                <p className='hero-content'>Open Source<br />Coding Community<br />of NITC.</p>
                <p className='hero-content-mobile'>Open Source Coding<br />Community of NITC.</p>
                <div className='mobile-content'>
                <p><br />FOSSCell is a technical club<br />that aims at promoting<br />and strengthening the Free<br />and Open Source Software<br />(FOSS) ecosystem in NITC.<br /> </p>
                </div>
                <p className='join-us'>Join us and make a difference</p>
                <button className='btn-explorenow'>Explore Now</button>
                <br className='line-break'/>
                <button className='btn-events'>Events</button>
            </div>
            <div className='hero-right'>
                <img src={HeroImage} alt='FossCell NITC' className='hero-image'/>
            </div>
        </div>
    </>
  )
}

export default Hero
