import React, { useState } from 'react';
import Data from  "./data.json";
import "./why.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { autoScroll } from '@splidejs/splide-extension-auto-scroll'
import "@splidejs/react-splide/css";
function BoothEvents() {
    const eventDetails=Data.eventdetails;
    return (
        <section class="sectionWhy" id="WhyUs">    
            <div className='whiteHeading'>
                <h1>Get A Photo Booth For Your Event</h1>
            </div>
            <Splide
            options={{
            perPage: noOfItems,
            arrows: true,
            drag: "free",
            gap: "0rem",
            pagination: false,
            }}>
                    {eventDetails.map((event, index) => (
                        <SplideSlide key="item.id">
                            console.log(index)
                            <div
                                className="eventContainer" 
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={handleLeave}
                            >
                                <h1 className={hoveredItem === index ? "eventTitleHovered" : 'eventTitle'}>
                                    {event.title}
                                </h1>
                                <p className='eventData'>{event.info}</p>
                            </div>
                            </SplideSlide>
                    ))}
                </Splide>
                </section>
            )}
    export default BoothEvents;
            