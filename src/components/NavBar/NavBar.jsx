import React, { useState } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Basket from "../Basket/Basket";
import { useBasketContext } from '../../contex/BasketContext';

const NavBar = () => {
  const [basketVisible, setBasketVisible] = useState(false);
  const { cartItems } = useBasketContext();

  const toggleBasketVisibility = (e) => {
    e.preventDefault();
    setBasketVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className={style.navbar}>
      <div className={style.logoContainer}>
        <img src="/logo.png" alt="" className={style.logo} />
      </div>
      <div className={style.nav}>
        <ul>
          <li><NavLink to='/'>HOME</NavLink></li>
          <li><NavLink to='/products'>PRODUCTS</NavLink></li>
          <li>
            <a
              href=""
              className="fa-solid fa-basket-shopping"
              onClick={toggleBasketVisibility}
            ></a>
          </li>
        </ul>
      </div>
      <div className={`${style.basketBar} ${basketVisible ? style.visible : ""}`}>
        <Basket className={style.basket}/>
      </div>
    </div>
  );
};

export default NavBar;
