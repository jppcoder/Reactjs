import React, {  useEffect, useContext, useState} from 'react';
import { auth } from '../../firebase';
import { CartContext }  from '../../context/CartContext' 
import { Jumbotron, Form, Button } from 'react-bootstrap'
import  Cartel  from './../container/Cartel'
import app from '../../firebase';
import { set } from 'react-hook-form';


const User = () => {
    
    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState([])
    const [showToast, setShowToast] = useState(false)
    const [userAuth, setUserAuth] = useState([])

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then((res) => console.log(res))
            .catch(err =>  { setError(err.message); setShowToast(true)} 
            
            )
    }
    const loguearUsuario = (e) => {
    app.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    useEffect(() => {
        app.auth().onAuthStateChanged(hacer.setUser)
        console.log(hacer.user)
    }, [hacer])

    return (  
        <> 
        <Jumbotron className="container mt-5" >
        { hacer.user? 
        
        <>
        <h4>Hola {hacer.user.email}</h4>
        <Button variant="primary" type="button" onClick={() => app.auth().signOut()}>
            Sign Out
        </Button> 
        </>
         : 
        <>
            
            <Form className="container mt-5" onSubmit={registrarUsuario }>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" onChange={(e) => {setEmail(e.target.value)}} />
                    <Form.Text className="pass">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    
                    <Form.Control type="password" placeholder="Ingrese su Password" onChange={(e) => {setPass(e.target.value)}} />
                    Debe contener al menos 6 caracteres
                </Form.Group>
                <span><Cartel showToast={showToast} setShowToast={setShowToast} texto={error} /></span>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </>

    }
    </Jumbotron>
    </>    
    );
}
 
export default User;


