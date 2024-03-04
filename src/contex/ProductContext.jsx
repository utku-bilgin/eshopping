import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Ürünleri alırken bir hata oluştu!", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log("API Response:", response.data);

        const uniqueCategories = [
          ...new Set(response.data.products.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);

        return uniqueCategories;
      } catch (error) {
        console.error("Kategorileri getirirken hata oluştu:", error);
        throw error;
      }
    };

    fetchCategories();
    // .then(categories => console.log('Kategoriler:', categories))
    // .catch(error => console.error('Hata:', error));
  }, []);

  const getProductById = async (productId) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProductDetail(response.data);
    } catch (error) {
      console.error("Ürün detayını getirirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, maxPrice, products]);

  const filterProducts = () => {};

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        selectedCategory,
        setSelectedCategory,
        maxPrice,
        setMaxPrice,
        getProductById,
        productDetail,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
