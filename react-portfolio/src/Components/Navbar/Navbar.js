import React from "react";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/projects">Projects</Link>
            <Link className="link" to="/contact">Contact</Link>
        </div>
    );
}

export default Navbar;