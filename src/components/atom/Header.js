import React from "react";

const Header = ({ title }) => {

    return (
        <div className="header">
            <div className="container">
                <h1 className="text">{title}</h1>
            </div>
        </div>
    )

}

export default Header;