import React from "react";

const Card = (props) => {
  if (!props.content) {
    return "";
  }
  return (
    <div className="card">
      <h2 className="cardTitle">{props.title}</h2>
      <p className="cardSubtitle">{props.subTitle}</p>
      <hr className="divider" />

      <div className="cardContent">
        <p>POPULAR FEATURES</p>{" "}
        {props.content.map((el, index) => {
          return (
            <p className="features">
              <img src="./tick.svg" alt="check" className="icon" />
              {el}
            </p>
          );
        })}
      </div>
      <button className="button">{props.action}</button>
    </div>
  );
};

export default Card;
