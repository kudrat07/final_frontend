import React from "react";
import "./Footer.css";
import AppLogo from "../../assets/app-logo.png";
import playStoreLogo from "../../assets/google-play-logo.png"
import FacebookLogo from "../../assets/Facebook.png";
import TikTokLogo from "../../assets/TikTok.png";
import SnapchatLogo from "../../assets/Snapchat.png";
import InstagramLogo from "../../assets/Instagram.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-rows">
          <div className="footer-row--first">
            <img src={AppLogo} alt="app logo icon" className="app-logo" />
            <div className="footer-img--container">
              
              <img
                className="footer-img"
                src={playStoreLogo}
                alt="google play loog"
              />
            </div>
            <p className="first-row--para">
              Company # 490039-445, Registered withHouse of companies.
            </p>
          </div>
          <div className="row footer-row--second">
            <p className="footer-para footer-second--row--para">
              Get Exclusive Deals in your Inbox
            </p>
            <div className="footer-input--wrapper">
              <input
                className="footer-input"
                type="text"
                placeholder="youremail@gmail.com"
              />
              <button className="footer-btn">Subscribe</button>
            </div>
            <p className="footer-spam--text">
              we wont spam, read our email policy
            </p>
            <div className="footer-icons">
              <img className="icon" src={FacebookLogo} alt="" />
              <img className="icon" src={InstagramLogo} alt="" />
              <img className="icon" src={TikTokLogo} alt="" />
              <img className="icon" src={SnapchatLogo} alt="" />
            </div>
          </div>
          <div className="row footer-row--third third">
            <p className="third-row--title">Legal Pages</p>
            <p className="footer-pages">Terms and conditions</p>
            <p className="footer-pages">Privacy</p>
            <p className="footer-pages">Cookies</p>
            <p className="footer-pages">Modern Slavery Statement</p>
          </div>
          <div className="row footer-row--fourth">
            <p className="third-row--title">Important Links</p>
            <p className="footer-pages">Get help</p>
            <p className="footer-pages">Add your restaurrant</p>
            <p className="footer-pages">Sign upto deliver</p>
            <p className="footer-pages">Create a business account</p>
          </div>
        </div>
      </div>
      <div className="last-footer">
      <div className="last-footer--wrapper">
        <div className="first-item">
          <p className="last-footer--text">
            Order.uk Copyright 2024, All Rights Reserved.
          </p>
        </div>
        <div className="second-items">
        <p className="last-footer--text item">Privacy Policy</p>
        <p className="last-footer--text item">Terms</p>
        <p className="last-footer--text item">Pricing</p>
        <p className="last-footer--text item">
          Do not sell or share my personal information
        </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
