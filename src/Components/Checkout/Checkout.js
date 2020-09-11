import React from "react";
import classes from "./Checkout.module.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../Store/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  const checkedOutItems = basket.map((item, idx) => {
    return (
      <CheckoutProduct
        key={`chkItem__${idx}`}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
      />
    );
  });
  return (
    <div className={classes.Checkout}>
      <div className={classes.Checkout__left}>
        <img
          className={classes.Checkout__ad}
          src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816xK5jQkmW.jpg"
          alt=""
        />
        <div>
          <h3 className={classes.Checkout__title}>
            {user ? "Hello " + user.email : null}
          </h3>
          <h2 className={classes.Checkout__title}>Your Shopping Basket</h2>
          {checkedOutItems}
        </div>
      </div>
      <div className={classes.Checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
