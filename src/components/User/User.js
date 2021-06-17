import React, {  useContext, useState} from 'react';

//Context
import { CartContext }  from '../../context/CartContext' 
import { DataContext }  from '../../context/DataContext'

//bootstrap
import {  Button, Tab, Tabs } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {  ArrowLeftCircleFill } from 'react-bootstrap-icons';

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
            <LinkContainer to="/">
                <ArrowLeftCircleFill className="d-flex mt-3 ml-3" size={30}/>
            </LinkContainer>  
            
            <div className="container mt-5 rounded p-3" style={{ maxWidth: '40em', backgroundColor:"#f8f9fa" }} >
            { mail? 
            
            <>
                <h4>Hola! Que bueno que nos visites {mail}</h4>
                <Button variant="danger" type="button" className="m-3" onClick={logout}>
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
            { orderList.length?   <Orders  /> : <></> 
            }
        </>    
    );
}
 
export default User;


