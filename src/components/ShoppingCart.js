import React from "react";
// import ShoppingCartContainer from "./ShoppingCartContainer";

const ShoppingCart = ({ cartItems, removeItems }) => {
  return (
    <div className="shoppingCart">
      {cartItems.map((item) => (
        <div key={item.id} className="cardRow">
          <div className="cardImg">
            <p>X{item.cartCount} </p>
            <img src={item.img} alt="shoe" />
          </div>
          <div className="cardPrice">
            <p>{item.price}$</p>
            <i
              onClick={() => removeItems(item.id)}
              className="fas fa-times"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
