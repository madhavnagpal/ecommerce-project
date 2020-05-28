import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Errors from "./Errors";
import axios from "axios";

export default function Login({ setLoginStatus }) {
  //my lovely hooks
  const emailForm = useFormInput("");
  const passwordForm = useFormInput("");
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  function handleLogin(e) {
    e.preventDefault();
    const email = emailForm.value,
      password = passwordForm.value;

    let allErrors = formValidations(email, password);
    setErrors(allErrors);

    if (allErrors.length > 0) {
      return;
    } else {
      axios
        .post("/user/login", {
          email,
          password,
        })
        .then((res) => {
          const { emailFound, passwordMatched } = res.data;

          //logging in
          if (emailFound && passwordMatched) {
            setLoginStatus({
              isLoggedIn: true,
              name: res.data.username,
            });
            history.push("/logout");
          } else if (emailFound) {
            allErrors = [
              ...allErrors,
              { msg: "wrong password please try again..." },
            ];
            setErrors(allErrors);
          } else {
            allErrors = [
              ...allErrors,
              { msg: "this email is not registered, please register first" },
            ];
            setErrors(allErrors);
          }
        })
        .catch((e) => console.log(e));
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
                {...emailForm}
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...passwordForm}
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <button onClick={handleLogin} className="btn btn-danger btn-block">
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

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}

function formValidations(email, password) {
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
  return allErrors;
}
