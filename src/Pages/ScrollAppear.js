import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ScrollAppear({ children }) {
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
    <animated.div ref={sectionRef} style={fadeIn}>
      {children}
    </animated.div>
  );
}

export default ScrollAppear;