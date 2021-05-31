import React, {useContext } from 'react'
import { CartContext }  from '../../context/CartContext'
import Table from 'react-bootstrap/Table'
import {LinkContainer} from 'react-router-bootstrap'
import { Jumbotron, Button } from 'react-bootstrap'
import Cartel from './Cartel'
import User from '../User/User'



export default function Exit() {

    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)
    console.log("estado carrito", idProd)
    
    

   return (
        <>
            <User />
        </>

   )

}
export default Exit;