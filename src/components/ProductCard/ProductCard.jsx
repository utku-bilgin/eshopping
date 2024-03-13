import style from "./ProductCard.module.css";
import { useBasketContext } from '../../contex/BasketContext';
import { Link } from "react-router-dom";

const ProductCard = (product) => {
     const { addToCart } = useBasketContext();

    const handleClick = () => {
        addToCart(product)
    }


  return (
    <div className={style.card}>
        <Link key={product.id} to={`/product/${product.id}`}>
        <div>
            <img src={product.thumbnail} alt={product.title} className={style.image}/>
        </div>
        <div className={style.productinfo}>
            <div className={style.carditem}>
                <h4>Ürün Adı :</h4>
                <h4>{product.title}</h4>
            </div>
            <div className={style.carditem}>
                <h4>Information :</h4>
                <h4>{product.description}</h4>
            </div>
            <div className={`${style.price}`}>
                <h4>Price : </h4>
                <h4>${product.price}</h4>
            </div>
        </div>
        </Link>
        <div>
        
            <button onClick={handleClick} className={style.btn}>
                Sepete Ekle
            </button>
        </div>
    </div>
  )
}

export default ProductCard
