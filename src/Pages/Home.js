import React, { useEffect, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
import './home.css';
import ScrollAppear from "./ScrollAppear"
import WhatsApp from "../Components/whatsapp.png"
function Home() {
  // const sectionRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  // const fadeIn = useSpring({
  //   opacity: isVisible ? 1 : 0,
  //   transform: `translateY(${isVisible ? '0' : '20'}px)`,
  //   config: { duration: 1000 },
  // });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsVisible(entry.isIntersecting);
  //     },
  //     { threshold: 0.5 }
  //   );

  //   const currentRef = sectionRef.current;

  //   if (currentRef) {
  //     observer.observe(currentRef);
  //   }

  //   return () => {
  //     if (currentRef) {
  //       observer.unobserve(currentRef);
  //     }
  //   };
  // }, [sectionRef]);

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
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
    <section className='homePage' id='Home'>

      <div className='introtext'>
        <ScrollAppear>
          <h1 className='fancy'>
            Event Management <br /> PHOTO BOOTH RENTAL
          </h1>
          <h2 style={{display:"none"}}>Event Management in bangalore. 360 PhotoBooth Rental at best prices. </h2>
          <p className='text'>
          Provide your guests and visitors with an exceptional and unforgettable experience.
        </p>
        </ScrollAppear>

        
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
            <span class="material-symbols-outlined " style={{ scale:"1.2"}} onClick={() => {
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

