import React, {useContext, useEffect, useState} from 'react'
import { CartContext }  from '../../context/CartContext'
import Table from 'react-bootstrap/Table'



export default function Cart() {

    const [idProd, setIdProd, hacer] = useContext(CartContext)
    const [unit, setUnit] = useState([]);
    const [total, setTotal] = useState([]);
    
    useEffect(() => {
    
      console.log("este es el del carrito", idProd)
      
      

    }, [idProd])

    useEffect(() => {
      const unid = idProd.reduce((a,b)=>(a + b.cantidad),0)
      setUnit(unid)
      
      const Total = idProd.reduce((a,b)=>(a + (b.price * b.cantidad)),0)
      setTotal(Total)

    }, [idProd, setUnit, setTotal])

    return (
        <>

          <Table striped bordered hover sm className="mt-5">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Eliminar</th>
                

              </tr>
            </thead>
            <tbody>
              {idProd.map(cart =>
                            <tr key={cart.id} style={{ backgroundColor:'white' }}>
                              <td><img src={cart.img} alt="productos" style={{ maxWidth:'50px', maxHeight:'50px' }}/></td> 
                              <td><button onClick={()=> hacer.agregar(cart.id)} className="btn btn-danger btn-circle"> + </button>  {cart.cantidad}  <button onClick={()=> hacer.borrar(cart.id)} className="btn btn-danger btn-circle"> - </button></td>    
                              <td>{cart.name}</td>
                              <td>{cart.price}</td>  
                              <td><button className="btn btn-danger btn-circle" onClick={()=> hacer.eliminar(cart.id)}>X</button></td>  
                            </tr>
              )
              }     
            </tbody>
            
            
          </Table>
          <div className="tfoot">  
              <h5>Unidades: {unit} </h5>
              <h5>Total: {total} </h5>
              <button className="btn btn-danger btn-circle" onClick={hacer.vaciar}> Borrar Carrito </button>
            </div>  
    </>
    )
}
