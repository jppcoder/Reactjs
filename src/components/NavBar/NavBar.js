
import CartWidget from './CartWidget';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'

import React from 'react'

export default function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <LinkContainer to="/" exact><Navbar.Brand>
                    <Link to="/" exact><img alt="Consola retro logo" 
                        
                        src="https://image.flaticon.com/icons/png/128/2727/2727202.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>
                        </Link>
                    RetroGames
                    </Navbar.Brand></LinkContainer>
                    <LinkContainer to="/Cart"><CartWidget /></LinkContainer>
                    <LinkContainer to="/Cart"><Nav.Link>Carrito</Nav.Link></LinkContainer> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="detalle productos">
                        <LinkContainer to="/Historia"><Nav.Link >Historia</Nav.Link></LinkContainer>
                        <LinkContainer to="/Nosotros"><Nav.Link >Acerca Nuestro</Nav.Link></LinkContainer>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bartop</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Arcade</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Productos a Medida</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">Redes Sociales</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>           
            </Navbar>
 
        </div>
    )
}


