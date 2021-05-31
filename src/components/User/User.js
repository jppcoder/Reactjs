import React, {  useEffect, useContext, useState} from 'react';
import { auth } from '../../firebase';
import { CartContext }  from '../../context/CartContext' 
import {  Button, Nav, Tab, Tabs } from 'react-bootstrap'
import app from '../../firebase';
import Login from './Login'
import Signup from './Signup'
import {LinkContainer} from 'react-router-bootstrap'

const User = () => {
    
    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState([])
    const [showToast, setShowToast] = useState(false)
    

    
    const logout = (e) => {
        e.preventDefault()
        app.auth().signOut()
        hacer.setCondicion(false);
       
    }

    useEffect(() => {
        app.auth().onAuthStateChanged(hacer.setUser);
        

    }, [hacer])

    return (  
        <> 
            <div className="container mt-5 rounded p-3" style={{ maxWidth: '35em', backgroundColor:"#f8f9fa" }} >
            { hacer.user? 
            
            <>
                <h4>Hola! Que bueno que nos visites {hacer.user.email}</h4>
                <Button variant="danger" type="button" className="m-3" onClick={logout}>
                    Sign Out
                </Button> 
                <LinkContainer to="/">
                    <Button variant="primary" className=" m-3" > Regresar </Button>
                </LinkContainer>
            </>
            : 
            <Tabs defaultActiveKey="Signup" transition={false} id="noanim-tab-example" >
                <Tab eventKey="Signup" title="Signup" style={{  backgroundColor:"white" }} >
                    <Signup />
                </Tab>
                <Tab eventKey="Login" title="Login" style={{  backgroundColor:"white" }}>
                    <Login />
                </Tab>
               
            </Tabs>    
            }
        
            </div>
        </>    
    );
}
 
export default User;


