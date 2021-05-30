import React, {useEffect, useState} from 'react'
import { getFirestore } from '../firebase';

export const DataContext = React.createContext({})

export const DataProd = ({children}) => {

    const [consolas, setConsolas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [donde, setDonde] = useState(["price", ">", 1]);
    const [filtConsolas, setFiltConsolas] = useState([])
    const [estadoInicial, setEstadoInicial] = useState(true)

    const [tipo, setTipo] = useState("todo")
    
  
    const fire = []
    
    fire.mil = () =>  setDonde(["price", ">", 1000])
    fire.cinco = () =>  setDonde(["price", ">", 5000])
    fire.diez = () =>  setDonde(["price", ">", 10000])

    fire.todos = () =>  setDonde(["price", ">", 1]) 
    fire.ttodos = () => setTipo("todo")
    fire.arcade = () => setTipo("arcade")
    fire.consola = () =>  setTipo("consola")
    fire.pedestal = () =>  setTipo("pedestal")

    useEffect( () => {
      setLoading(true)
      
      const db = getFirestore();
      const itemsCollection = db.collection("prod");
      const search = itemsCollection.where(donde[0], donde[1], donde[2])
     
      search.get()
        .then((querySnapShot) => {
          querySnapShot.size === 0 ? console.log("no hay items") : console.log("items en Firebase", (querySnapShot.size))
          const documentos = querySnapShot.docs.map((doc) =>doc.data());
          setConsolas(documentos)
          
          })
        .catch((err) => console.log("ocurrio un error", err))
        .finally(()=>setLoading(false))
    
      }, [setConsolas, donde]);
  

    useEffect ( () => {
     
      if (tipo == "consola" ) 
        { let list = consolas.filter(form => form.category == tipo);
        setFiltConsolas(list)} 
      else if ( tipo == "arcade") {
        { let list = consolas.filter(form => form.category == tipo);
          setFiltConsolas(list)} 
      }
      else if ( tipo == "pedestal") {
        { let list = consolas.filter(form => form.category == tipo);
          setFiltConsolas(list)} 
      } 
      else if ( tipo == "todo") {
          setFiltConsolas(consolas)
      }
      
    }, [consolas, tipo, estadoInicial])
    
    console.log(filtConsolas)
    console.log(tipo)

  return (
    <DataContext.Provider value={[filtConsolas, fire, loading, setLoading]}>
      {children}
    </ DataContext.Provider>
  )
}