import React, { Component } from "react";
import "./showcase.css";
export class Showcase extends Component {
  render() {
    return (
      <div className="parentDiv">
        <section className="parallaxStyle"></section>
        <div className="overlay"></div>
        <div className="textOverlay">
          There are some things <br />
          money can't buy. <br />
          For everything else,
          <br /> We are here ...
        </div>
      </div>
    );
  }
}

export default Showcase;
