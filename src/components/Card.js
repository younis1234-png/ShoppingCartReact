import React from "react";
import CardBg from "./CardBg";
import CardInfo from "./CardInfo";
import ShowData from "./shoeData";

const Card = ({ updateCart }) => {
  return (
    <>
      {ShowData.map((shoe, index) => (
        <div key={index} className="card">
          <CardBg shoeImg={shoe.cardImg} />
          <CardInfo
            updateCart={() => updateCart(shoe.cardImg, shoe.cardPrice)}
            shoePrice={shoe.cardPrice}
          />
        </div>
      ))}
    </>
  );
};

export default Card;
