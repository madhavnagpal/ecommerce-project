import React from "react";

export default function Message({ message }) {
  if (message == "") {
    return <></>;
  } else {
    return (
      <div className="alert alert-success " role="alert">
        <strong>{message}</strong>
      </div>
    );
  }
}
