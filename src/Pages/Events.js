import React from 'react'
import Data from "./data.json"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player"
import "./Events.css"
function Events() {
  const EventDetails=Data.events;
  return (
    <section className="eventPage" id="Events">
      <h1 class="blackHeading">We Under take</h1>
      <Splide
            options={{
            rewind:true,
            perPage: 1,
            arrows: true,
            drag: "fixed",
            gap: "0rem",
            pagination: true,
            }}>
                {EventDetails.map((event)=>(
                    <SplideSlide key="event.id">
                      <div className='container'>
                        <div className='eventInfo'>
                          <h1 className='title'>{event.title}</h1>
                          <p className='eventText'>{event.info}</p>
                        </div>
                        <div className='line'></div>
                        <div className='media'>
                          {/* <ReactPlayer className="video" url="https://www.youtube.com/watch?v=ug50zmP9I7s"/> */}
                          <iframe className='video'
                            src="https://www.youtube.com/embed/C0DPdy98e4c"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"/>
                        </div>
                      </div>
                      {/* <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">Prev</button>
                        <button className="splide__arrow splide__arrow--next">Next</button>
                      </div> */}

                    </SplideSlide>      
                ))}
            </Splide>
    </section>
  )
}

export default Events
