import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>BIG ON</h3>
            <h1>DATA SCIENCE AND AI</h1>
            <p>
              Empowering with your business with data science and AI technology
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
