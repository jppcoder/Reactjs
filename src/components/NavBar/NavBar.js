
import CartWidget from './CartWidget';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from 'react'

export default function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/" exact >
                    <Link to="/" exact><img alt="Consola retro logo" 
                        
                        src="https://image.flaticon.com/icons/png/128/2727/2727202.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>
                        </Link>
                    RetroGames
                    </Navbar.Brand>
                    <CartWidget />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="detalle productos">
                        <Nav.Link href="/Historia">Historia</Nav.Link>
                        <Nav.Link href="/Nosotros">Acerca de nosotros</Nav.Link>
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


