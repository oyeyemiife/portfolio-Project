import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import "./Home.css";

const Home = () => {

  return (
    <div id='home'> 
      <div className='home'>
      <h1 className='h1'>
        Hello, <br />
        I am <span> <TypeAnimation
        sequence={[
          'Front-end Developer .',
          1000,
          'With',
          1000,
          '3 months experience ',
          1000,
          'Based in Nigeria .',
          1000
        ]}
        wrapper="span"
        speed={40}
        style={{ display: 'flex' }}
        repeat={Infinity}
      /></span> <br />  
          Ifeoluwa.
        </h1>
        </div>
    </div>
  )
  
}

export default Home



