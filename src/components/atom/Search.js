import React from "react";

const Search = ({ onChange, searchInput }) => {

    return (
        <label htmlFor="search">
            Search:
            <input
                type="text"
                name="search"
                id="search"
                value={searchInput}
                onChange={onChange}
            />
        </label>
    )

}

export default Search;