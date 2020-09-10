import React from "react";
import classes from "./Checkout.module.css";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  return (
    <div className={classes.Checkout}>
      <div className={classes.Checkout__left}>
        <img
          className={classes.Checkout__ad}
          src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816xK5jQkmW.jpg"
          alt=""
        />
        <div>
          <h2 className={classes.Checkout__title}>Your checkout list</h2>
          {/* Basket items */}
          {/* Basket items */}
          {/* Basket items */}
        </div>
      </div>
      <div className={classes.Checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
