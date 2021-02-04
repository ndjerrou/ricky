import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

import "../styles/login.css";
import Message from "../components/Message";

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

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
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(email, password));
    }
  };

  return (
    <div id="containerLogin">
      <h3>Sign UP</h3>
      {message && <Message>{message}</Message>}
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <form onSubmit={handleFormSubmit}>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm your password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button>Create my account</button>
      </form>
      <p>
        Have an account ?
        <Link to={register ? `/signin?redirect=${redirect}` : "/signin"}>
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterScreen;
