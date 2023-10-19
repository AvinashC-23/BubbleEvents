import React, { useState } from 'react';
import Data from "./data.json"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/react-splide/css";
import "./photobooth.comp.css"
import ScrollAppear from "./ScrollAppear"
function Photobooths() {
  const boothevent = Data.eventdetails;
  const includedData = Data.includedData;

  const [hoveredItem, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  }

  const handleLeave = () => {
    setHovered(null);
  }
  return (

    <section className="photobooths" id="photobooths">
      <ScrollAppear>
        <div className='photoBoothsMobile'>
          <h1 className='heading360'>GET A 360 PHOTOBOOTH FOR YOUR EVENT</h1>
          <div className='carrouselMobile'>
            <Splide options={{
              perPage: 1,
              rewind: true,
              arrows: false,
              drag: "fixed",
              gap: "0rem",
              pagination: true,
              type: "fade",
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                speed: 2,
                autoStart: true
              },
            }} extensions={{ AutoScroll }}>
              {boothevent.map((item, index) => (
                <SplideSlide key={item.id}>
                  <div className='photoBoothContainer' style={{ backgroundImage: `linear-gradient(33deg, rgba(90,90,92,0.5438769257703081) 0%, rgba(25,24,24,0.6083026960784313) 100%), url(${item.backgroundUrl})` }}>
                    <div className='innerContainer'>
                      <h1 className='photoBoothHeading'>{item.title}</h1>
                      <div className='photBoothTextDiv'>
                        <span className='photoBoothText'>{item.info}</span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
            <div className="splide__pagination ppagi"></div>
          </div>
        </div>
      </ScrollAppear>

      <ScrollAppear>
        <div className='photoBoothsTablet'>
          <h1 className='heading360'>GET A 360 PHOTOBOOTH FOR YOUR EVENT</h1>
          <div className='carrouselMobile'>
            <Splide options={{
              perPage: 2,
              arrows: false,
              rewind: true,
              drag: "fixed",
              gap: "0rem",
              pagination: true,
            }}>
              {boothevent.map((item, index) => (
                <SplideSlide key={item.id}>
                  <div className='photoBoothContainer' style={{ backgroundImage: `linear-gradient(33deg, rgba(90,90,92,0.5438769257703081) 0%, rgba(25,24,24,0.6083026960784313) 100%), url(${item.backgroundUrl})` }}>
                    <div className='innerContainer'>
                      <h1 className='photoBoothHeading'>{item.title}</h1>
                      <div className='photBoothTextDiv'>
                        <span className='photoBoothText'>{item.info}</span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>

          </div>
        </div>
      </ScrollAppear>

      <ScrollAppear>
        <div className='photoBoothsWindow'>
          <h1 className='heading360'>GET A 360 PHOTOBOOTH FOR YOUR EVENT</h1>
          <div className='carrouselWindow'>
            <Splide options={{
              perPage: 3,
              arrows: true,
              rewind: true,
              drag: "fixed",
              gap: "0rem",
              pagination: true,
            }}>


              {boothevent.map((item, index) => (
                <SplideSlide key={item.id}>
                  <div className='photoBoothContainer' style={{ backgroundImage: `linear-gradient(33deg, rgba(90,90,92,0.5438769257703081) 0%, rgba(25,24,24,0.6083026960784313) 100%), url(${item.backgroundUrl})` }}>
                    <div className='innerContainer'>
                      <h1 className='photoBoothHeading'>{item.title}</h1>
                      <div className='photBoothTextDiv'>
                        <span className='photoBoothText'>{item.info}</span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
            <div className="splide__pagination ppagi"></div>
          </div>
        </div>
      </ScrollAppear>



      <ScrollAppear>
        <div className='included'>
          <h1 className='heading360'>Included with Bubble Photo Booth</h1>


          <div className='includedPhone'>
            <Splide options={{
              perPage: 1,
              arrows: true,
              rewind: true,
              drag: "fixed",
              gap: "0rem",
              pagination: false,
            }}>
              {includedData.map((item, index) => (
                <SplideSlide key={item.id}>
                  <div
                    className="eventContainer"
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleLeave}
                  >
                    <div className='inEventContainer'>
                      <div className='titleLine'>
                        <span class="material-symbols-outlined ">
                          {item.icon}
                        </span>
                        <h1 className={hoveredItem === index ? "eventTitleHovered" : 'eventTitle'}>
                          {item.title}
                        </h1>
                      </div>
                      <p className='eventData'>{item.info}</p>
                    </div>

                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <ScrollAppear>
            <div className='includedTablet'>
              <Splide options={{
                perPage: 3,
                arrows: false,
                rewind: true,
                drag: "fixed",
                gap: "0rem",
                pagination: true,
              }}>
                {includedData.map((item, index) => (
                  <SplideSlide key={item.id}>
                    <div
                      className="eventContainer"
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={handleLeave}
                    >
                      <div className='inEventContainer'>
                        <div className='titleLine'>
                          <span class="material-symbols-outlined ">
                            {item.icon}
                          </span>
                          <h1 className={hoveredItem === index ? "eventTitleHovered" : 'eventTitle'}>
                            {item.title}
                          </h1>
                        </div>
                        <p className='eventData'>{item.info}</p>
                      </div></div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </ScrollAppear>



          <div className='includedWindows'>
            <ul className='includedList'>
              {includedData.map((item, index) => (
                <li key={item.id}>
                  <div
                    className="eventContainer"
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleLeave}>
                    <div className='inEventContainer'>
                      <div className='titleLine'>
                        <span class="material-symbols-outlined ">
                          {item.icon}
                        </span>
                        <h1 className={hoveredItem === index ? "eventTitleHovered" : 'eventTitle'}>
                          {item.title}
                        </h1>
                      </div>
                      <p className='eventData'>{item.info}</p>
                    </div></div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </ScrollAppear>
    </section>
    // </ScrollAppear>
  )
}

export default Photobooths
