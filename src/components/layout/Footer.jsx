import React from "react";

// STYLES
import "../../styles/footer.css";

// ICONS
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerInner container">
        <div className="footerContainerLeft">
          <img
            className="footerLogo"
            src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/logo.png"
            alt=""
          />
          <div className="followContainer">
            <p>Follow Us On</p>
            <BsFacebook className="footerSocialIcon" />
            <FaTwitter className="footerSocialIcon" />
            <FaYoutube className="footerSocialIcon" />
          </div>
          <div className="footerLinksContainer">
            <ul className="footerLinksContainerInner">
              <li className="footerLink">HOME</li>
              <li className="footerLink">WHAT IS RENTAFRIEND</li>
              <li className="footerLink">FIND A FRIEND</li>
              <li className="footerLink">SIGN IN</li>
            </ul>
            <ul className="footerLinksContainerInner">
              <li className="footerLink">SIGNUP</li>
              <li className="footerLink">TESTIMONIALS</li>
              <li className="footerLink">ACTIVITIES</li>
              <li className="footerLink">BLOG</li>
              <li className="footerLink">PRESS</li>
              <li className="footerLink">FAQS</li>
              <li className="footerLink">CONTACT</li>
            </ul>
          </div>
        </div>
        <div className="footerContainerRigth">
          <div className="newsLetterContainer">
            <p className="joinNewsletterHeading">JOIN OUR NEWSLETTER</p>
            <p className="joinNewsletterText">
              Signup to receive our monthly newsletter to stay informed of new
              changes and updates.{" "}
            </p>
            <div className="footerInputContainer">
              <input
                type="email"
                placeholder="Email Address"
                className="footerEmail"
              />
              <button className="footerSubscribeButton">Subscribe</button>
            </div>
          </div>
          <p className="clickToBecomeFriend">
            CLICK HERE TO BECOME A FRIEND AND GET PAID
          </p>
        </div>
      </div>
      <div className="footerCopyrights">
        <p>
          Copyright © 2023 <span>RentAFriend.com</span> | All Rights Reserved.{" "}
        </p>
        <p>
          {" "}
          Use of this site constitutes acceptance of our{" "}
          <span>Terms & Conditions</span> & our <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
