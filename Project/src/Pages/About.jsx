import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <div className='professional-summary'>
        <h2>About Me</h2>
        <p>Hello! I'm Ifeoluwa, a passionate and creative Frontend Developer with a keen eye for detail and a love for problem-solving. My journey into frontend development began with a curiosity for how the web works and a desire to bring creative ideas to life. I've always been fascinated by how users interact with technology and how seamless, visually appealing interfaces can make all the difference. Starting with the basics of HTML, CSS, and JavaScript, I immersed myself in building simple web pages. Over time, my projects grew more complex as I delved into frameworks like React and began creating dynamic, interactive applications. From developing reusable components to implementing responsive designs, I've honed my skills in crafting user-centric interfaces.</p>
      </div>

      <div className='skills-section'>
        <h2>Technical Expertise</h2>
        <div className='skills-grid'>
          {[
            { name: 'HTML', level: 90 },
            { name: 'CSS', level: 85 },
            { name: 'JavaScript', level: 85 },
            { name: 'React', level: 80 },
            { name: 'TypeScript', level: 75 },
            { name: 'API Integration', level: 80 },
            { name: 'DSA', level: 70 }
          ].map(skill => (
            <div className='skill-item' key={skill.name}>
              <span className='skill-name'>{skill.name}</span>
              <div className='skill-bar'>
                <div className='skill-level' style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
