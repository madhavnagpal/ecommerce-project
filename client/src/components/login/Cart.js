import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { useHistory } from "react-router-dom";

export default function Cart() {
  const [loggedInStatus, setLoginStatus] = useContext(LoginContext);
  const history = useHistory();

  if (loggedInStatus.isLoggedIn) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto border rounded">
            <h1>Welcome {loggedInStatus.name} !</h1>
          </div>
        </div>
      </div>
    );
  } else {
    history.push("/login");
    return <></>;
  }
}
