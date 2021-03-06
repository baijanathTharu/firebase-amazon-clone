import React from "react";
import classes from "./Header.module.css";
import amazonLogo from "../../images/amazon-logo-white.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Store/StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  // reducer
  const [{ basket, user }] = useStateValue();

  const authenticationHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className={classes.Header}>
      <Link to="/">
        <img
          className={classes.Header__logo}
          src={amazonLogo}
          alt="nepazon logo"
        />
      </Link>
      <div className={classes.Header__search}>
        <input className={classes.Header__searchInput} type="text" />
        <SearchIcon className={classes.Header__searchIcon} />
      </div>
      <div className={classes.Header__nav}>
        <Link to={!user ? "/login" : "/logout"}>
          <div
            className={classes.Header__option}
            onClick={authenticationHandler}
          >
            {/* show authenticated user email */}
            <span className={classes.Header__lineOne}>
              {user ? `Hello ${user.email}` : "Hello Guest"}
            </span>
            <span className={classes.Header__lineTwo}>
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={classes.Header__option}>
          <span className={classes.Header__lineOne}>Returns</span>
          <span className={classes.Header__lineTwo}>Orders</span>
        </div>
        <div className={classes.Header__option}>
          <span className={classes.Header__lineOne}>Your</span>
          <span className={classes.Header__lineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={classes.Header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={[
                classes.Header__lineTwo,
                classes.Header__basketCount,
              ].join(" ")}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
