import React, {useEffect, useState} from 'react'
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';


export const DataContext = React.createContext({})

export const DataProd = ({children}) => {

    const [consolas, setConsolas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [donde, setDonde] = useState(["price", ">", 1]);
    const [filtConsolas, setFiltConsolas] = useState([])
    const [estadoInicial, setEstadoInicial] = useState(true)
    const [orderList, setOrderList] = useState([])
    const [mail, setMail] = useState("")
    const [tipo, setTipo] = useState("todo")
    const [eliminaRegistro, setEliminaRegistro] = useState(true)
    

    const fire = []
    
    fire.mail = mail
    fire.setMail  = setMail
    fire.orderList = orderList
    fire.setOrderList = setOrderList
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
        
      }, [eliminaRegistro]);
  

      useEffect( () => {
        setLoading(true)
        const ordb = getFirestore();
        const ordenCollection = ordb.collection("orders").where("buyer.email", "==", mail)
        ordenCollection.get()
          .then((querySnapShot) => {
            querySnapShot.size === 0 ? console.log("no hay items") : console.log("items en Firebase", (querySnapShot.size))
            const ordenes = querySnapShot.docs.map((doc) => { 
              return {
                id: doc.id,
                ...doc.data(),
            }}
            ); 
                                   
            setOrderList(ordenes)
            })
          .catch((err) => console.log("ocurrio un error", err))
          .finally(()=>setLoading(false))
      
        }, [mail, eliminaRegistro]);


        useEffect(() => {
          firebase.auth().onAuthStateChanged(function(user) {
            setMail(user? user.email : null)
            

          });
          
        }, [firebase])
        

        fire.delete = (doc, callback) => {
           setEliminaRegistro (eliminaRegistro? false : true );
          const db = getFirestore();
          db.collection("orders").doc(doc).delete();
          
        
      }  

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
    
 
    
  return (
    <DataContext.Provider value={[filtConsolas, fire, loading, setLoading, orderList, setOrderList, mail, setMail, eliminaRegistro, setEliminaRegistro]}>
      {children}
    </ DataContext.Provider>
  )
}