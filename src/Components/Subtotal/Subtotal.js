import React from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div className={classes.Subtotal}>
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal: 0 items:
                <strong>0</strong>
              </p>
              <small className={classes.Subtotal__gift}>
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={classes.Subtotal__button}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
