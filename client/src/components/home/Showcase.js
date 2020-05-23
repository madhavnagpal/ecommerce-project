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
  height: "90vh",
  background: "url('/media/two-20.jpg')",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  zIndex: "1",
};
const overlay = {
  width: "100%",
  height: "101vh",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "2",
  backgroundColor: "rgb(0,0,255,0.3)",
};
const textOverlay = {
  position: "absolute",
  top: "300px",
  right: "10px",
  color: "#fff",
  fontSize: "1.4rem",
  zIndex: "4",
  padding: "20px",
  marginRight: "5%",
  backgroundColor: "#00909e",
  borderRadius: "10px",
};

export default Showcase;
