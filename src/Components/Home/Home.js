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
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="19.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price="372.95"
            image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
            rating={4}
          />
        </div>
        <div className={classes.Home__row}>
          <Product
            id="3"
            title="
            Laptop Monitor Mount Stand with Keyboard Tray, Adjustable Notebook Desk Mount with Clamp and Grommet Mounting Base for 13 to 27 Inch LCD Computer Screens Up..."
            price="49.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71sWNAnJ-OL._AC_SL1500_.jpg"
            rating={2}
          />{" "}
          <Product
            id="4"
            title="Webcam 1080p, Webcam with Microphone, 1080p Streaming Web Camera, USB Webcam Widescreen for Video Calling Recording, Computer Camera Flexible Rotatable Clip..."
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61nldAJUdRL._AC_SL1500_.jpg"
            rating={5}
          />{" "}
          <Product
            id="5"
            title="USB Streaming Podcast PC Microphone, SUDOTACK Professional 192kHz/24bit Studio Cardioid Condenser Mic Kit with Sound Card Boom Arm Shock Mount Pop Filter,.."
            price="56.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51CAHPUqbqL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className={classes.Home__row}>
          <Product
            id="6"
            title="
            Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI DisplayPort Up to 100Hz, Machine Black 2020 (C355W-3440UN)"
            price="379.00"
            image="https://images-na.ssl-images-amazon.com/images/I/71PUwKU2jaL._AC_SL1200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
