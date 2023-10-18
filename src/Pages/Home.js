import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './home.css';
import WhatsApp from "../Components/whatsapp.png"
function Home() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? '0' : '20'}px)`,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionRef]);

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  }

  const handleOptionClick = (option) => {
    console.log(`Option ${option} clicked`);
    setExpanded(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expanded && !event.target.closest('.button-container')) {
        setExpanded(false);
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    }
  }, [expanded]);

  return (
    <section ref={sectionRef} className='homePage' id='Home'>
      <div className='introtext'>
        <animated.h1 style={fadeIn} className='fancy'>
          EVENT MANAGEMENT <br /> PHOTO BOOTH RENTAL
        </animated.h1>
        <animated.p style={fadeIn} className='text'>
          Provide your guests and visitors with an exceptional and unforgettable experience.
        </animated.p>
      </div>
      <div className='button-container'>
        <div className={expanded ? "hideContact" : 'contactUs'} onClick={toggleExpand}>
          <span className='material-symbols-outlined contactIcon'>call</span>
        </div>
        {expanded &&
          <div className='optionsContainer'>
            <span onClick={() => {
              setExpanded(false);
              window.open('https://wa.link/bs4mdp', '_blank')
            }}>
              <img src={WhatsApp} className='optionsContainerLogo' alt="WhatsApp"></img>
            </span>
            <span class="material-symbols-outlined optionsContainerLogo" style={{height:"50px", width:"50px"}} onClick={() => {
              setExpanded(false);
              window.open('tel:9019673729', '_blank')
            }}>
              call
            </span>
          </div>
        }
      </div>
    </section>
  );
}

export default Home;

