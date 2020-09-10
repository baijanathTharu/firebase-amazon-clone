import React from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Store/StateProvider";

const Subtotal = () => {
  const [{ basket, totalPrice }] = useStateValue();

  return (
    <div className={classes.Subtotal}>
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal: ({basket.length} items)
                <strong style={{ paddingLeft: "5px" }}>{value}</strong>
              </p>
              <small className={classes.Subtotal__gift}>
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={classes.Subtotal__button}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
