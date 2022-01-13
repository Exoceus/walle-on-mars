import React, { useState, useEffect } from "react";

function Card({ img, quote, likedImgId, updateStorage, tab }) {
  const [Liked, setLiked] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("likedImgs")) {
      localStorage.setItem("likedImgs", JSON.stringify({ imgs: [] }));
    }

    let IDs = JSON.parse(localStorage.getItem("likedImgs")).imgs.map(
      (img) => img.id
    );

    if (IDs.includes(img.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [localStorage]);

  const removeLiked = () => {
    console.log("removing", img.id);
    let likedImgs = JSON.parse(localStorage.getItem("likedImgs"));
    likedImgs.imgs = likedImgs.imgs.filter(
      (saved_img) => saved_img.id !== img.id
    );
    localStorage.setItem("likedImgs", JSON.stringify(likedImgs));
    if (updateStorage) {
      updateStorage();
    }
    setLiked(false);
  };

  const addLiked = () => {
    console.log("adding", img.id);
    let likedImgs = JSON.parse(localStorage.getItem("likedImgs"));
    likedImgs.imgs = likedImgs.imgs.filter(
      (saved_img) => saved_img.id !== img.id
    );
    likedImgs.imgs.push(img);
    localStorage.setItem("likedImgs", JSON.stringify(likedImgs));
    setLiked(true);
  };

  let quote_display = (
    <div>
      <p>
        "{quote ? quote.text : null}" -{" "}
        {quote && quote.author ? quote.author : "WALL-E"}
      </p>
      <br />
    </div>
  );
  return (
    <div className="column is-one-third">
      <div className="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={img.img_src} alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title">
            {img.rover.name} Rover's {img.camera.name}
          </p>
          {quote ? quote_display : null}
          <div>
            <i class="far fa-calendar-alt"></i>
            <time dateTime={img.earth_date}>
              {"  "} {img.earth_date}
            </time>
          </div>
          <br />
          <button
            class={
              Liked
                ? "button like-btn like-btn-active is-rounded is-fullwidth"
                : "button like-btn is-rounded is-outlined is-fullwidth"
            }
            onClick={() => {
              if (Liked === true) {
                removeLiked();
              } else if (Liked === false) {
                addLiked();
              }
            }}
          >
            {Liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
