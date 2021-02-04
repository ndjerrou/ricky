import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

import "../styles/login.css";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/characters";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <div id="containerLogin">
      <h3>Log in to get access</h3>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Log In</button>
      </form>
      <p>
        <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup"}>
          Don't have an account ? Click here
        </Link>
      </p>
    </div>
  );
};

export default LoginScreen;
