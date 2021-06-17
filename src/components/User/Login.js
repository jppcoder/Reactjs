import React, {   useContext, useState} from 'react';
import { auth } from '../../firebase';
import { CartContext }  from '../../context/CartContext' 
import {  Form, Button} from 'react-bootstrap'
import  Cartel  from './../container/Cartel'
import app from '../../firebase';



const User = () => {
    
    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)
    const [mail, setMail] = useState('')
    const [passw, setPassw] = useState('')
    const [error, setError] = useState([])
    const [showToast, setShowToast] = useState(false)
    

    
    const loguearUsuario = (e) => {
        e.preventDefault()
        app.auth().signInWithEmailAndPassword(mail, passw)
        .then((res) => { setError("Ingresado correctamente"); setShowToast(true)})
        .catch(err =>  { setError(err.message); setShowToast(true)}   
        )
        hacer.setCondicion(true);
    }

    return (  
    <> 
        <div className="container" >
        
             <Form className="container" onSubmit={loguearUsuario} >
                <h4 className=" mb-3 p-2"> Ingrese su usuario </h4>
                <Form.Group
                     controlId="mail"> 
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" 
                                placeholder="Ingrese su email" 
                                name="mail" 
                                onChange={(e) => {setMail(e.target.value)}} /> 
                </Form.Group>

                <Form.Group className="mt-3 mb-3"
                    controlId="passw">
                    <Form.Label>Password</Form.Label>
                    
                    <Form.Control className="mt-3 mb-3" 
                    type="password" 
                    placeholder="Ingrese su Password" 
                    name="passw" 
                    onChange={(e) => {setPassw(e.target.value)}} />
                
                    Debe contener al menos 6 caracteres
                
                </Form.Group>
                    <span><Cartel showToast={showToast} 
                                  setShowToast={setShowToast} 
                                  texto={error} />
                    </span>
                
                <Button variant="primary" type="submit" className="mt-3 mb-3">
                    Loguear
                </Button>
            </Form>
        </div>
    </>    
    );
}
 
export default User;


