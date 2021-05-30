import React, {useContext } from 'react'
import { CartContext }  from '../../context/CartContext'
import Table from 'react-bootstrap/Table'
import {LinkContainer} from 'react-router-bootstrap'
import { Jumbotron, Button } from 'react-bootstrap'



export default function Cart() {

    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)
    console.log("estado carrito", idProd)
    
   
    return (
      <> 
        { unit == 0 ?  
        
          <Jumbotron  className="container mt-5">
            <h1>Carrito vacio</h1>
              
            <p>
            <LinkContainer to="/"><Button variant="primary">Regresar</Button></LinkContainer>
            </p>
          </Jumbotron>
          
          : 
          
          <>
            <Table striped bordered hover sm className="mt-5">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th style={{ minWidth: '7em'}}>Cantidad</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {idProd.map(cart =>
                              <tr key={cart.id} 
                                  style={{ backgroundColor:'white' }}>
                                <td>
                                  <img src={cart.img} alt="productos" style={{ maxWidth:'50px', maxHeight:'50px' }}/>
                                </td> 
                                <td>
                                  <button onClick={()=> hacer.agregar(cart.id)} className="btn btn-danger rounded-circle btn-sm"> + </button>  {cart.cantidad}  <button onClick={()=> hacer.borrar(cart.id)} className="btn btn-danger rounded-circle btn-sm"> - </button></td>    
                                <td>{cart.name}</td>
                                <td>{cart.price}</td>  
                                <td>
                                  <button className="btn btn-danger rounded-circle btn-sm" onClick={()=> hacer.eliminar(cart.id)}>X
                                  </button>
                                </td>  
                              </tr>
                )
                }     
              </tbody>
              
            </Table>
            <div className="tfoot">  
                <h5>Unidades: {hacer.unit}</h5>
                <h5>Total: {hacer.total} </h5>
                <button className="btn btn-danger" onClick={hacer.vaciar}> Vaciar Carrito </button>
                <button className="btn btn-success" onClick={hacer.handleCompra}> Finalizar Pedido </button>
                <LinkContainer to="/">
                  <button className="btn btn-primary" > Regresar </button>
                </LinkContainer>
            </div>  
          </> 
        }
      </> 
    )
}
