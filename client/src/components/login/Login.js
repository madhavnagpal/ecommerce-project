import React, { useState, useRef } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleLogin(e) {
    e.preventDefault();
    console.log("hey");
  }

  return (
    <div className="row mt-5">
      <div className="col-md-5 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">
            <i className="fas fa-sign-in-alt"></i> Login
          </h1>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                ref={emailRef}
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                ref={passwordRef}
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <button onClick={handleLogin} className="btn btn-primary btn-block">
              Login
            </button>
          </form>
          <p className="lead mt-4">
            No Account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}
