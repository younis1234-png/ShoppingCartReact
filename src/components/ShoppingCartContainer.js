import React from "react";
import ShoppingCart from "./ShoppingCart";
import TotalPrice from "./TotalPrice";

const ShoppingCartContainer = (props) => {
  const { hiddenMenu, cartItems, totalPrice, itemCount, removeItems } = props;

  return (
    <div className={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>
      <ShoppingCart removeItems={removeItems} cartItems={cartItems} />
      <TotalPrice totalPrice={totalPrice} itemCount={itemCount} />
    </div>
  );
};

export default ShoppingCartContainer;
