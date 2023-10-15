import React from 'react'
import './Portfolio.css'
import tip from '../Images/tip.png'
import age from '../Images/age.png'
import faq from '../Images/faq.png'

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="containe">
        <div className="work-list">
          <div className="work">
            <img src={tip} alt=""/>
            <div className="layer">
              <h3>Tip Calculator</h3>
              <p>
              A tip calculator is a tool to quickly figure out how much to tip service workers, like restaurant servers, based on the bill amount and chosen tip percentage. It simplifies the process and ensures fair compensation.
              </p>
            </div>
          </div>
          <div className="work">
            <img src={age} alt="" />
            <div className="layer">
              <h3>Age Calculator</h3>
              <p>
              An age calculator is a tool or application that helps determine a person's age. Users typically input their birthdate, and the age calculator computes their current age based on the date of birth and the current date. It's a simple yet useful tool for various purposes, including age verification, age-related calculations, or even just for fun.
              </p>
            </div>
          </div>
          <div className="work">
            <img src={faq} alt="" />
            <div className="layer">
              <h3>FAQ</h3>
              <p>
              FAQ stands for "Frequently Asked Questions." It refers to a list of common questions and their respective answers on a particular topic, product, service, or website. FAQs are designed to provide quick and helpful information to users by addressing inquiries that are commonly raised.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="phone">
        <div>
          <img src={tip} alt="" />
          <p>A tip calculator</p>
        </div>
        <div>
        <img src={age} alt="" />
        <p>An age calculator</p>
        </div>
        <div>
        <img src={faq} alt="" />
        <p>Frequently Asked Questions</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
