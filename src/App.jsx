import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products.jsx";
import Product from "./pages/Product/Product.jsx";
import Home from "./pages/Home/Home.jsx";
import { ProductProvider } from './contex/ProductContext.jsx';
import { ProductDetailProvider } from "./contex/ProductDetailContext";
import { BasketProvider } from "./contex/BasketContext";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <ProductProvider>
      <ProductDetailProvider>
      <BasketProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </BasketProvider>
      </ProductDetailProvider>
    </ProductProvider>
  );
}

export default App;
