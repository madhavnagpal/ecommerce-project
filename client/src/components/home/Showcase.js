import React from "react";

export default function Showcase() {
  return (
    <div>
      <section style={parallaxStyle}></section>
      <div style={taglineStyle}>
        There are some things money can't buy. For everything else, We are here
        ...
      </div>
    </div>
  );
}
const taglineStyle = {
  background: "rgb(0,0,120)",
  width: "100%",
  textAlign: "center",
  padding: "20px",
  color: "white",
  fontSize: "1.5rem",
};
const parallaxStyle = {
  width: "100%",
  height: "70vh",
  background: "url(/media/two-20.jpg)",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  zIndex: "1",
};
