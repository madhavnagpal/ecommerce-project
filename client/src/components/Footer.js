import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="text-light" style={gradStyle}>
        <h2>footer</h2>
        <h2>footer</h2>
      </div>
    );
  }
}
const gradStyle = {
  color: "white",
  backgroundColor: "#00909e",
};
export default Footer;
