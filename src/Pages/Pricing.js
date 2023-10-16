import React from 'react'
import "./pricing.css"
function Pricing() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error submitting form!");
    }
  };

  return (
    <section className='pricingSection' id="pricing">
        <h1 className='blackHeading'>Get the best prices in Bangalore</h1>
        <button className='button-36'><a href='https://api.whatsapp.com/send?phone=919916050428&text=Hello!'>GET QUOTE</a></button>
      <form name="contact" method="post" action="/" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <button type="submit">Submit message</button>
      </p>
    </form>
    </section>
  )
}

export default Pricing
