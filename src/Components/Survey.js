import React, { Component } from "react";

class Survey extends Component {
  render() {
    return (
      <div class="survey">
        <div class="data">
          <div className="numers">
            <p className="num">78,700</p>
            <p>
              customers in over <b>120</b> countries growing their businesses with HubSpot
            </p>
          </div>
          <img src="./surveys.png" alt="survey" loading="lazy" className="surveys" />
          <img src="./surveyMobile.png" alt="survey" loading="lazy" className="surveyMobile" />
        </div>
        <div className="welcome">
          <div className="join">
            <p className="num">Start Growing With HubSpot Today</p>
            <p>
              With tools to make every part of your process more human and a support team excited to
              help you, getting started with inbound has never been easier.
            </p>

            <button>Get HubSpot Free</button>
          </div>
          <div className="smile">
            <img src="./smile.png" alt="smile" loading="lazy" />
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
