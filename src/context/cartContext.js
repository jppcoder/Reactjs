import React, {useEffect, useState} from 'react'
import { getFirestore } from '../firebase';

export const CartContext = React.createContext(0)

export const CartProd = ({children}) => {

    const [items, setItems] = useState([]);
    const [idProd, setIdProd] = useState([])

    useEffect ( () => {
    console.log("cantidad en stock", idProd)  
    }, [idProd]) 
 

    const [itemStock, setItemStock] = useState([]);

    useEffect ( () => {
    
       

    }, [itemStock]) 


    

  return (
    <CartContext.Provider value={[idProd, setIdProd, items]}>
      {children}
    </ CartContext.Provider>
  )
}