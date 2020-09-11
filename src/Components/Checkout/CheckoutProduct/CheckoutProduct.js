import React from "react";
import classes from "./CheckoutProduct.module.css";
import { useStateValue } from "../../../Store/StateProvider";

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={classes.CheckoutProduct}>
      <img className={classes.CheckoutProduct__image} src={image} alt="" />
      <div className={classes.CheckoutProduct__info}>
        <p className={classes.CheckoutProduct__title}>{title}</p>
        <p className={classes.CheckoutProduct__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.CheckoutProduct__rating}>
          {Array(rating)
            .fill()
            .map((_, idx) => (
              <span key={idx} role="img" aria-labelledby="">
                ⭐
              </span>
            ))}
        </div>
        {/* some flip animations react-flip-move */}
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
