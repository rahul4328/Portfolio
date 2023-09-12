import React from 'react';
import './ContactUs.css'; // Import your CSS file

class ContactUs extends React.Component {
  render() {
    return (
      <section>
        <div className="section-header" id='contact'>
          <div className="container">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                <i class="fa-solid fa-location-dot"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Location</h4>
                  <p>
                    Bengaluru, India
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone"></i> 
                </div>

                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>+91 8918965604</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i> 
                </div>

                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>rahulranjan4328@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form action="" id="contact-form">
                <h2>Get In Touch</h2>
                <div className="input-box">
                  <input type="text" required name="" />
                  <span>Full Name</span>
                </div>

                <div className="input-box">
                  <input type="email" required name=""/>
                  <span>Email</span>
                </div>

                <div className="input-box">
                  <textarea required name=""></textarea>
                  <span>Type your Message...</span>
                </div>

                <div className="input-box">
                  <input
                    type="submit"
                    value="Send"
                    name=""
                    className="submit-button"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
