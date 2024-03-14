import { useState } from "react";
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
        <NavLink to='/'>
        <img src="/logo.png" alt=""  className={style.logo} />
        </NavLink>
        
      </div>
      <div className={style.nav}>
        <ul>
          <li><NavLink to='/'>HOME</NavLink></li>
          <li><NavLink to='/products'>PRODUCTS</NavLink></li>
          <li className={style.basket}>
            <a
              href=""
              className="fa-solid fa-basket-shopping"
              onClick={toggleBasketVisibility}
            ></a>
            <div className={style.basketcount} onClick={toggleBasketVisibility}>
                  {cartItems.length}
            </div>
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
