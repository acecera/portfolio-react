import React from "react";
import {BroswerRouter, Route, Link} from "react-router-dom";
import {Home} from "../../Pages/Home /Home"
import {Projects} from "../../Pages/Projects/Projects";
import {Contact }from "../../Pages/Contact/Contact";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} /> 
        </div>
    );
}

export default Navbar;