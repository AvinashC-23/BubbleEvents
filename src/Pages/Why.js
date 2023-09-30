import React, { useEffect, useState  } from 'react';
import Data from "./data.json";
import "./why.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { autoScroll } from '@splidejs/splide-extension-auto-scroll'
import "@splidejs/react-splide/css";
function Why() {
    const eventDetails = Data.eventdetails;
    const includedData = Data.includedData;
    const [isScreenMobile, setIsScreenMobile] = useState(window.innerWidth)
    const [noOfItems, setNoOfItems] = useState(Math.floor(window.innerWidth));


    useEffect(() => {
        window.addEventListener("resize", () => {
            handlePageSize();
        })
        return (() => window.removeEventListener("resize"), handlePageSize())
    }, []);

    const handlePageSize = () => {
        setNoOfItems(Math.floor(window.innerWidth / 400))
        setIsScreenMobile(window.innerWidth < 890 ? true : false)
    }

    console.log(noOfItems)
    const [hoveredItem, setHovered] = useState(null);
    const handleHover = (index) => {
        setHovered(index);
    }

    const handleLeave = () => {
        setHovered(null);
    }

    console.log(isScreenMobile)

    return (
        <section class="sectionWhy" id="WhyUs">
            {isScreenMobile ?
                (
                    <div className='whiteHeading'>
                        <h1 className='heading1'>Get A Photo Booth For Your Event</h1>
                        <div>
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
                        </div>
                        <h1 className='heading1'>
                            Included witht Bubble 360 photo boot
                        </h1>
                        <div className='nextDiv'>
                            <Splide
                                options={{
                                    perPage: noOfItems,
                                    arrows: false,
                                    drag: "free",
                                    gap: "0rem",
                                    pagination: true,
                                    autoScroll: {
                                        pauseOnHover: false,
                                        pauseOnFocus: false,
                                        speed: 2
                                    },
                                }}>
                                {includedData.map((item, index) => (
                                    <SplideSlide key="item.id">
                                        <div
                                            className="eventContainer"
                                            onMouseEnter={() => handleHover(index)}
                                            onMouseLeave={handleLeave}
                                        >
                                            <h1 className={hoveredItem === index ? "eventTitleHovered" : 'eventTitle'}>
                                                {item.title}
                                            </h1>
                                            <p className='eventData'>{item.info}</p>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </div>
                    </div>

                ) : (
                    <div>
                        <h1 className='heading'>
                            Get 360 photo booth for your event
                        </h1>
                        <ul className='eventsdiv'>
                            {eventDetails.map((event, index) => (
                                <li key={index}>
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
                                </li>
                            ))}
                        </ul>

                        <h1 className='heading'>
                            Included witht Bubble 360 photo boot
                        </h1>
                        <div className='nextDiv'><ul className='eventsdiv'>
                            {includedData.map((event, index) => (
                                <li key={index}>
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
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                )
            }
        </section>

    )

}

export default Why;
