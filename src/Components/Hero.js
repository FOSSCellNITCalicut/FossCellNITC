import React from 'react'
import './Hero.css'
import HeroImage from '../Svgs/HeroImage.svg'

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='hero-left'>
                <p className='hero-content'>Open Source</p>
                <p className='hero-content'>Coding Community</p>
                <p className='hero-content'>of NITC.</p>
                <p className='join-us'>Join us and make a difference</p>
                <button className='btn-explorenow'>Explore Now</button>
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