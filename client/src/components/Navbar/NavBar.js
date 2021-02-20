import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavBar.scss'
/**
    * Renders a <NavBar /> component according with the mockUp. Includes pulse animation with CSS keyframes.
    */
const NavBar = () => (
    <Navbar sticky="top" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home"><img className="nav-logo" src="https://www.lider.cl/images/logo.svg" alt="Logo" /></Navbar.Brand>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link target="_blank" href="https://houm.com/cl/propietario">Hi</Nav.Link>
                <Nav.Link target="_blank" href="https://me.houm.com/pagar">Hi</Nav.Link>
                <Nav.Link target="_blank" href="https://houm.com/cl/partner">Hi</Nav.Link>
                <Nav.Link target="_blank" href="https://houm.com/cl/login">Hi</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>


);


export default NavBar;