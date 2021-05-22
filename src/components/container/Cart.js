import React, {useContext, useEffect, useState} from 'react'
import { CartContext }  from '../../context/CartContext'
import Table from 'react-bootstrap/Table'



export default function Cart() {

    const [idProd] = useContext(CartContext)
    const [cart, setCart] = useState([])
    

    useEffect(() => {
      console.log("queda en el" ,idProd);
      setCart(idProd);
    }, [idProd, cart, setCart])
    

    
    return (
        <>
        <div>carrito</div>
          <Table striped bordered hover sm>
            <thead>
              <tr>
                <th>imagen</th>
                <th>id</th>
                <th>cantidad</th>
                <th>nombre</th>
                <th>precio</th>

              </tr>
            </thead>
            <tbody>
              {cart.map((cart) =>
                            <tr key={cart.id} style={{ backgroundColor:'white' }}>
                              <td><img src={cart.img} alt="productos" style={{ maxWidth:'50px', maxHeight:'50px' }}/></td> 
                              <td>{cart.id}</td> 
                              <td>{cart.cantidad}</td>    
                              <td>{cart.name}</td>
                              <td>{cart.price}</td>    
                            </tr>
              )
              }     
            </tbody>
          </Table>
    </>
    )
}
