import React from 'react';
import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Historia from './components/container/Historia';
import Nosotros from './components/container/Nosotros';
import Carrito from './components/container/Carrito';


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
            <Route path='/carrito'>
              <Carrito />
            </Route>
            
            <Route path='/' exact>
              <ItemListContainer />
            </Route>


          </Switch>
      </BrowserRouter>
      </header>
    </div>
  
  );
}

export default App;
