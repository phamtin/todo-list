import React, { useState } from "react";
import { connect } from "react-redux";

import { auth } from "../../redux/auth/auth.action";
import "./login.scss";

const Login = ({ onSignin }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onInputChange = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onLogin = e => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Empty email and password");
    }
    onSignin(email, password);
  };

  return (
    <div className="login">
      <h2>Welcome</h2>
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={onInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onInputChange}
        />
        <button type="submit" onClick={onLogin}>
          SIGNIN
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onSignin: (email, pasword) => dispatch(auth(email, pasword))
});

export default connect(null, mapDispatchToProps)(Login);
