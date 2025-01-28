import React from 'react'
import './Portfolio.css'
import travelmuse from '../Images/travelmuse.png'
import age from '../Images/age.png'
import weather from '../Images/weather.png'

const Portfolio = () => {
  const projects = [
    {
      image: travelmuse,
      title: "Travel Muse",
      description: "A detailed map to help students navigate around school efficiently. Built with React and integrated mapping technologies.",
      link: "https://travelmuse.vercel.app/",
      tech: ["React", "TypeScript", "Maps API", "CSS"]
    },
    {
      image: age,
      title: "Age Calculator",
      description: "An intuitive age calculator application with precise calculations and a modern interface.",
      link: "https://age-calculator-nine-tau.vercel.app/",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    {
      image: weather,
      title: "Weather App",
      description: "Real-time weather forecasting application with global coverage and detailed meteorological data.",
      link: "https://weather-app-psi-dun-77.vercel.app/",
      tech: ["React", "TypeScript", "Weather API", "CSS"]
    }
  ];

  return (
    <div id="portfolio">
      <h2 className="section-title">My Projects</h2>
      <div className="work-list">
        {projects.map((project, index) => (
          <div className="work" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="layer">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="view">View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
