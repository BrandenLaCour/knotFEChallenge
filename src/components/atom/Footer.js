import React from "react";

const Search = ({ info }) => {

    return (
        <div style={{ borderTop: '1px solid #ccc' }} className="footer">
            <div className="container">
                <p>{info}</p>
            </div>
        </div>
    )

}

export default Search;