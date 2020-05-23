import React, { Component } from "react";
import "./timeline.css";

export class Timeline extends Component {
  render() {
    return (
      <ul className="timeline">
        <li>
          <span>1</span>
          <div className="content rounded-right">
            <span>Shop even easier</span>
            <p>Use your phone's camera to locate items with a single tap.</p>
          </div>
        </li>
        <li>
          <span>2</span>
          <div className="content rounded-right">
            <span>Track in real time</span>
            <p>
              Get notifications so you know exactly when your delivery will
              arrive
            </p>
          </div>
        </li>
        <li>
          <span>3</span>
          <div className="content rounded-right">
            <span>Chat with us</span>{" "}
            <p>
              Use the app's chat feature to easily connect with customer service
            </p>
          </div>
        </li>
      </ul>
    );
  }
}

export default Timeline;
