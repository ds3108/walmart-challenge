import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavBar.scss'
/**
    * Renders a <NavBar /> component according with the mockUp. Includes pulse animation with CSS keyframes.
    */
const NavBar = ({ onKeyPress, onChange, searchProduct, query }) => (
    <Navbar sticky="top" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home"><img className="nav-logo" src="https://www.lider.cl/images/logo.svg" alt="Logo" /></Navbar.Brand>
        <Form inline>
            <FormControl
                onKeyPress={onKeyPress}
                onChange={onChange}
                type="text" placeholder="¿Qué producto buscas hoy?"
                value={query}
                className="mr-sm-2" />
            <svg
                onClick={searchProduct}
                className="icon-search"
                viewBox="0 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g fillRule="nonzero" fill="#999999">
                    <path d="M7.5 13.75c3.452 0 6.25-2.798 6.25-6.25S10.952 1.25 7.5 1.25 1.25 4.048 1.25 7.5s2.798 6.25 6.25 6.25zm0 1.25C3.358 15 0 11.642 0 7.5 0 3.358 3.358 0 7.5 0 11.642 0 15 3.358 15 7.5c0 4.142-3.358 7.5-7.5 7.5z"></path>
                    <path d="M12.683 13.567l5 5 .442.442.884-.885-.443-.442-5-5-.442-.442-.884.885"></path>
                </g>
            </svg>
        </Form>
    </Navbar>


);


export default NavBar;