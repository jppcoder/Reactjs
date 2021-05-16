import React, {useContext} from 'react'
import { CartContext }  from '../../context/CartContext'


export default function Cart() {

    const [idProd, setIdProd] = useContext(CartContext)

    const sumar = () => {
        
      }

    
    return (
        <>
        <div>carrito</div>
        <button onClick={sumar}>setear 2</button>
        <div>{idProd}</div>
        
        </>
    )
}
