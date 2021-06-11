import React, {useContext } from 'react'

//Context
import { CartContext }  from '../../context/CartContext'
import { DataContext } from '../../context/DataContext'

//Bootstrap
import {Accordion, Button, Table } from 'react-bootstrap'
import {  XCircle, ZoomIn } from 'react-bootstrap-icons';

export default function Orders(comprador) {

    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit, showToast, setShowToast] = useContext(CartContext)
    const [filtConsolas, fire, loading, setLoading, orderList, setOrderList] = useContext(DataContext)
    console.log("aca", orderList)
    return (
      <> 
        <Accordion defaultActiveKey="0">
          <Table striped size="sm" hover className="mt-5"> 
            <thead> 
              <tr>
                <th>Orden ID</th>
                <th>Total</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {orderList.map(order =>
              <> 
                <tr key={order.id}>
                  <td>{order.id}</td>                               
                  <td>{order.total}</td>
                  <td> <Accordion.Toggle style={{ border: 'none' }} eventKey={order.id}><ZoomIn size={20} eventKey={order.id} /></Accordion.Toggle></td>
                  <td> <XCircle onClick={()=>fire.delete(order.id)} size={20} />  </td>
                </tr>               
                <tr>
                  <td colSpan="4"> 
                    <Accordion.Collapse eventKey={order.id}>
                      <Table  striped bordered hover className="mt-0">
                        <thead> 
                          <tr>
                            <th>Item ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.idProd.map(element => <tr key={element.id}>  
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
