import React, { Component } from "react";

class Topbar extends Component {
  state = {
    search: false,
  };

  textfield = () => {
    return (
      <input
        type="text"
        autoFocus
        name="search"
        placeholder="Search"
        className="searchBox"
        onBlur={() => this.setState({ search: false })}
      />
    );
  };
  searchIcon = () => {
    return (
      <img
        src="./search.svg"
        className="searchIcon"
        alt="Search"
        onClick={() => this.setState({ search: true })}
      />
    );
  };
  render() {
    const searchComponent = this.state.search ? this.textfield() : this.searchIcon();
    return (
      <div className="topbar">
        <div className="language">
          <span>English | </span>
          <span>Contact Sales</span>
        </div>
        <div className="functions">
          {searchComponent}
          <button>Log in</button>
          <button>Get HubSpot Free</button>
        </div>
      </div>
    );
  }
}

export default Topbar;
