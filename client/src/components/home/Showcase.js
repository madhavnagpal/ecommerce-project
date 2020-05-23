import React, { Component } from "react";

export class Showcase extends Component {
  render() {
    return (
      <div>
        <section style={parallaxStyle}></section>
        <div style={overlay}></div>
        <div style={textOverlay}>
          There are some things <br />
          money can't buy. <br />
          For everything else,
          <br /> We are here ...
        </div>
      </div>
    );
  }
}

const parallaxStyle = {
  width: "100%",
  height: "100vh",
  background: "url('/media/two-20.jpg')",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  zIndex: "1",
};
const overlay = {
  width: "100%",
  height: "111vh",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "2",
  backgroundColor: "rgb(0,0,255,0.5)",
};
const textOverlay = {
  position: "absolute",
  bottom: "50px",
  right: "50px",
  color: "white",
  fontSize: "2rem",
  zIndex: "4",
};

export default Showcase;
