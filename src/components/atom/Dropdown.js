import React from "react";

const Dropdown = ({ onChange, productType }) => {

    return (
        <label htmlFor="productType" >
            <select
                onChange={onChange}
                value={productType}
                name="productType"
                id="productType"
            >
                <option value="RETAIL">Retail</option>
                <option value="CASH">Cash</option>
            </select>
        </label>
    )

}

export default Dropdown;