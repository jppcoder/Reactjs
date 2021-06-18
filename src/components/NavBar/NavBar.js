
import React from 'react'

//react Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { Person } from 'react-bootstrap-icons';

//import de componentes
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
       
        <Navbar  collapse onSelect expand="lg"  bg="dark" variant="dark"  >
            <LinkContainer to="/" exact>
                <Navbar.Brand>
                    <Link to="/" exact><img alt="Consola retro logo"      
                        src="https://image.flaticon.com/icons/png/128/2727/2727202.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>
                    </Link>
                        RetroGames
                    </Navbar.Brand>
                </LinkContainer>
                        <Navbar className="d-flex ">
                            <LinkContainer to="/Cart"><CartWidget /></LinkContainer>
                            <LinkContainer to="/User"  ><Person className="ml-2 mt-1" color="white" size={28}/></LinkContainer>     
                        </Navbar>
                        
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                    <Navbar.Collapse id="responsive-navbar-nav "  className="justify-content-end">
                        <Nav className="detalle productos nav navbar-nav navbar-center "> 
                            <LinkContainer to="/"><Nav.Link >Productos</Nav.Link></LinkContainer>
                            <LinkContainer to="/Comprar"><Nav.Link >Comprar</Nav.Link></LinkContainer>
                            <LinkContainer to="/Garantia"><Nav.Link >Garantia</Nav.Link></LinkContainer>
                            <LinkContainer to="/Contacto"><Nav.Link >Contacto</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                   
            </Navbar>
    )
}


