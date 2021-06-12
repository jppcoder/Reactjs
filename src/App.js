import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

//componentes
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Garantia from './components/container/Garantia';
import Cart from './components/container/Cart';
import User from './components/User/User';
import Comprar from './components/container/Comprar';
import Footer from './components/container/Footer';

//context
import { CartProd } from './context/CartContext';
import { DataProd } from './context/DataContext';


//useContext



function App() {

 

  return ( 
    <DataProd>
      
        <CartProd>
        <div className="App ">
          <header className="App-header">
            <BrowserRouter> 
              
                  <NavBar />         
                  <Switch>
                    <Route path='/Comprar' exact component={Comprar} />
                    <Route path='/Garantia' exact component={Garantia} /> 
                    <Route path='/User' exact component={User} />
                    <Route path='/Cart' exact component={Cart} />
                    <Route path='/' exact component={ItemListContainer} />   
                  </Switch>
                <Footer />
            </BrowserRouter>
          </header>
        </div>
      </CartProd>
    
  </DataProd>
  );
}

export default App;
