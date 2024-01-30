import React, { useState, useEffect } from "react";
import Card from "../components/molecules/Card";
import Search from "../components/atom/Search";
import Dropdown from "../components/atom/Dropdown";

const HomePage = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [productType, setProductType] = useState("");


    useEffect(() => {
        const filtered = products.filter((product) => {
            const productName = product.name.toLowerCase();
            const type = product.type.toLowerCase();
            const input = searchInput.toLowerCase();
            const selectedProductType = productType.toLowerCase();

            const matchesSearch = !searchInput || productName.includes(input);
            const matchesType = !productType || type === selectedProductType;

            return matchesSearch && matchesType;
        });

        setFilteredProducts(filtered);
    }, [searchInput, productType, products]);

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
    };

    return (
        <>
            <div className="header">
                <div className="container">
                    <h1 className="text">Products</h1>
                </div>
            </div>
            <div className="container search">
                <form onSubmit={handleFormSubmit}>
                    <Search onChange={(e) => setSearchInput(e.target.value)} searchInput={searchInput} />
                    <Dropdown onChange={(e) => setProductType(e.target.value)} productType={productType} />
                </form>
            </div>

            <div className="container">
                <h1>Results: </h1>
                <div className="results">
                    {filteredProducts.length > 0
                        ? filteredProducts.map((product, i) => (
                            <Card key={i} cardResults={product} />
                        ))
                        : <p>No results found</p>}
                </div>
            </div>
            <div style={{ borderTop: '1px solid #ccc' }} className="footer">
                {" "}
                <div className="container">
                    <p>Built with love ❤️</p>
                </div>
            </div>
        </>
    );
}

export default HomePage;
