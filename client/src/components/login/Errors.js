import React from "react";

function ErrorItem({ error }) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {error.msg}
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

export default function Errors({ errors }) {
  return (
    <div>
      {errors.map((error) => {
        return <ErrorItem key={error.msg} error={error} />;
      })}
    </div>
  );
}
