import React, { useState, useEffect } from "react";
import API from "./api";
import Card from "./components/Card";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchProduct, setProductInput] = useState("");

  useEffect(() => {
    API.getProduct().then((res) => {
      setProducts(res.data);
    });
  });

  const cardResults = [];

  for (let i = 0; i < products.length; i++) {
    if (searchProduct || searchInput) {
      if (searchProduct && products[i].type.match(searchProduct)) {
        cardResults.push(<Card cardResults={products[i]} />);
      }
      if (searchInput && products[i].name.match(searchInput)) {
        cardResults.push(<Card cardResults={products[i]} />);
      }
    } else {
      cardResults.push(<Card cardResults={products[i]} />);
    }
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <h1 className="text">Products</h1>
        </div>
      </div>
      <div className="container search">
        <form>
          <label>
            Search:
            <input
              type="text"
              name="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
        </form>
        <label for="type">Choose a product type:</label>
        <select onChange={(e) => setProductInput(e.target.value)}>
          <option value="RETAIL">Retail</option>
          <option value="CASH">Cash</option>
        </select>
      </div>

      <div className="container">
        <h1>Results: </h1>
        <div className="results">{cardResults}</div>
      </div>
      <div style={{ borderTop: '1px solid #ccc'}} className="footer">
        {" "}
        <div className="container">
          <p>Built with love ❤️</p>
        </div>
      </div>
    </>
  );
}

export default App;
