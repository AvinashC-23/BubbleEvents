// import React from 'react'
// import "./pricing.css"
// import Logo from "./logo.png"
// import WhatsApp from "../Components/whatsapp.png"
// function Pricing() {

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { name, phoneNumber, email, message, options } = event.target.elements;

//     const data = {
//       name: name.value,
//       phoneNumber: phoneNumber.value,
//       email: email.value,
//       message: message.value,
//       options: options.value,
//       'form-name': 'contact',
//     };

//     try {
//       await fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: Object.keys(data)
//           .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//           .join("&"),
//       });

//       alert("Form submitted successfully!");
//     } catch (error) {
//       alert("Error submitting form!");
//     }
//   };
//   const visitLink = () => {
//     window.open('https://wa.link/bs4mdp', '_blank'); 
//   }
//   return (
//     <section className='pricingSection' id="pricing">
//       <h1 className='priceHeading'>Get the best prices in Bangalore</h1>
      
//       <div className='button-34' onClick={visitLink}>
//           <span>Text Us <img src={WhatsApp} className='buttonIcon' alt="WhatsApp"></img></span>
//       </div>

//       <h1 className='priceHeading mobileSection'>or request a callback</h1>

//       <div className='enquiryForm'>
//         <div className='logoHolder'>
//           <img src={Logo} alt="Bubble" className='formLogo'></img>
//         </div>

//         <div className='formHolder'>
//           <h2 className="messageHeading" style={{ textAlign: "center" }}>Or Request A Callback</h2>
//           <form name="contact" method="post" action="/" onSubmit={handleSubmit} className='details'>
//             <input type="hidden" name="form-name" value="contact" />
//             <p>
//               <input type="text" id="name" name="name" placeholder='Name' required />
//             </p>
//             <p>
//               <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Phone Number" />
//             </p>
//             <p>
//               <input type="email" id="email" name="email" required placeholder="E-Mail" />
//             </p>
//             <p>
//               <select id="options" name="options">
//                 <option value="option1">Event Management</option>
//                 <option value="option2">PhotoBooth</option>
//                 <option value="option3">Car Surprise Decor</option>
//               </select>
//             </p>
//             <p>
//               <textarea id="message" name="message" required placeholder='Message'></textarea>
//             </p>
//             <p>
//               <button type="submit" className='button-34'onClick={()=>}>Submit</button>
//             </p>

//           </form>
//         </div>
//       </div>

//     </section>
//   )
// }

// export default Pricing

import React, { useState } from 'react';
import "./pricing.css"
import Logo from "./logo.png"
import WhatsApp from "../Components/whatsapp.png"

function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    options: 'option1'
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, phoneNumber, email, message, options } = event.target.elements;

    const data = {
      name: name.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      message: message.value,
      options: options.value,
      'form-name': 'contact',
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&"),
      });

      alert("Form submitted successfully!");

      // Clear form fields after submission
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
        options: 'option1'
      });

    } catch (error) {
      alert("Error submitting form!");
    }
  };

  const visitLink = () => {
    window.open('https://wa.link/bs4mdp', '_blank');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <section className='pricingSection' id="pricing">
      <h1 className='priceHeading'>Get the best prices in Bangalore</h1>

      <div className='button-34' onClick={visitLink}>
        <span>Text Us <img src={WhatsApp} className='buttonIcon' alt="WhatsApp"></img></span>
      </div>

      <h1 className='priceHeading mobileSection'>or request a callback</h1>

      <div className='enquiryForm'>
        <div className='logoHolder'>
          <img src={Logo} alt="Bubble" className='formLogo'></img>
        </div>

        <div className='formHolder'>
          <h2 className="messageHeading" style={{ textAlign: "center" }}>Or Request A Callback</h2>
          <form name="contact" method="post" action="/" onSubmit={handleSubmit} className='details'>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <input type="text" id="name" name="name" placeholder='Name' required value={formData.name} onChange={handleChange} />
            </p>
            <p>
              <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
            </p>
            <p>
              <input type="email" id="email" name="email" required placeholder="E-Mail (optional)m" value={formData.email} onChange={handleChange} />
            </p>
            <p>
              <select id="options" name="options" value={formData.options} onChange={handleChange}>
                <option value="Event Management">Event Management</option>
                <option value="PhotoBooth">PhotoBooth</option>
                <option value="Car Decor">Car Surprise Decor</option>
              </select>
            </p>
            <p>
              <textarea id="message" name="message" placeholder='Message (optional)' value={formData.message} onChange={handleChange}></textarea>
            </p>
            <p>
              <button type="submit" className='button-34'>Submit</button>
            </p>

          </form>
        </div>
      </div>

    </section>
  )
}

export default Pricing;

