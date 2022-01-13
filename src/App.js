import logo from "./logo.svg";
import "bulma/css/bulma.min.css";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./components/Home";
import Saved from "./components/Saved";

import WallE from "./assets/Walle.png";

var qs = require("qs");

function App() {
  const [ImageData, setImageData] = useState(null);
  const tab = useLocation().pathname;

  return (
    <>
      <div className="bg-cover"></div>
      <div className="App">
        <h1 className="App-title">WALL-E's Days on Mars</h1>
        <div className="columns">
          <div className="column vert-center">
            <p>
              Our friendly and social robot WALL-E has somehow ended up on Mars.
              I suppose no one told him Elon Musk is still years away from
              colonizing Mars. As a result, our buddy WALL-E has been feeling
              pretty lonely.However, WALL-E never gives up hope, so, he has
              decided to take photos of Mars and send them back to Earth in
              hopes of getting likes to become the most popular internet
              "influencer" on Mars! With so much alone time, he has also been
              posting inspiration quotes to gives his fans something to think
              about!
            </p>
          </div>
          <div className="column is-one-quarter">
            <img src={WallE} />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home data={ImageData} />} />
          <Route path="/liked" element={<Saved />} />
        </Routes>
        <div className="home-sidebar-inner-wrapper mobile-home-sidebar">
          <Link
            className={
              tab === "/"
                ? "home-sidebar-item home-sidebar-item-active"
                : "home-sidebar-item"
            }
            to="/"
          >
            <div className="home-sidebar-item-icon">
              <i class="far fa-compass"></i>
            </div>
            <div className="home-sidebar-item-text"> Explore</div>{" "}
          </Link>
          <Link
            className={
              tab === "/liked"
                ? "home-sidebar-item home-sidebar-item-active"
                : "home-sidebar-item"
            }
            to="/liked"
          >
            <div className="home-sidebar-item-icon">
              <i class="fas fa-heart"></i>
            </div>
            <div className="home-sidebar-item-text">Liked</div>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
