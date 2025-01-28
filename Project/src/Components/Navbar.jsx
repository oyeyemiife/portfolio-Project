import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='sidebar'>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => 
                            isActive ? 'sidebar-link active' : 'sidebar-link'
                        }> 
                            <AiOutlineHome size={20} />
                            <span>Home</span> 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => 
                            isActive ? 'sidebar-link active' : 'sidebar-link'
                        }> 
                            <AiOutlineUser size={20} />
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({isActive}) => 
                            isActive ? 'sidebar-link active' : 'sidebar-link'
                        }> 
                            <AiOutlineFolderOpen size={20} />
                            <span>My Work</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => 
                            isActive ? 'sidebar-link active' : 'sidebar-link'
                        }> 
                            <AiOutlineMail size={20} />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
