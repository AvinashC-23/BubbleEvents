import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './home.css';

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
      <button className='contactUs'>
        <span className='material-symbols-outlined contactIcon'>call</span>
      </button>
    </section>
  );
}

export default Home;

