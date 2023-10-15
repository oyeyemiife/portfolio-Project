import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import html from "../Images/icons8-home-24.png/"
import css from "../Images/icons8-css-filetype-64.png"
import tailwind from "../Images/icons8-tailwindcss-48.png"
import react from "../Images/icons8-react-native-64.png"
import java from "../Images/icons8-java-script-64.png"
import api from "../Images/icons8-api-64.png"
import "./About.css";

const About = () => {
  return (
    <div id='about'>
     <div className='about'>
        <div className='text'>
          <h1>
          <TypeAnimation
        sequence={[
          ' About Me',
          1000,
          'About Me',
          1000,
          'About Me',
          1000,
          'About Me',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '30px', display: 'inline-block'
       }}
        repeat={Infinity}
            />
            <hr className='hr' />
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repudiandae optio vitae quis quaerat aspernatur ab architecto ut eligendi non deleniti rem libero esse ex, recusandae facilis cupiditate? Laboriosam a velit rem cupiditate quo vitae nesciunt soluta. Eligendi incidunt voluptates officiis ipsam, at eius in iste itaque asperiores laborum cupiditate aliquam obcaecati id laboriosam error! Asperiores architecto soluta cumque quas esse quo quae voluptatibus expedita magni praesentium minima repellendus excepturi, optio quos officia reiciendis ipsum, blanditiis cum quia placeat, pariatur eaque? Voluptatum facilis fugiat sed corrupti officia, ex velit tenetur quae voluptas? Reiciendis labore quia praesentium id consequuntur facere enim.</p>
              <div id='services'> 
                <div className='container'>
                  <div className="services-list">
                    <div>
                    <ul>
                      <li>Age: <span>20</span></li>
                      <li>Nationality: <span>Nigerian</span></li>
                      <li>Language: <span>English</span></li>
                      <li>Phone: <span>+234 703 5446 190</span></li>
                      <li></li>
                      </ul>
                    </div>
                    <div className='textp'>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>JAVASCRIPT</p>
                      <p>REACT</p>
                    </div>
                    </div>
                    <div className='logo'>
          <div className='spinnerr'>
            <div className='face1'>
              <img src={html} alt="" />
            </div>
            <div className='face2'>
            <img src={css} alt=""/>
            </div>
            <div className='face3'>
            <img src={java} alt="" />
            </div>
            <div className='face4'>
            <img src={tailwind} alt="" />
            </div>
            <div className='face5'>
            <img src={react} alt="" />
            </div>
            <div className='face6'>
            <img src={api} alt="" />
            </div>
              </div>
              </div>
                  </div>
              </div>
             
              </div>
        </div>
      </div>
  )
}

export default About
