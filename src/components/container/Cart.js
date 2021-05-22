import React, {useContext, useEffect} from 'react'
import { useState } from 'react'
import { CartContext }  from '../../context/CartContext'


export default function Cart() {

    const [idProd, setIdProd] = useContext(CartContext)
    const [cart, setCart] = useState([])

    useEffect(() => {
      console.log("queda en el" ,idProd);
      setCart(idProd);
    }, [idProd, cart, setCart])
    
    return (
        <>

        <div>carrito</div>
        <table className="stripped">
        <thead>
          <tr>
            <th>id</th>
            <th>cantidad</th>
            <th>nombre</th>
            <th>precio</th>

          </tr>
        </thead>
        <tbody>
          
          
          {cart.map((cart) =>
                        <tr key={cart.id}> 
                        <td>{cart.id}</td> 
                         <td>{cart.cantidad}</td>    
                         <td>{cart.name}</td>
                         <td>{cart.price}</td>    
                        </tr>
        )
        }
            
            
          
      
  </tbody>
  </table>


        
        </>
    )
}
