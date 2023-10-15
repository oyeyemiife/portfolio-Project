import React from 'react'
import "./Portfolio.css"
import tip from "../Images/Tip-Calculator.png"
// import age from "../Images/age.png"
import faq from "../Images/faq.png"

{/* <script src="http://localhost:8097"></script> */}


const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className="containe">
        <div className="work-list">
          <div className="work">
            <img src={tip} alt="" />
            <div className="layer">
              <h3>Tip Calculator</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse beatae nihil sequi cupiditate neque nobis voluptatum placeat veritatis assumenda? Fuga omnis placeat doloremque debitis, nemo nostrum ex illum culpa.</p>
            </div>
          </div>
          {/* <div className="work">
            <img src={age} alt="" />
            <div className="layer">
              <h3>Age Calculator</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse beatae nihil sequi cupiditate neque nobis voluptatum placeat veritatis assumenda? Fuga omnis placeat doloremque debitis, nemo nostrum ex illum culpa.</p>
            </div>
          </div> */}
          <div className="work">
            <img src={faq} alt="" />
            <div className="layer">
              <h3>FAQ</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse beatae nihil sequi cupiditate neque nobis voluptatum placeat veritatis assumenda? Fuga omnis placeat doloremque debitis, nemo nostrum ex illum culpa.</p>
            </div>
          </div>
          <div className="works">
            <div className='works'>
            <p>Tip Calculator</p>
            <p>Age Calculator</p>
            <p>FAQ</p>
            </div>
            <div className='btn'>
          <a href="https://github.com/oyeyemiife/Tip-Calculator">See More</a>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
