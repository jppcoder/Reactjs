import React, { useContext, useEffect } from 'react'

//context
import { CartContext }  from '../../context/CartContext'

//bootstrap
import {LinkContainer} from 'react-router-bootstrap'
import { Jumbotron, Button, Table } from 'react-bootstrap'
import { PlusCircle, DashCircle, XCircle, ArrowLeftCircleFill} from 'react-bootstrap-icons';

//firebase
import firebase from 'firebase/app';

//import de componentes
import Exit from './Exit'




export default function Cart() {

    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit, showToast, setShowToast, user, setUser, width, height] = useContext(CartContext)
    
    useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user) {
        setUser(user? user.email : null)
       }
      ); 
    }, [])
    
   return (
      <> 
        
        { unit === 0 ?  
        
          <Jumbotron  className="container mt-5 jumboCart" style={{ height:'60vh' }}>
            <h1>Carrito vacio</h1>
              
            
             <LinkContainer to="/"><Button variant="warning">Regresar</Button></LinkContainer>
            
          </Jumbotron>
          : 
          <>
            <LinkContainer to="/">
              <ArrowLeftCircleFill className="d-flex mt-3 ml-3" size={30}/>
            </LinkContainer> 
            <Table striped  hover size="sm" className="mt-3">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th style={{ minWidth: '7em'}}>Cantidad</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {idProd.map(cart =>
                              <tr key={cart.id} 
                                  style={{ backgroundColor:'white' }}>
                                <td>
                                  <img src={cart.img} alt="productos" style={{ maxWidth:'50px', maxHeight:'50px' }}/>
                                </td> 
                                <td>
                                  <DashCircle size={22}  onClick={()=> hacer.borrar(cart.id)}/>
                                  <span className="m-1">{cart.cantidad}</span>       
                                  <PlusCircle  size={22} onClick={()=> hacer.agregar(cart.id)}/>
                                </td> 
                                <td>{cart.name}</td>
                                <td>{cart.price}</td>  
                                <td>
                                  <XCircle onClick={()=> hacer.eliminar(cart.id)} size={22} />
                                                                
                                </td>  
                              </tr>
                )}     
              </tbody>
            </Table>
            <div className="tfoot mt-5"> 
                <h5>Unidades: {hacer.unit}</h5>
                <h5>Total: {hacer.total} </h5>
                <button className="btn btn-secondary" onClick={hacer.vaciar}> Vaciar </button>
                { hacer.user == null ? <LinkContainer to="User">
                  <button className="btn btn-success" > LogIn / Registrarse </button>
                </LinkContainer> : 
                <button className="btn btn-success" onClick={hacer.handleCompra}> Terminar compra </button>}
              </div>
              <Exit showToast={showToast} setShowToast={setShowToast} texto={"Realizo su compra correctamente"} />
          </> 
        }
      </> 
    ) 
}
