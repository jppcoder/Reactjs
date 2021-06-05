import React, {useContext, useEffect, useState } from 'react'
import { CartContext }  from '../../context/CartContext'
import Table from 'react-bootstrap/Table'
import {LinkContainer} from 'react-router-bootstrap'
import { Jumbotron, Button } from 'react-bootstrap'
import { DataContext } from '../../context/DataContext'
import { getDefaultNormalizer } from '@testing-library/dom'




export default function Orders(comprador) {

    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)
    const [filtConsolas, fire, loading, setLoading, orderList, setOrderList] = useContext(DataContext)
    
    
   useEffect(() => {
       console.log(orderList)
        
  }, [orderList])



   return (
      <> 
        { 

            <Table striped bordered hover sm className="mt-5">
              <thead> 
                <tr>
                  <th>Orden ID</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                
                 {orderList.map(order =>
                              <tr key={order.id}>
                                <td>{order.id}</td>                               
                                
                                <td>{order.idProd.map(element => {  
                                    return (
                                    <span>{element.name}</span>
                                    )})}
                                </td>
                                <td>{order.total}</td>
                                 
                                <td><Button onClick={()=>fire.delete(order.id)}>X</Button></td>
                              </tr>
                )
                }     
                
              </tbody>
            </Table>
        }
      </> 
    ) 
}
