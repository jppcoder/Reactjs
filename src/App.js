import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

//componentes
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Historia from './components/container/Historia';
import Nosotros from './components/container/Nosotros';
import Carrito from './components/container/Cart';
import Cart from './components/container/Cart';


//context
import { CartProd } from './context/CartContext.js';
import { DataProd } from './context/DataContext.js';



function App() {
  return ( 
    <div className="App container fluid">
      <header className="App-header">
      <BrowserRouter> 
        <DataProd>
          <CartProd> 
            <NavBar />         
            <Switch>
              <Route path='/Historia' exact component={Historia} />
              <Route path='/Nosotros' exact component={Nosotros} /> 
              <Route path='/Cart' >
                    <Cart />
              </Route>  
              <Route path='/' exact component={ItemListContainer} />   
            </Switch>
          </CartProd>
        </DataProd>
     
      </BrowserRouter>
      </header>
    </div>
  
  );
}

export default App;
