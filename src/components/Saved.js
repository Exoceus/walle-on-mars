import React, { useState, useEffect } from "react";
import Card from "./Card";

const Saved = () => {
  const [LikedImgs, setLikedImgs] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("likedImgs")) {
      localStorage.setItem("likedImgs", JSON.stringify({ imgs: [] }));
    }

    setLikedImgs(JSON.parse(localStorage.getItem("likedImgs")).imgs);
  }, [localStorage]);

  const updateStorage = () => {
    console.log("updating");
    setLikedImgs(JSON.parse(localStorage.getItem("likedImgs")).imgs);
  };

  return (
    <div>
      <h1 className="App-subtitle">View Liked Photos</h1>
      <div className="columns is-multiline">
        {LikedImgs && Array.isArray(LikedImgs)
          ? LikedImgs.map((card_data, i) => (
              <Card
                img={card_data}
                key={i}
                likedImgId={LikedImgs ? LikedImgs.map((img) => img.id) : null}
                updateStorage={updateStorage}
              />
            ))
          : "Error: Unable to fetch data"}

        {LikedImgs && Array.isArray(LikedImgs) && LikedImgs.length === 0 ? (
          <h1 className="App-para">
            Go to the explore tab to like photos. Then, they will show up here.{" "}
          </h1>
        ) : null}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Saved;
