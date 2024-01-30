import React, { useState } from "react";
import "./Card.css";

const Card = ({ cardResults: { name, image, type, brandName, price, storeName } }) => {
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
        alt={name}
        src={image}
        className="card-image"
      ></img>
      <p>Type: {type}</p>
      <p>Brand: {brandName}</p>
    </div>
  );
}


export default Card;