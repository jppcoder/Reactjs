import React, {  useContext, useState} from 'react';

//Context
import { CartContext }  from '../../context/CartContext' 
import { DataContext }  from '../../context/DataContext'

//bootstrap
import {  Button, Nav, Tab, Tabs } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

//imports componentes
import app from '../../firebase';
import Login from './Login'
import Signup from './Signup'
import Orders from '../container/Orders';



const User = () => {
    
    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)
    const [filtConsolas, fire, loading, setLoading, orderList, setOrderList, mail, setMail] = useContext(DataContext)
    const [error, setError] = useState([])
    const [showToast, setShowToast] = useState(false)
 
    const logout = (e) => {
        e.preventDefault()
        app.auth().signOut()
        hacer.setCondicion(false);
       
    }
    
    return (  
        <> 
            <div className="container mt-5 rounded p-3" style={{ maxWidth: '35em', backgroundColor:"#f8f9fa" }} >
            { mail? 
            
            <>
                <h4>Hola! Que bueno que nos visites {mail}</h4>
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
            <Orders  />
            </div>
        </>    
    );
}
 
export default User;


