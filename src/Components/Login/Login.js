import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Login.module.css";
import { auth } from "../../firebase";

const Login = () => {
  // change the url with useHistory
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // Firebase sign in codes
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => console.log(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // firebase register codes
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={classes.Login}>
      <Link to="/">
        <img
          className={classes.Login__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="logo"
        />
      </Link>
      <div className={classes.Login__container}>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={classes.Login__signinBtn}
            onClick={signIn}
          >
            Sign in
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest's Bases
          Ads
        </p>
        <button className={classes.Login__registerBtn} onClick={register}>
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default Login;
