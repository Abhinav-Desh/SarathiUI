import React from 'react'
import logo from '../Assets/logoforinfo.png'

const IntroScreen = () => {
  return (
    <div className='intro-container'>
        <img src={logo} alt="Pramerica life insurance" className='logo-animation' />
        {/* <h1 className='sarathi-text'>Welcome to Sarathi Ai</h1> */}
    </div>
  )
}

export default IntroScreen