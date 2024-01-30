import React, { useState, useEffect } from "react";
import getProduct from "./api/products";
import HomePage from "./views/HomePage";
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
      <HomePage products={products} />
    </>
  );
}

export default App;
