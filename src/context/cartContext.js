import React, { useState, useEffect, useContext} from 'react'
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';
import { DataContext } from './DataContext';



export const CartContext = React.createContext([])

export const CartProd = ({children}) => {

    const [filtConsolas, fire, loading, setLoading, orderList, setOrderList, mail, setMail, eliminaRegistro, setEliminaRegistro] = useContext(DataContext)
    const [idProd, setIdProd] = useState([]);
    const [total, setTotal] = useState([]);
    const [unit, setUnit] = useState([]);
    const [order, setOrder] = useState([]);
    const [condicion, setCondicion] = useState(false);
    const [user, setUser] = useState({});    
    const dat = getFirestore();
    const orders = dat.collection("orders");
    
    useEffect(() => {
     
      if (order.idProd) {
        orders.add(order)
          .then((id)=>{console.log("id", id)
          })
          .catch((err)=> console.err("error", err))
      }
    
    }, [order])
    
    const hacer = []
    
  
    hacer.handleCompra = () => {
      if (hacer.user != null) {
        eliminaRegistro? setEliminaRegistro(false) : setEliminaRegistro(true);
        let order = {
        buyer: {
          email: mail,
        }, 
      fecha: firebase.firestore.Timestamp.fromDate(new Date()),  
      idProd, 
      total,
      
    }
    idProd.length && setOrder(order)
    
    } else {
      hacer.setCondicion(true)    
    }
    }
    
    hacer.condicion = condicion
    hacer.setCondicion = setCondicion
    hacer.user = user
    hacer.setUser = setUser
    hacer.idProd = idProd
    hacer.setIdProd = setIdProd
    hacer.total = total
    hacer.setTotal = setTotal
    hacer.unit = unit
    hacer.setUnit = setUnit

    hacer.agregar = (x) =>  idProd.find(i => ( i.id == x ) && ( i.cantidad += 1) ) 
                          && setIdProd ([...idProd])

    hacer.borrar = (x) =>  idProd.find(i => ( i.id == x ) && (i.cantidad > 0) ?  ( i.cantidad -= 1) : hacer.eliminar(x)) 
                          && setIdProd([...idProd]) 

       
    hacer.eliminar = (item) => { const restantes = idProd.filter(x=> x.id !== item);
      setIdProd(restantes);
    }
    
    hacer.vaciar = () =>setIdProd([])
    

    useEffect(() => {
      const unid = idProd.reduce((a,b)=>(a + b.cantidad),0)
      setUnit(unid)
      
    }, [idProd])


    useEffect(() => {
  
      const Total = idProd.reduce((a,b)=>(a + (b.price * b.cantidad)),0)
      setTotal(Total)
      
    }, [idProd])
    
    useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          fire.setMail(user.email)

        } else {
          fire.setMail(null)
        }
      });
      
    }, [fire.setMail])
    
  return (
    <CartContext.Provider value={[idProd, setIdProd, hacer, total, setTotal, unit, setUnit]}>
      {children}
    </ CartContext.Provider>
  )
}