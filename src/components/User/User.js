import React, {  useEffect, useContext, useState} from 'react';
import { auth } from '../../firebase';
import { CartContext }  from '../../context/CartContext' 
import {  Button, Nav, Tab, Tabs } from 'react-bootstrap'
import app from '../../firebase';
import Login from './Login'
import Signup from './Signup'


const User = () => {
    
    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState([])
    const [showToast, setShowToast] = useState(false)
    

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then((res) => console.log(res))
            .catch(err =>  { setError(err.message); setShowToast(true)} 
            
        )
    }
  

    useEffect(() => {
        app.auth().onAuthStateChanged(hacer.setUser)
        console.log("useffect", hacer.user)
        
    }, [hacer])

    return (  
        <> 
            <div className="container mt-5 rounded p-3" style={{ maxWidth: '35em', backgroundColor:"#f8f9fa" }} >
            { hacer.user? 
            
            <>
            <h4>Hola {hacer.user.email}</h4>
            <Button variant="primary" type="button"  onClick={() => app.auth().signOut()}>
                Sign Out
            </Button> 
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


