import React, {useEffect, useState} from 'react'

export const CartContext = React.createContext(0)

export const CartProd = ({children}) => {

    
    const [idProd, setIdProd] = useState([]);
    const [cart, setCart] = useState([]);
    


  return (
    <CartContext.Provider value={[idProd, setIdProd, cart, setCart]}>
      {children}
    </ CartContext.Provider>
  )
}