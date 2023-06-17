import React from "react";
import Card from "./Card";
import webd from "../assets/img/webdevelopment.svg";

export const Services = () => {
  return (
    <div className="container-fluid services">
      <div className="service-head">
        <span>Technology Solutions</span>
        <h2>Build Audience And Grow Your Business</h2>
        <p>
          Our team of energetic and experienced professionals is here to assist
          you build your brand.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <Card
            src={webd}
            title="Web Development"
            description="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendauctor nisi el."
          />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <Card
            src={webd}
            title="Graphic Design"
            description="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendauctor nisi el."
          />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <Card
            src={webd}
            title="Content Writing"
            description="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendauctor nisi el."
          />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <Card
            src={webd}
            title="Digital Marketing"
            description="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendauctor nisi el."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
