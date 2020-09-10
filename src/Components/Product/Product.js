import React from "react";
import classes from "./Product.module.css";
import { useStateValue } from "../../Store/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ totalPrice }, dispatch] = useStateValue();
  // console.log("Basket>>> ", basket);
  // dispatch an action to push data to the data layer (store)
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      totalPrice: +totalPrice + +price,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className={classes.Product}>
      <div className={classes.Product__info}>
        <p>{title}</p>
        <p className={classes.Product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.Product__rating}>
          {Array(rating)
            .fill()
            .map((_, idx) => {
              return (
                <span key={idx} role="img" aria-labelledby="">
                  ⭐
                </span>
              );
            })}
        </div>
      </div>
      <img className={classes.Product__image} src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
