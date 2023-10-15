import React from 'react'
import { Link } from 'react-scroll'
import "./Navbar.css"
import logo from "../Images/Logo.png"
import home from "../Images/Home-page.png"
import about from "../Images/About-me.png"
import portfolio from "../Images/Portfolio.png"
import contact from "../Images/Contact.png";



const Navbar = () => {
    return (
        <nav className='outer'>
            <div className='img'>
                <img src={logo} alt="" />
            </div>
            <div className='outer-inner'>
            <ul className='inner'>
                <li className="link">
                    <Link to="home" spy={true} smooth={true} offset={50} duration={800}  ><img className='imgg' src={home} alt="" /> 
                    </Link>
                </li>
                <li className='link'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={800} ><img className='imgg' src={about} alt="" />
                    </Link>
                </li>
                <li className='link'>
                    <Link to="portfolio" spy={true} smooth={true} offset={50} duration={800} ><img  className='imgg' src={portfolio} alt="" />
                    </Link> 
                </li>
                <li className='link'>
                    <Link to="contacts"spy={true} smooth={true} offset={50} duration={800} ><img  className='imgg' src={contact} alt="" /></Link>
                </li>
                </ul>
            </div>
            <div className='quotes'>
                <p>"Code is like humor. When you have to explain it, it's bad." - Cory House</p>
                </div>
      </nav>
        
         
  )
}

export default Navbar
