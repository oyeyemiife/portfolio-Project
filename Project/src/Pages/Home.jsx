import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import "./Home.css";

const Home = () => {
  return (
    <div id='home' className='dark-theme'> 
      <motion.div 
        className='home-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='left-section'>
          <motion.h2 
            className='greeting'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi there! 👋
          </motion.h2>
          
          <motion.h1 
            className='name'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm Ifeoluwa
          </motion.h1>

          <motion.div 
            className='type-wrapper'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                'Building digital experiences',
                1000,
                'Crafting user interfaces',
                1000,
                'Solving problems with code',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="type-animation"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div 
            className='action-buttons'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/portfolio">
              <button className='primary-btn'>View Projects</button>
            </Link>
            <Link to="/contact">
              <button className='secondary-btn'>Let's Connect</button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className='right-section'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className='tech-stack'>
            <div className='tech-item'>React</div>
            <div className='tech-item'>TypeScript</div>
            <div className='tech-item'>API Integration</div>
            <div className='tech-item'>JavaScript</div>
            <div className='tech-item'>CSS</div>
            <div className='tech-item'>HTML</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home



