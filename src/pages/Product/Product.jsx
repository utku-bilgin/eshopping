import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./product.module.css";
import { useBasketContext } from "../../contex/BasketContext";
import { useProductContext } from "../../contex/ProductContext";

const Product = () => {
  const { productId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useBasketContext();
  const {getProductById,productDetail} = useProductContext();

  useEffect(() => {
    getProductById(productId);
  }, [productId]);

  useEffect(() => {
    if(productDetail){
      const interval = setInterval(() => {
        setCurrentImage(
          (prevImage) => (prevImage + 1) % productDetail.images?.length
        );
      }, 3000);
  
      
      return () => clearInterval(interval);
    }
  }, [currentImage, productDetail]);

  const nextImage = () => {
   if(productDetail){
    setCurrentImage(
      (prevImage) => (prevImage + 1) % productDetail.images?.length
    );}
  };

  const prevImage = () => {
   if(productDetail){
    setCurrentImage(
      (prevImage) =>
        (prevImage - 1 + productDetail.images?.length) %
        productDetail.images.length
    );
   }
  };



  console.log({productDetail})

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(productDetail);
  };

  return (
    <div className={style.product}>
      <div className={style.carousel}>
        {productDetail.images && (
          <div>
            <button
              onClick={prevImage}
              className={`${style.carouselbutton} ${style.prevSlide}`}
            >
              &lt;
            </button>
            <img
              src={productDetail.images[currentImage]}
              alt={`Product ${currentImage + 1}`}
              className={style.carouselimage}
            />
            <button
              onClick={nextImage}
              className={`${style.carouselbutton} ${style.nextSlide}`}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
      <div className={style.detail}>
        <h1>{productDetail.title}</h1>
        <h2>Brand: {productDetail.brand}</h2>
        <h2>Category: {productDetail.category}</h2>

        <h2>Price: ${productDetail.price}</h2>
        <h2>Discount: {productDetail.discountPercentage}%</h2>
        <h2>Rating: {productDetail.rating}</h2>
        <h2>Stock: {productDetail.stock}</h2>
        <h2>Info: {productDetail.description}</h2>
        <button className={style.btn} onClick={handleAddToCart}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Product;
