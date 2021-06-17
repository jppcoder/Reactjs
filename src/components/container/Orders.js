import React, { useContext, useState, useEffect } from 'react'

//Context
import { CartContext }  from '../../context/CartContext'
import { DataContext } from '../../context/DataContext'

//Bootstrap
import { Accordion, Table } from 'react-bootstrap'
import { XCircle, ZoomIn } from 'react-bootstrap-icons';

export default function Orders(comprador) {

    const [filtConsolas, fire, loading, setLoading, orderList, setOrderList] = useContext(DataContext)
    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit, showToast, setShowToast, user, setUser, width, height] = useContext(CartContext)
    const [tamaño, setTamaño] = useState("")
    const breakpoint = 620;
    

    useEffect(() => {
      setTamaño(width < breakpoint ? "sm" : "xl")
    }, [width])


    return (
      <> 
        <Accordion defaultActiveKey="0">
          <Table striped size={tamaño} hover className="mt-5"> 
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
                    <Accordion.Collapse  size={tamaño} eventKey={order.id}>
                      <Table  striped  hover  size={tamaño} className="subTable" >
                        <thead> 
                          <tr>
                            <th className="subT">Nombre</th>
                            <th className="subTable">Precio</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.idProd.map(element => <tr key={element.id}>  
                            
                            <td className="subTable">{element.name}</td>
                            <td className="subTable" >{element.price}</td>
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
