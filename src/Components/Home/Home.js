import React from "react";
import classes from "./Home.module.css";

import BannerImage from "../../images/banner-nepazon.jpg";

import Product from "../Product/Product";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Home__container}>
        <img src={BannerImage} className={classes.Home__banner} alt="banner" />
        <div className={classes.Home__row}>
          <Product
            id="1"
            title="The Lean Startup"
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="The Lean Startup"
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={3}
          />
        </div>
        <div className={classes.Home__row}>
          <Product
            id="3"
            title="The Lean Startup"
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={2}
          />{" "}
          <Product
            id="4"
            title="The Lean Startup"
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />{" "}
          <Product
            id="5"
            title="The Lean Startup"
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
        </div>
        <div className={classes.Home__row}>
          <Product
            id="6"
            title="The Lean Startup"
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
