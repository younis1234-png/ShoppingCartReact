import React from "react";
// import Card from "./Card";
import Button from "./resuableaComponents/Button";

const CardInfo = ({ shoePrice, updateCart }) => {
  return (
    <div className="cardInfo">
      <p>${shoePrice}</p>
      <Button addItem={updateCart} />
    </div>
  );
};

export default CardInfo;
