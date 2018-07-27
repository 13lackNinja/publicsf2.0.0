import React from 'react'
import TypeLogo from './TypeLogo.js'
import ActionButton from './ActionButton.js'

import './styles/Footer.css'

import emailIcon from './images/email_icon.svg'
import facebookIcon from './images/facebook_icon.svg'
import instagramIcon from './images/instagram_icon.svg'
import twitterIcon from './images/twitter_icon.svg'

const Footer = () => (
  <div id="footer">
    <div className="footer-box" id="footer-about">
      <TypeLogo type="footer" />
      <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis elit vel dui mollis suscipit ac eu metus. </p>
      <p className="footer-text">Morbi vitae massa sit amet tellus malesuada ullamcorper quis sit amet tortor. Duis enim arcu, cursus vitae purus in, molestie ultrices dui.</p>
      <p className="footer-text" id="footer-address">161 Erie St<br />San Francisco, CA 94103</p>
    </div>
    <div className="footer-box" id="footer-nav">
      <h5 className="footer-title">Information</h5>
      <a className="footer-link" href="./connect">Connect</a>
      <a className="footer-link" href="./connect">FAQ</a>
      <a className="footer-link" href="./connect">Booking</a>
      <a className="footer-link" href="./corporate">Corporate</a>
    </div>
    <div className="footer-box" id="footer-socials">
      <h5 className="footer-title">Connect with us</h5>
      <div id="socials-flexbox">
        <img width="25px" className="social-icon" id="facebook-icon" src={facebookIcon} alt="facebook_icon.svg" />
        <img width="25px" className="social-icon" id="twitter-icon" src={twitterIcon} alt="twitter_icon.svg" />
        <img width="25px" className="social-icon" id="instagram-icon" src={instagramIcon} alt="instagram_icon.svg" />
        <img width="25px" className="social-icon" id="email-icon" src={emailIcon} alt="email_icon.svg" />
      </div>
      <h5 className="footer-title">Join the ranks</h5>
      <input id="footer-email-box" type="text" />
      <ActionButton
        color="white"
        text="submit"
        location="footer"
      />
    </div>
    <div id="footer-byline">
      <p id="copyright">&copy; 2018</p>
      <a id="by" href="http://13lackcloud.com">Developed by Jonathan Crawford</a>
    </div>
  </div>
)

export default Footer
