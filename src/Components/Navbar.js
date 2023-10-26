import React, { useState, useEffect } from 'react'
import "./navbar.css"
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink as Link} from 'react-router-hash-link';
import CloseIcon from "./closeicon.svg"
import MenuIcon from "./menuicon.svg"
function Navbar() {
    let [isMenuOpen, setIsMenuOpen]=useState(window.innerWidth>700?true:false);
    window.addEventListener("resize", ()=>{setIsMenuOpen(false)})

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight-50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("resize", () => { setIsMenuOpen(false) })
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener("resize", () => { setIsMenuOpen(false) })
    };
  }, []);

  return (
    <>
    <div className={scrolled?"navigation-bar-white":'navigation-bar'}>
        <Router>

            <Link to="#Home" className='logo' smooth>
                <h1>BUBBLE EVENTS</h1>
            </Link>            
            
        <div className={isMenuOpen?'navigation-menu':"closed-navigation-menu"}>
            <ul className="navlist">
            <li>
                <Link to="#Home" smooth={true} className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="#Events" smooth={true} className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                     Events
                </Link>
            </li>
            <li>
                <Link to="#photobooths" smooth={true} className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                    Photobooths
                </Link>
            </li>
            <li>
                <Link to="#pricing" smooth={true} className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                    Pricing
                </Link>
            </li>
            <li>
                <Link to="#contact-us" smooth={true} className='navigation-link' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                     ContactUs
                </Link>
            </li>
            </ul>
        </div>
        
        <div className='smaller-screen'>
            {isMenuOpen ? (
            <img className="navMenuIcon" src={CloseIcon} alt="close" onClick={() => {setIsMenuOpen(false)}}/>     
            ) : (
            <img className="navMenuIcon" src={MenuIcon} alt="close" onClick={() => {setIsMenuOpen(true)}}/>
            )}
        </div>
        </Router>
    </div>
    </>
  )
}
export default Navbar





