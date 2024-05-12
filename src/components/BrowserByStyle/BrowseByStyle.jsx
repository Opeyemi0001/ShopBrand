import React from "react";
import "./BrowseByStyle.css";
import casual from "../../assets/Homepage/casual.png";
import formal from "../../assets/Homepage/formal.png";
import Party from "../../assets/Homepage/party.png";
import gym from "../../assets/Homepage/gym.png";

const BrowseByStyle = () => {
  return (
    <div className="browsebystyle">
      <div className="browsebystyle-content">
        <h2>BROWSE BY DRESS STYLE</h2>

        <div className="browsebydressstyle-pictures">
          <div className="column">
            <div className="browsebydress-style one">
              <p className="text-overlay">Casual</p>
              <img src={casual} alt="" />
            </div>

            <div className="browsebydress-style two grid-col-span-2">
              <p className="text-overlay">Formal</p>
              <img src={formal} alt="" />
            </div>
          </div>

          <div className="column">
            <div className="browsebydress-style">
              <p className="text-overlay">Party</p>
              <img src={Party} alt="" />
            </div>
            <div className="browsebydress-style">
              <p className="text-overlay">Gym</p>
              <img src={gym} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByStyle;
