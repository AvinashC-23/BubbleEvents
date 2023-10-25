import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Events.css";
import Data from "./data.json";

function Events() {
  
  const EventDetails=Data.events;

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
    <section ref={sectionRef} className="eventPage" id="Events">
      <animated.h1 style={fadeIn} class="heading360">Our Services</animated.h1>
      {/* <h2>Relax and relish every moment of your event, knowing that we've got every detail covered. With Bubble Events, you can enjoy your special occasion without the stress of managing it. We're here to ensure everything runs seamlessly, leaving you free to make memories that last a lifetime.</h2> */}
      <Splide
            options={{
            rewind:true,
            perPage: 1,
            arrows: true,
            drag: "fixed",
            gap: "0rem",
            pagination: false,
            autoplay:true,
            interval:3000,
            type:"fade"
            }}>
                {EventDetails.map((event)=>(
                    <SplideSlide key={event.id}>
                      <animated.div style={fadeIn} className='container'>
                        <div className='eventInfo'>
                          <h1 className='title'>{event.title}</h1>
                          <p className='eventText'>{event.info}</p>
                        </div>
                        <div className='line'></div>
                        <div className='media' style={{ background: `url(${event.image})`,backgroundSize: 'cover'}}>
                          {/* <img className="media" src={event.image} alt="Loading....."> */}
                        {/* </img> */}
                        </div>
                      </animated.div>


                    </SplideSlide>      
                ))}
            </Splide>
    </section>
  )
}

export default Events;

// import React, { useRef, useEffect, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import "./Events.css"; // Assuming you have a CSS file named "Events.css"
// import Data from "./data.json"; // Assuming you have a JSON file named "data.json"

// function Events() {
//   const EventDetails = Data.events;

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const fadeIn = useSpring({
//     opacity: isVisible ? 1 : 0,
//     transform: `translateY(${isVisible ? '0' : '20'}px)`,
//     config: { duration: 1000 },
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     const currentRef = sectionRef.current;

//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, [sectionRef]);

//   const settings = {
//     dots: true,
//     arrows:false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0'
//   };

//   return (
//     <section ref={sectionRef} className="eventPage" id="Events">
//       <animated.h1 style={fadeIn} className="heading360">We Undertake</animated.h1>
//       {/* <h2>Relax and relish every moment of your event, knowing that we've got every detail covered. With Bubble Events, you can enjoy your special occasion without the stress of managing it. We're here to ensure everything runs seamlessly, leaving you free to make memories that last a lifetime.</h2> */}
//       <Slider {...settings}>
//         {EventDetails.map((event) => (
//           <div key={event.id} className='container'>
//             <div className='eventInfo'>
//               <h1 className='title'>{event.title}</h1>
//               <p className='eventText'>{event.info}</p>
//             </div>
//             <div className='line'></div>
//             {/* <div className='media'> */}
//               {/* Uncomment the following lines to embed a video */}
//               {/* <iframe className='video'
//                 src="https://www.youtube.com/embed/C0DPdy98e4c"
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//                 title="video"/> */}
//             {/* </div> */}
//           </div>
//         ))}
//       </Slider>
//     </section>
//   )
// }

// export default Events;

