import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavBar.scss'
/**
    * Renders a <NavBar /> component according with the mockUp. Includes pulse animation with CSS keyframes.
    */
const NavBar = ({ onKeyPress, onChange, searchProduct,query }) => (
    <Navbar sticky="top" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home"><img className="nav-logo" src="https://www.lider.cl/images/logo.svg" alt="Logo" /></Navbar.Brand>
        <Form inline>
            <FormControl
                onKeyPress={onKeyPress}
                onChange={onChange}
                type="text" placeholder="Search"
                value={query}
                className="mr-sm-2" />
            <Button variant="outline-light" onClick={searchProduct}>Search</Button>
        </Form>
    </Navbar>


);


export default NavBar;