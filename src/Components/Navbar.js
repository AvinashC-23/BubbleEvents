import React, { useState } from 'react'
import "./navbar.css"
// import Home from '../Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink as Link} from 'react-router-hash-link';
function Navbar() {
    let [isMenuOpen, setIsMenuOpen]=useState(window.innerWidth>700?true:false);
    // const [isWindowSizeChanged, setISWindowSizeChanged]=useState(false)
    window.addEventListener("resize", ()=>{setIsMenuOpen(false)})
  return (
    <>
    <div className='navigation-bar'>
        <Router>
        <div className='logo'>
            <Link to="#Home" className='logo' smooth>
                <h1>BUBBLE EVENTS</h1>
            </Link>            
        </div>
        <div className={isMenuOpen?'navigation-menu':"closed-navigation-menu"}>
            <ul className="navlist">
            <li>
                <Link to="#Home" className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="#Events" className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                     Events
                </Link>
            </li>
            <li>
                <Link to="#photobooths" className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                    Photobooths
                </Link>
            </li>
            <li>
                <Link to="/pricing" className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                    Pricing
                </Link>
            </li>
            <li>
                <Link to="/contact-us" className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                     Contact-Us
                </Link>
            </li>
            </ul>
        </div>
        
        <div className='smaller-screen'>
            <i className={isMenuOpen? "fa-solid fa-circle-xmark menu-icon": "fa-solid fa-bars menu-icon" }onClick={()=>{setIsMenuOpen(!isMenuOpen)
            console.log(isMenuOpen)}}></i>
        </div>
        </Router>
    </div>
    </>
  )
}
export default Navbar