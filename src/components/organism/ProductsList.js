import React from "react";
import Card from "../molecules/Card";

const ProductsList = ({ filteredProducts }) => {

    return (

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
    )

}

export default ProductsList;