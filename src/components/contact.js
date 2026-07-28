import React from 'react';
import '../styles.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Contact = () => {
    return (
        <section id="contact">
            <h1 className="section-title">Contact</h1>
            <br />
            <span className="contact-text">Feel free to reach me at: <a href="mailto:venkatxd1@gmail.com" className="email-link">venkatxd1@gmail.com</a></span>
            <br />
            <br />
            {/*<form className="contact-form">
                <input type="text" className="name" placeholder="Your Name" />
                <input type="email" className="email" placeholder="Your Email" />
                <textarea name="message" rows="5" className="message" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submit-btn">Submit</button>
            </form>*/}
            <div className="links">
            <a href = "https://www.linkedin.com/in/notvenkat/" target = "_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" className="link" /></a>
            <a href = "https://github.com/venkatx02" target = "_blank" rel="noreferrer"><img src={github} alt="github" className="link" /></a>
            </div>
        </section>
    );
  }
  
  export default Contact;