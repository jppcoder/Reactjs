import React, {  useEffect, useContext, useState} from 'react';
import { auth } from '../../firebase';
import { CartContext }  from '../../context/CartContext' 
import { Jumbotron, Form, Button, Nav } from 'react-bootstrap'
import  Cartel  from './../container/Cartel'
import app from '../../firebase';



const Signup = () => {
    
    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit, user, setUser] = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState([])
    const [showToast, setShowToast] = useState(false)
    

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then(() => { setError("Usuario creado"); setShowToast(true)})
            .catch(err =>  { setError(err.message); setShowToast(true)} 
            
            )
            hacer.setCondicion(true);
    }


    useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
          if (user) {
            hacer.setUser(user.email)
  
          } else {
            hacer.setUser(null)
          }
        });
        
      }, [hacer])
    return (  
        <> 
            <div className="container" >
        
                <Form className="container" onSubmit={registrarUsuario } >
                <h4 className="p-2 mb-3"> Registrese en el sitio </h4>
                <Form.Group controlId="email" > 
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" onChange={(e) => {setEmail(e.target.value)}} />
                    <Form.Text className="pass">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    
                    <Form.Control className="mt-3 mb-3" type="password" placeholder="Ingrese su Password" onChange={(e) => {setPass(e.target.value)}} />
                    Debe contener al menos 6 caracteres
                </Form.Group>
                <span><Cartel showToast={showToast} setShowToast={setShowToast} texto={error} /></span>
                <Button variant="primary" type="submit" className="mt-3 mb-3">
                    Registrarse
                </Button>
            </Form>
        
    </div>
    </>    
    );
}
 
export default Signup;


