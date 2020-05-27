import React from "react";

function ErrorItem({ error }) {
  return (
    <div className="alert alert-danger " role="alert">
      {error.msg}
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
