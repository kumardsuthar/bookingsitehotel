import React from 'react'
import '../css/contactpage.css';
import contactimg from '../media/contactimg/contactimg.svg'
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';

export default function Contactpage() {




  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    'service_0qblv96',
      'template_ywxq2rb',
      e.target,
      'ZEA8MDFjF3rsl9RAY'
    ).then((result) => {
      Swal.fire({
        title: "Email sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000
      }).then(() => {
        window.location.reload(); 
      });
    }).catch((error) => {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong: " + error.text,
        icon: "error",
        confirmButtonText: "Try Again"
      });
    });

    e.target.reset(); 
  };

  
    return (

    <div className="container">
        <div className="cont-main">
        <h1 className='cont-title'>Let's connect and get to know each other</h1>
        <p className='cont-title2'>Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</p>
       <div className="cont-three">
     <div className="cont-three">
  <div className="contact-card1">
    <div className="cardicon"><i className="fa-solid fa-headphones" /></div>
    <div className="cardtag1">Call us</div>
    <div className="cardtag2">Imprudence attachment him his for sympathize. Large above be to means</div>
    <div className="phone-cont">
      <div className="phone1"><i className="fa-solid fa-mobile-screen-button" /> +123 456 789</div>
      <div className="phone2"><i className="fa-solid fa-phone textstr" /> +(222)4567 586</div>
    </div>
  </div>
  <div className="contact-card1">
    <div className="cardicon2"><i className="fa-solid fa-inbox" /></div>
    <div className="cardtag1">Email us</div>
    <div className="cardtag2">Imprudence attachment him his for sympathize. Large above be to means</div>
    <div className="cont-email"><i className="fa-solid fa-envelope" /> example@gamil.com</div>
  </div>
  <div className="contact-card1">
    <div className="cardicon3"><i className="fa-solid fa-globe" /></div>
    <div className="cardtag1">Social media</div>
    <div className="cardtag2">Sympathize Large above be to means.</div>
    <div className="cont-icons">
      <div className="fbicon"><i className="fa-brands fa-facebook-f" /></div>
      <div className="instaicon"><i className="fa-brands fa-instagram" /></div>
      <div className="twitter"><i className="fa-brands fa-twitter" /></div>
      <div className="link"><i className="fa-brands fa-linkedin-in" /></div>
    </div>
  </div>
</div>

      </div>

      <div className="cont-sec3">
        <div className="contactimg">
          <img src={contactimg} alt="" />
        </div>

        {/* ✅ FIX: onSubmit is now on the <form> element */}
        <form className="contact-form" onSubmit={sendEmail}>
          <h1 className='form-tag'>Send us message</h1>

          <div className="your-name-cont">
            <div className="your-name-main1">
              
              <label>Your name *</label>
              <input type="text" className='your-name' name="name" required />
            </div>
            <div className="email-address-main">
              <label>Email address *</label>
              <input type="email" className='email-address' name="email" required />
            </div>
          </div>

          <div className="mobile-sect">
            <label>Mobile number *</label>
            <input type="text" className='mobile-num' name="number" required />
          </div>

          <div className="message-sec">
            <label>Message *</label>
            {/* ✅ FIX: Correct name="message" */}
            <textarea name="message" id="" className='message-cont' required></textarea>
          </div>

          <div className="checkbox-sec">
            <input type="checkbox" className='form-check-input' required />
            <label>By submitting this form you agree to our terms and conditions.</label>
          </div>

          <div className="form-button">
            {/* ✅ FIX: Use type="submit" */}
            <button className='form-btn'  type="submit">Send Message</button>
          </div>
        </form>
      </div>

      <div className="location-sec">
        {/* Optional: location/map section */}
      </div>
    </div>
    </div>
    
    )
}
