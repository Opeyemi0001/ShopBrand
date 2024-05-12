import React from "react";
import './Subcribe.css'
import email from '../../assets/Homepage/emailIcon.png'

const Subcribe = () => {
  return (
    <div className="subscribe">
      <div className="subcribe-content">
        <h1>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
        <form className="subcribe-inputs">
          <div className="subcribe-email">
            <img src={email} alt="" />
            <input
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <button>Subcribe to Newsletter</button>
        </form>
      </div>
    </div>
  );
};

export default Subcribe;
