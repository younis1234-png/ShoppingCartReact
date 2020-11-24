import React from "react";
import Container from "./resuableaComponents/Container";

const Nav = ({ hiddenMenu, setHiddenMenu, itemCount }) => {
  return (
    <nav>
      <Container>
        <h2>
          Shoes <span>.</span>
        </h2>
        <div onClick={() => setHiddenMenu(!hiddenMenu)} className="menuWrapper">
          <i
            className={
              hiddenMenu ? "fas fa-times fa-lg" : "fas fa-shopping-cart fa-lg"
            }
          ></i>
          <p>{itemCount > 0 && itemCount}</p>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
