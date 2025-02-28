import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ig from "../Images/instagram.png"
import git from "../Images/github.png"
import "./Contact.css";

emailjs.init('p-yvJPDni8_UaFE_M');

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log('Attempting to send email...');
    console.log('Form current:', form.current);

    emailjs.sendForm(
      'service_37f2hbj',
      'template_318w7ue',
      form.current,
      'p-yvJPDni8_UaFE_M'
    )
      .then((result) => {
          console.log('Message sent successfully:', result.text);
          form.current.reset();
          alert('Message sent successfully!');
      }, (error) => {
          console.error('Failed to send message. Error details:', error);
          alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2>Get In Touch</h2>
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="user_email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send Email</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
