import React, { useState, useEffect } from "react";
import ProductsList from "../components/organism/ProductsList";
import Footer from "../components/atom/Footer";
import Header from "../components/atom/Header";
import SearchForm from "../components/organism/SearchForm";

const Products = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    return (
        <>
            <Header title="Products" />
            <SearchForm products={products} setFilteredProducts={setFilteredProducts} />
            <ProductsList filteredProducts={filteredProducts} />
            <Footer info="Built with love ❤️" />
        </>
    );
}

export default Products;
