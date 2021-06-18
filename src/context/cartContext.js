import React, { useState, useEffect, useContext} from 'react'

//acceso a firebase
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';

//context
import { DataContext } from './DataContext';



export const CartContext = React.createContext([])
export const CartProd = ({children}) => {

    const [filtConsolas, fire, loading, setLoading, orderList, setOrderList, mail, setMail, eliminaRegistro, setEliminaRegistro, donde, setDonde] = useContext(DataContext)
    const [idProd, setIdProd] = useState([]);
    const [total, setTotal] = useState([]);
    const [unit, setUnit] = useState([]);
    const [order, setOrder] = useState([]);
    const [condicion, setCondicion] = useState(false);
    const [user, setUser] = useState({});    
    const dat = getFirestore();
    const orders = dat.collection("orders");
    const [showToast, setShowToast] = useState(false)
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    

    useEffect(() => {
      if (order.idProd) { 
        orders.add(order)
          .then((id)=>{console.log("id", id)
          })
          .catch((err)=> console.err("error", err))
      }
    }, [order])
    
    
    
    fire.batchUpdate = (array) => {
      let batch = dat.batch();
       array.forEach(item =>{
          batch.update(dat.collection("prod").doc(item.id), 
                {stock:firebase.firestore.FieldValue.increment(-item.cantidad)} 
          );
          })
          batch.commit()
          .then((res)=> setDonde(["price", ">", 1]))
          .catch((err)=> console.log("catch", err))
          .finally(()=> setShowToast(true))
    }

    fire.updateCollectionDoc = (array) => {
      let fire = dat.collection("prod")
       array.forEach(item =>{
          fire.doc(item.id).update({"stock": (item.stock - item.cantidad) }) 
           .catch( error  => {console.error ("Error updating document: "   , error    ) })
       
          }
        )
    }
    
    
    //objeto creado para simplificar la ejecucion de funciones y variables
    const hacer = []

    hacer.handleCompra = () => {
      if (mail != null) { eliminaRegistro? setEliminaRegistro(false) : setEliminaRegistro(true);
        let order = {
        buyer: {
          email: mail,
        }, 
        fecha: firebase.firestore.Timestamp.fromDate(new Date()),  
        idProd, 
        total,  
    }
    idProd.length && setOrder(order) 
    fire.batchUpdate(idProd)
    
  
    } else {hacer.setCondicion(true)}
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
    
    hacer.agregar = (x) =>  idProd.find(i => ( i.id === x ) && ( i.cantidad += 1) ) 
                          && setIdProd ([...idProd])
    
    hacer.borrar = (x) =>  idProd.find(i => ( i.id === x ) && (i.cantidad > 0) ?  ( i.cantidad -= 1) : hacer.eliminar(x)) 
                          && setIdProd([...idProd]) 
    
    hacer.eliminar = (item) => { const restantes = idProd.filter(x=> x.id !== item);
      setIdProd(restantes);
    }
    
    hacer.vaciar = () =>setIdProd([])
    
    
    useEffect(() => {
      const unid = idProd.reduce((a,b)=>(a + b.cantidad),0)
      setUnit(unid) 
      const Total = idProd.reduce((a,b)=>(a + (b.price * b.cantidad)),0)
      setTotal(Total) 
    }, [idProd])
    
 
    
    useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user) {
        setMail(user? user.email : null)
       }
      ); 
    }, [fire.setMail])
    
  return (
    <CartContext.Provider value={[idProd, setIdProd, hacer, total, setTotal, unit, setUnit, showToast, setShowToast, user, setUser, width, height]}>
      {children}
    </ CartContext.Provider>
  )
}


