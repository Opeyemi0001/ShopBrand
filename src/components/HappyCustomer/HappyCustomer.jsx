import React from "react";
import "./HappyCustomer.css";
import arrowRight from "../../assets/Homepage/arrow-down-bold 1.png";
import arrowLeft from "../../assets/Homepage/arrow-down-bold 2.png";
import starReview from "../../assets/Homepage/starreview.png";
import nameTick from "../../assets/Homepage/nametick.png";

const HappyCustomer = () => {
  return (
    <div className="happycustomer">
      <div className="happycustomer-content">
        <div className="happycustomer-header">
          <h3>OUR HAPPY CUSTOMERS</h3>
          <div className="arrows">
            <img className="arrow" src={arrowLeft} alt="" />
            <img className="arrow" src={arrowRight} alt="" />
          </div>
        </div>

        <div className="happycustomer-reviews">
          <div className="happycustomer-review one">
            <img src={starReview} alt="" />
            <h4>
              Sarah M. <img src={nameTick} alt="" />{" "}
            </h4>
            <p>
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
          <div className="happycustomer-review two">
            <img src={starReview} alt="" />
            <h4>
              Sarah K. <img src={nameTick} alt="" />{" "}
            </h4>
            <p>
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
          <div className="happycustomer-review three">
            <img src={starReview} alt="" />
            <h4>
              Alex K. <img src={nameTick} alt="" />{" "}
            </h4>
            <p>
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
          </div>
          <div className="happycustomer-review four">
            <img src={starReview} alt="" />
            <h4>
              James L. <img src={nameTick} alt="" />{" "}
            </h4>
            <p>
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
            </p>
          </div>
          <div className="happycustomer-review five">
            <img src={starReview} alt="" />
            <h4>
              Mooen K.
              <img src={nameTick} alt="" />{" "}
            </h4>
            <p>
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
