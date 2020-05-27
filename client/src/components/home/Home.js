import React, { Component } from "react";
import Showcase from "./showcase/Showcase";
import Timeline from "./timeline/Timeline";
export class Home extends Component {
  render() {
    return (
      <div>
        <Showcase />
        <Timeline />
      </div>
    );
  }
}

export default Home;
