import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default NavBar;
