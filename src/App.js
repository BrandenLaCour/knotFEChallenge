import React, { useState, useEffect } from "react";
import getProduct from "./api/products";
import ProductsView from "./views/ProductsView";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <ProductsView products={products} />
    </>
  );
}

export default App;
