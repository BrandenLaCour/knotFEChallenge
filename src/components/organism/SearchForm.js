import React, { useState, useEffect } from "react";
import Search from "../atom/Search";
import Dropdown from "../atom/Dropdown";

const SearchForm = ({ products, setFilteredProducts }) => {

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
        <div className="container search">
            <form onSubmit={handleFormSubmit}>
                <Search onChange={(e) => setSearchInput(e.target.value)} searchInput={searchInput} />
                <Dropdown onChange={(e) => setProductType(e.target.value)} productType={productType} />
            </form>
        </div>
    )

}

export default SearchForm;