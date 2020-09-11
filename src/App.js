import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Store/StateProvider";

const App = () => {
  const [, dispatch] = useStateValue();
  // listerner for someone is signin or not
  useEffect(() => {
    // This return the authenticated user
    auth.onAuthStateChanged((authUser) => {
      // console.log("authenticatedUser: ", authUser);
      if (authUser) {
        // dispatch action when logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // dispatch action when logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
