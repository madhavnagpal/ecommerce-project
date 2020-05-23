import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="bg-dark text-light" style={gradStyle}>
        <h2>footer</h2>
        <h2>footer</h2>
      </div>
    );
  }
}
const gradStyle = {
  backgroundImage: "linear-gradient(90deg, 	#45046a,#95389e	)",
  color: "white",
};
export default Footer;
