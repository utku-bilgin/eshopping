import React from "react";
import style from "./PopulerProducts.module.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useProductContext } from '../../contex/ProductContext.jsx';

const PopulerProducts = () => {
  const { products } = useProductContext();

  return (
    <div className={style.PopularProducts}>
      <h1><i className="fa-solid fa-star"></i> Popular Products</h1>
      <div className={style.PopularProductsList}>
        {products.map((product) => (
            <ProductCard className={style.card} product={product} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PopulerProducts;
