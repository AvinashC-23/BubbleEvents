import React from 'react';
import './footer.css';

function Footer() {
 return (
    <section className="contactus" id="contact-us">
      <h1 className='contactTitle'>Get in touch with us through</h1>
      <div className='socialMediaLinks'>
        <div className='socialButton'>
          <img
            className="socialIcon"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F448-4486200_instagram-circle-png.png&f=1&nofb=1&ipt=6616ddfab9c147afa655299a7c24235ef4addbf474da98b90c85943dccc05d2e&ipo=images"
            alt="insta"
            style={{ height: '85%', width: '85%' }}
            onClick={() => window.open('https://www.youtube.com', '_blank')}
          />
        </div>
        <div className='socialButton'>
          <img
            className="socialIcon"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Ffacebook-logo-png-transparent-background%2Ffacebook-logo-png-transparent-background-5.png&f=1&nofb=1&ipt=25be94d016c2d72031a5aa722b652961afc63fb416ed7c297bd386b5d7e5d697&ipo=images"
            alt="insta"
            style={{ height: '110%', width: '110%' }} 
            onClick={() => window.open('https://www.youtube.com', '_blank')}
          />
        </div>
        <div className='socialButton'>
          <img
            className="socialIcon"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fmultarte.com.br%2Fwp-content%2Fuploads%2F2018%2F11%2Fkisspng-computer-icons-whatsapp-whatsapp-logo-5aeca11081bc49-2881449515254571685314.png%3Fw%3D1392%26ssl%3D1&f=1&nofb=1&ipt=8151afdf21a951f2ce9170e546d5178be1d1c81633d26b739f063e9dc27e472e&ipo=images"
            alt="insta"
            style={{ height: '85%', width: '85%' }}
            onClick={() => window.open('https://www.youtube.com', '_blank')}
          />
        </div>
        <div className='socialButton'>
          <img
            className="socialIcon"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Femail%2Femail_PNG100741.png&f=1&nofb=1&ipt=6db5d6301db40887fcffcf0934e0fd70c0089929c3f20ae694632190b2a3afb0&ipo=images"
            alt="insta"
            style={{ height: '85%', width: '85%' }}
            onClick={() => window.open('https://www.youtube.com', '_blank')}
          />
        </div>
        <div className='socialButton'>
          <img
            className="socialIcon"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcliply.co%2Fwp-content%2Fuploads%2F2019%2F04%2F371903520_SOCIAL_ICONS_YOUTUBE-1024x1024.png&f=1&nofb=1&ipt=2bf30a64c6d3a5b8057ce7e9a0739b0b3fe6fd3bcc556cb2eac56878ebf00909&ipo=images"
            alt="insta"
            style={{ height: '115%', width: '115%' }}
            onClick={() => window.open('https://www.youtube.com', '_blank')}
          />
        </div>
      </div>
      <div className='footerLine'></div>
    </section>
  );
}

export default Footer;
