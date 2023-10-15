import React from 'react'
import { Link } from 'react-scroll'
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className='outer'>
            <div className='img'>
                <img src="./src/Images/Logo.png" alt="" />
            </div>
            <div className='outer-inner'>
            <ul className='inner'>
                <li className="link">
                    <Link to="home" spy={true} smooth={true} offset={50} duration={800}  ><img className='imgg' src="./src/Images/home-page.png" alt="" /> 
                    </Link>
                </li>
                <li className='link'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={800} ><img className='imgg' src="./src/Images/about-me.png" alt="" />
                    </Link>
                </li>
                <li className='link'>
                    <Link to="portfolio" spy={true} smooth={true} offset={50} duration={800} ><img  className='imgg' src="./src/Images/portfolio.png" alt="" />
                    </Link> 
                </li>
                <li className='link'>
                    <Link to="contacts"spy={true} smooth={true} offset={50} duration={800} ><img  className='imgg' src="./src/Images/contact.png" alt="" /></Link>
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
