import React, { useState, useRef } from "react";

export default function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  function handelRegistration(e) {
    e.preventDefault();
    console.log(usernameRef.current.value);
  }

  return (
    <div className="row my-5">
      <div className="col-md-5 m-auto">
        <div className="card card-body">
          <h1 className="text-center mb-3">
            <i className="fas fa-user-plus"></i> Register
          </h1>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                ref={usernameRef}
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
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
                placeholder="Create Password"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                ref={password2Ref}
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <button
              onClick={handelRegistration}
              className="btn btn-primary btn-block"
            >
              Register
            </button>
          </form>
          <p className="lead mt-4">
            Have An Account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
