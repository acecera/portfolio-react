import React, {Component} from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";



export class MyNavbar extends Component {
    render () {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Anthony Cera</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                About
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Projects
                            </NavItem>
                            <NavItem eventKey={3} href="#">
                                Contact
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default MyNavbar;