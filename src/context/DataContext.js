import React, {useEffect, useState} from 'react'
import { getFirestore } from '../firebase';

export const DataContext = React.createContext({})

export const DataProd = ({children}) => {

    const [consolas, setConsolas] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect( () => {
      setLoading(true)
      const db = getFirestore();
      const itemsCollection = db.collection("prod");
      itemsCollection.get()
        .then((querySnapShot) => {
          querySnapShot.size === 0 ? console.log("no hay items") : console.log("items en Firebase", (querySnapShot.size))
          const documentos = querySnapShot.docs.map((doc) =>doc.data());
          setConsolas(documentos)
          
          })
        .catch((err) => console.log("ocurrio un error", err))
        .finally(()=>setLoading(false))
    
      }, [setConsolas]);
  

    useEffect ( () => {
      console.log("useState", consolas)

    }, [consolas]) 

  return (
    <DataContext.Provider value={[consolas]}>
      {children}
    </ DataContext.Provider>
  )
}