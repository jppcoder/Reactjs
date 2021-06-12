
import React from 'react'

//react Bootstrap
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import { Person } from 'react-bootstrap-icons';
import NavBar from '../NavBar/NavBar';



export default function Footer() {
    return (
       
        <Navbar   bg="dark"  className="mt-5" >
        <div className="footerText"> Copywright Juan Pablo Pagotto - Buenos Aires Argentina - 2021</div>  
             
        </Navbar>
    )
}


