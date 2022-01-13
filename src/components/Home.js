import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const API_NASA_KEY = "MWttLdgJUmSHklgbCWqb39euhWttIwDoF51inE7j";

const Home = () => {
  const [NumItems, setNumItems] = useState(9);
  const [Quotes, setQuotes] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Date, setDate] = useState("2020-01-03");
  const [ImageData, setImageData] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuotes(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setImageData(null);
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${Date}&api_key=${API_NASA_KEY}`
      )
      .then(function (response) {
        // handle success
        console.log(response);

        setImageData(response.data.photos);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [Date]);

  const [LikedImgs, setLikedImgs] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("likedImgs")) {
      localStorage.setItem("likedImgs", JSON.stringify({ imgs: [] }));
    }

    setLikedImgs(JSON.parse(localStorage.getItem("likedImgs")).imgs);
  }, [localStorage]);

  return (
    <div>
      <h1 className="App-subtitle">View Latest Photos</h1>
      <div className="date-wrapper">
        <input
          type="date"
          value={Date}
          min="2016-01-01"
          max="2021-12-31"
          onChange={(e) => setDate(e.target.value)}
          className="date-picker"
        ></input>
      </div>

      <div className="columns is-multiline">
        {ImageData && Array.isArray(ImageData)
          ? ImageData.slice(0, NumItems).map((card_data, i) => (
              <Card
                img={card_data}
                key={i}
                quote={
                  Quotes
                    ? Quotes[Math.floor(Math.random() * Quotes.length)]
                    : null
                }
              />
            ))
          : "Error: Unable to fetch data"}
      </div>

      {ImageData && ImageData.length > NumItems ? (
        <button
          onClick={() => setNumItems(NumItems + 9)}
          className="button is-info is-fullwidth"
        >
          Load More Photos
        </button>
      ) : null}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
