import React from "react";

import bg from "../assets/img/hero1.svg";

export const Hero = () => {
  return (
    <div className="container process hero">
      <div className="overlay">
        <div className="row">
          <div className="col-md-6 hero-col">
            <div className="hero-text my-5">
              <span>
                Do you have a business plan or already running a business?
              </span>

              <h3 className="my-3">
                We are here to technically support you in every step of your
                business.
              </h3>
            </div>

            <button className="btn btn-success">Contact Us</button>
          </div>

          <div className="col-md-6 hero-img">
            <img src={bg} alt="Hero image" />
          </div>
        </div>
      </div>
    </div>
  );
};
