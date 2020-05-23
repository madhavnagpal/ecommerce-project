import React, { Component } from "react";

export class Showcase extends Component {
  render() {
    return <section style={parallaxStyle}></section>;
  }
}
const parallaxStyle = {
  background: "url('/media/three.jpg')",
  width: "100%",
  height: "90vh",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

export default Showcase;
