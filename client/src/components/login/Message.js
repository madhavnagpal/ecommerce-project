import React from "react";

export default function Message({ message }) {
  if (message == "") {
    return <></>;
  } else {
    return (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{message}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
