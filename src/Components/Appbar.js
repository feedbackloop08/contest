import React, { Component } from "react";

class Appbar extends Component {
  render() {
    const linkNames = ["Software", "Pricing", "Resources", "Partners", "About"];
    return (
      <div className="appbar">
        <div className="appTitle">HubSpot</div>
        <div className="mobileNav">
          <button>-</button>
        </div>
        <div className="navigation">
          {linkNames.map((link, index) => (
            <span className="link" onMouseEnter={() => console.log(link)} key={index}>
              {link}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Appbar;
