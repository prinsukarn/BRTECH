import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img className="pr-2 d-flex align-self-center" src={props.src} />
      </div>
      <div className="card-body">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
