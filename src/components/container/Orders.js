import React, {useContext, useEffect, useState } from 'react'
import { CartContext }  from '../../context/CartContext'
import Table from 'react-bootstrap/Table'
import {LinkContainer} from 'react-router-bootstrap'
import { Jumbotron, Button } from 'react-bootstrap'
import { DataContext } from '../../context/DataContext'
import {Accordion, Card} from 'react-bootstrap'




export default function Orders(comprador) {

    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)
    const [filtConsolas, fire, loading, setLoading, orderList, setOrderList] = useContext(DataContext)
    
    
   useEffect(() => {
       console.log(orderList)
        
  }, [orderList])



   return (
      <> 
        <Accordion defaultActiveKey="0">
         
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
                <> 
                
                              <tr key={order.id}>
                                <td>{order.id}</td>                               
                                <td>{order.total}</td>
                                <td> <Accordion.Toggle as={Button} eventKey={order.id}> ver </Accordion.Toggle></td>
                                <td><Button onClick={()=>fire.delete(order.id)}>X</Button></td>
                              </tr> 
                              
                
                              
               <tr>
                 <td colSpan="4"> 
              <Accordion.Collapse eventKey={order.id}>
                
                <Table striped bordered hover className="mt-0">
                  <thead> 
                    <tr>
                      <th>Item ID</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      
                    </tr>
                  </thead>
                  <tbody>

                  {order.idProd.map(element => <tr>  
                                              <td>{element.id}</td>
                                              <td>{element.name}</td>
                                              <td>{element.price}</td>
                                              </tr>  )}
                  </tbody>
                  </Table>
                  
              </Accordion.Collapse>
              </td>      
              </tr> 
             </> 
             )}
              </tbody>
            </Table>              
              
         
          </Accordion>
        
      </> 
    ) 
}