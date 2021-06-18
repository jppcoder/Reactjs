import React from 'react'

//bootstrap
import {LinkContainer} from 'react-router-bootstrap'
import {  ArrowLeftCircleFill} from 'react-bootstrap-icons';


export default function Contacto() {
    return (
    <>
        <LinkContainer to="/">
            <ArrowLeftCircleFill className="d-flex mt-3 ml-3" size={30}/>
        </LinkContainer> 
        <div className="container mt-5 text-left">
            <h3 >Contactate con Nosotros</h3>
            
                <ul className="mt-3">
                    <h6>Encontranos en:</h6>
                    <li>Av. Lope de Vega 3710</li>
                    <li>Buenos Aires</li>
                    <li>Argentina</li>
                </ul>

                <ul className="mt-3">
                    <h6>Telefonos</h6>
                    <li>+54-9-4533-3211</li>
                    <li>+54-9-4566-1233</li>
                    
                </ul>
                
                <ul className="mt-3">
                    <h6>Mail</h6>
                    <li>info@retroconsolas.com.ar</li>
                    
                    
                </ul>
                
        </div>
    </>
    )
}
