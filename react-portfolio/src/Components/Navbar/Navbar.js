import React from "react";
import {BroswerRouter, Route, Link} from "react-router-dom";
import {Home} from "../../Pages/Home /Home"
import {Projects} from "../../Pages/Projects/Projects";
import {Contact }from "../../Pages/Contact/Contact";

const Navbar = (props) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">Anthony Cera</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="/projects">
                            Projects
                        </NavItem>
                        <NavItem eventKey={3} href="/contact">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar.Header>
        </Navbar>
    );
}

export default Navbar;