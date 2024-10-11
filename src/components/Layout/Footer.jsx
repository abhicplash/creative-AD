import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <div className="footer-above">
        <h4>creative Signature Advertisement</h4>
        <div className="foot-contact">
          <h1>Let`s create something</h1>
          <button>Contact Us</button>
        </div>
      </div> */}
      <div className="footer-info">
        <div className="FooterDetils">
          <img src={logo} alt="" />
          <p className="footer-para">
            Unlock Your Brand's Potential with Creative Signature Advertisement,
            Sharjah & Dubai's Leading Advertising Agency
          </p>
          <div className="footer-icons">
            <FaLocationDot /> sharjah, UAE
          </div>
          <div className="footer-icons">
            <FaPhoneAlt /> +971-542411778
          </div>
        </div>
        <div className="footer-services">
          <h3>Services</h3>
          <div className="footer-services-list">
            <div>service 1</div>
            <div>service 1</div>
            <div>service 1</div>
            <div>service 1</div>
            <div>service 1</div>
          </div>
        </div>
        <div className="footer-services">
          <h3>Useful Links</h3>
          <div className="footer-services-list">
            <div>Home</div>
            <div>About us</div>
            <div>services</div>
            <div>Contact us</div>
          </div>
        </div>
        <div className="footer-social-services">
          <h3>Reach us on</h3>
          <div className="footer-social">
            <FaInstagram />
            <FaFacebookSquare />
            <FaXTwitter />
            <FaEnvelope />
          </div>
          <div className="foot-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4807692631907!2d55.45146337538489!3d25.28804647765264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f412cb0e429%3A0xed35b9274ab0422d!2sCreative%20Signature%20Advertisement!5e0!3m2!1sen!2sin!4v1728496944270!5m2!1sen!2sin"
              title="map"
              className="footer-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
