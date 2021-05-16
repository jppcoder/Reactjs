import React, {useEffect, useState} from 'react'

export const CartContext = React.createContext(0)

export const CartProd = ({children}) => {

    //verificar que no exista un item y si existe agregar cantidad
    // [{id: "id", cantidad: 1}]

    

    const [idProd, setIdProd] = useState([])

    useEffect ( () => {
        console.log("use:", idProd)
        
        console.log(typeof idProd)
        console.log(idProd.some(i => i.id === "3" ))
        

    }, [idProd]) 

    const addCart = (item) => {
        console.log(idProd.some(i => i.id === item.id ))
       console.log("itemid" , item.id)
          
        setIdProd([...idProd, ...item])
    }

  return (
    <CartContext.Provider value={[idProd, setIdProd, addCart]}>
      {children}
    </ CartContext.Provider>
  )
}