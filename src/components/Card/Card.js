import React, { useState } from "react";
import "./Card.css";

function Card({ cardResults: { name, image, type, brandName, price, storeName } }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  };

  return (
    <div className="card" style={{ borderColor: clicked ? '#333' : '#ccc' }} onClick={handleClick}>
      {clicked && (
        <div>
          <p>Price: {price}</p>
          <p>Store: {storeName}</p>
        </div>
      )}
      <h1 className="card-title">{name}</h1>
      <img
        alt="alt"
        src={image}
        style={{ maxWidth: 100, maxHeight: "auto" }}
      ></img>
      <p>Type: {type}</p>
      <p>Brand: {brandName}</p>
    </div>
  );
}


export default Card;