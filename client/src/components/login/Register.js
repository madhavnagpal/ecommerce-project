import React, { useState, useRef } from "react";
import Errors from "./Errors";
import Message from "./Message";
import axios from "axios";

export default function Register() {
  //inputs
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  //states
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState("");

  function handelRegistration(e) {
    e.preventDefault();

    let allErrors = [];
    setMessage("");
    setErrors(allErrors);
    //getting input values
    let username = usernameRef.current.value,
      email = emailRef.current.value,
      password = passwordRef.current.value,
      password2 = password2Ref.current.value;

    //fill all the fields
    if (!username || !email || !password || !password2) {
      allErrors = [...allErrors, { msg: "please fill all the fields !" }];
    }
    //passwords not matched
    if (password !== password2) {
      allErrors = [...allErrors, { msg: "passwords not matched" }];
    }
    //password length >6
    if (password.length < 6) {
      allErrors = [
        ...allErrors,
        { msg: "passwords must be minimum 6 character long" },
      ];
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
      axios
        .post("/user/register", {
          username,
          email,
          password,
        })
        .then((res) => {
          let msg;
          if (res.data.isRegistered) {
            msg = "You have successfully registered, Now you can login";
          } else {
            msg = "This email has already been registered...";
          }
          setMessage(msg);
          usernameRef.current.value = "";
          emailRef.current.value = "";
          passwordRef.current.value = "";
          password2Ref.current.value = "";
        })
        .catch((e) => console.log(e));

      return;
    }
  }

  return (
    <div className="row my-5">
      <div className="col-md-6 col-lg-5 m-auto">
        <div className="card card-body">
          <Errors errors={errors} />
          <Message message={message} />
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
