import React, { useEffect, useState} from 'react'
import { set } from 'react-hook-form';


export const CartContext = React.createContext([])

export const CartProd = ({children}) => {

    
    const [idProd, setIdProd] = useState([]);
    const [total, setTotal] = useState([]);
    

    useEffect(() => {
      
      console.log("esto se va agragando a carrito", idProd)
      console.log("total es:", total)

    }, [idProd, total])
    
    const hacer = {}
    
    hacer.agregar = (x) =>  idProd.find(i => ( i.id == x ) && ( i.cantidad += 1) ) 
                          && setIdProd ([...idProd])

    hacer.borrar = (x) =>  idProd.find(i => ( i.id == x ) && (i.cantidad > 0) ?  ( i.cantidad -= 1) : hacer.eliminar(x)) 
                          && setIdProd([...idProd]) 

       
    hacer.eliminar = (item) => { const restantes = idProd.filter(x=> x.id !== item);
      setIdProd(restantes);
    }
    
    hacer.vaciar = () =>setIdProd([])
     
  
  return (
    <CartContext.Provider value={[idProd, setIdProd, hacer, total, setTotal]}>
      {children}
    </ CartContext.Provider>
  )
}