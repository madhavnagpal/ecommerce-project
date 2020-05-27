import React from "react";
import { useHistory } from "react-router-dom";

export default function Logout({ loggedInStatus, setLoginStatus }) {
  const history = useHistory();

  function handleLogout(e) {
    setLoginStatus({
      isLoggedIn: false,
      name: "Guest",
    });
    localStorage.setItem("loggedIn", null);
    history.push("/");
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mx-auto border rounded">
          <h1>Welcome {loggedInStatus.name} !</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
