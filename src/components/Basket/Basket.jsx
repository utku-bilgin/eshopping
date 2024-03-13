import style from './Basket.module.css';
import { useBasketContext } from '../../contex/BasketContext';

const Basket = () => {
  const { cartItems, clearBasket } = useBasketContext();

  const handleBuyNow = () => {
    clearBasket();
  };

  const totalPrice = cartItems.reduce((total, product) => total + product.price, 0);

  return (
    <div className={style.basket}>
      <h2>Your Basket</h2>
      {cartItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul className={style.basketcontainer}>
          {cartItems.map((product, index) => (
            <li key={index} className={style.list}>
              <img
                  src={product.thumbnail}
                  alt={product.thumbnail}
                  className={style.image}
                />
              <h3 className={style.title}>{product.title}</h3>
              <h4 className={style.price}>${product.price}</h4>
            </li>
          ))}
        </ul>
      )}
      <div className={style.totalPrice}>
        <h2>
          TOTAL PRİCE: ${totalPrice}
        </h2>
        <button className={style.buyNow} onClick={handleBuyNow}>BUY NOW</button>
      </div>
    </div>
  );
};

export default Basket;
