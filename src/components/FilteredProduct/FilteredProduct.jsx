import React, { useState, useEffect } from "react";
import style from "./FilteredProduct.module.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useProductContext } from "../../contex/ProductContext.jsx";
import { useProductDetailContext } from "../../contex/ProductDetailContext.jsx";
import { Link } from "react-router-dom";

const FilteredProducts = () => {
  const { products, categories } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { fetchProductDetail } = useProductDetailContext();
  useEffect(() => {
    filterProducts();
  }, [selectedCategory, maxPrice, products]);

  const filterProducts = () => {
    const newFilteredProducts = products.filter((product) => {
      return (
        (selectedCategory ? product.category === selectedCategory : true) &&
        (maxPrice ? product.price <= maxPrice : true)
      );
    });

    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className={style.FilteredProducts}>
      <div className={style.filter}>
        <div>
          <h4>
            <i className="fa-solid fa-filter"></i> Filtered Products
          </h4>
        </div>
        <div className={style.category}>
          {/* Kategori seçimi */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={style.select}
          >
            <option value="">Tüm Kategoriler</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {console.log(categories)}

          {/* Fiyat filtresi */}
          <input
            type="number"
            placeholder="Max Fiyat"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className={style.select}
          />
        </div>
      </div>

      <div className={style.filteredProductsList}>
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
          <ProductCard className={style.card} {...product} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default FilteredProducts;
