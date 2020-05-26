import React, { Component } from "react";

class Analytics extends Component {
  render() {
    const numbers = [
      {
        text: "150+",
        desc: "HubSpot user groups",
      },
      {
        text: "7M+",
        desc: "Monthly Visits",
      },
      {
        text: "248K+",
        desc: "Certified Professionals",
      },
      {
        text: "26K+",
        desc: "Registered Attendees",
      },
      {
        text: "400+",
        desc: "Integrations",
      },
      {
        text: "6",
        desc: "Languages",
      },
      {
        text: "2.6M+",
        desc: "Social Followers",
      },
      {
        text: "5K+",
        desc: "Profiles and Counting",
      },
    ];
    return (
      <div className="analytics">
        <h2>Learn and grow with award-winning support and a thriving community behind you.</h2>
        <p>
          You don't have to go it alone. Master the inbound methodology and get the most out of your
          tools with HubSpot's legendary customer support team and a community of thousands of
          marketing and sales pros just like you.
        </p>
        <div className="numbers">
          {numbers.map((number) => (
            <div className="numberContainer">
              <p className="num">{number.text}</p>
              <p className="desc">{number.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Analytics;
