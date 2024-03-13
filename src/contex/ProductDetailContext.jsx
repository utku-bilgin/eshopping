import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductDetailContext = createContext();

export const useProductDetailContext = () => {
  return useContext(ProductDetailContext);
};

export const ProductDetailProvider = ({ children }) => {
  const [productDetail, setProductDetail] = useState(null);

  
  const fetchProductDetail = async (productId) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      console.log('Product Detail API Response:', response.data);

      
      setProductDetail(response.data);
    } catch (error) {
      console.error('Ürün detayını getirirken hata oluştu:', error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
    console.log("Product detail updated:", productDetail);
  }, []);

  
  const contextValue = {
    productDetail,
    fetchProductDetail,
  };

  return (
    <ProductDetailContext.Provider value={contextValue}>
      {children}
    </ProductDetailContext.Provider>
  );
};
