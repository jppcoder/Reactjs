import React, { useContext } from 'react';
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
        <NavBar />         
          <Switch>
            <Route path='/Historia' exact>
              <Historia />
            </Route>
            
            <Route path='/Nosotros' exact>
              <Nosotros />
            </Route>
              
                <CartProd> 
                  <DataProd>
                    <Route path='/carrito'>
                      <Carrito />
                    </Route>
                    
                    <Route path='/' exact>
                      <ItemListContainer />
                      </Route>
                    
                    <Route path='/cart' exact>
                      <Cart />
                    </Route>
                  </DataProd>
                </CartProd>
                
          </Switch>
      </BrowserRouter>
      </header>
    </div>
  
  );
}

export default App;
