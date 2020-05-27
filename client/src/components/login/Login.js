import React, { useState, useRef } from "react";
import Errors from "./Errors";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState([]);

  function handleLogin(e) {
    e.preventDefault();
    let email = emailRef.current.value,
      password = passwordRef.current.value;

    let allErrors = [];

    //fill all the fields
    if (!email || !password) {
      allErrors = [...allErrors, { msg: "please fill all the fields !" }];
    }

    //email validation
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      allErrors = [...allErrors, { msg: "please enter a valid email" }];
    }
    setErrors(allErrors);

    if (allErrors.length > 0) {
      return;
    } else {
      console.log("pass");
      return;
    }
  }

  return (
    <div className="row mt-5">
      <div className="col-md-5 m-auto">
        <div className="card card-body">
          <Errors errors={errors} />
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
