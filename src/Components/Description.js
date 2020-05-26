import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="info">
          <h1 className="header">There's a better way to grow</h1>
          <p>
            Marketing, sales, and service software that helps your business grow without compromise.
            Because “good for the business” should also mean “good for the customer.”
          </p>
          <button>Get HubSpot Free</button>
          <p>Get started with FREE tools, and upgrade as you grow.</p>
        </div>
        <img src="./heroes.svg" alt="heroes" loading="lazy" className="heroes" />
        <img src="./heroMobile.svg" alt="heroes" className="heroMobile" />
      </div>
    );
  }
}

export default Description;
