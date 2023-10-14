import React from 'react';
import './footer.css';
import facebook from "./facebook.png"
import whatsapp from "./whatsapp.png"
import instagram from "./insta.png"
function Footer() {
  return (
    <section className="contactus" id="contact-us">
      <h1 className='contactTitle'>Get in touch with us through</h1>
      <div className='socialMediaLinks'>
        <div className='socialButton'>
          <img
            className="socialIcon"
            src={instagram}
            alt="insta"
            style={{ height: '60%', width: '60%' }}
            onClick={() => window.open('https://www.youtube.com', '_blank')}
          />
        </div>
        <div className='socialButton'>
          <img
            className="socialIcon"
            src={facebook}
            alt="insta"
            style={{ height: '60%', width: '30%' }}
            onClick={() => window.open('https://www.youtube.com', '_blank')}
          />
        </div>
        <div className='socialButton'>
          <img
            className="socialIcon"
            src={whatsapp}
            alt="insta"
            style={{ height: '65%', width: '65%' }}
            onClick={() => window.open('https://www.youtube.com', '_blank')}
          />
        </div>
      </div>
      {/* <div className='footerLine'></div> */}
      <div className='footerData'>
        <div className='call'>
          <ul className='footerUL'>
            <li className='footerLogo'><span class="material-symbols-outlined ">
call
</span></li>
            <li className='footerLi'><a href='tel:9916050428'>+91 99160 50428</a></li>
            <li className='footerLi'><a href='tel:9945507093'>+91 99455 07093</a></li>
          </ul>
        </div>
        <div className='mail'>
          <ul className='footerUL'>
            <li className='footerLogo'><span class="material-symbols-outlined">
mail
</span></li>
            <li className='footerLi'><a href="mailto:support@bubbleevents.in">support@bubbleevents.in</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
