import React from "react";
import "./showcase.css";

export default function Showcase() {
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
