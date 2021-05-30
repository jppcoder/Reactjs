import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

//componentes
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Historia from './components/container/Historia';
import Nosotros from './components/container/Nosotros';
import Cart from './components/container/Cart';
import User from './components/User/User';

//context
import { CartProd } from './context/CartContext';
import { DataProd } from './context/DataContext';

//useContext

import { CartContext }  from '../../context/CartContext'

function App() {

  const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)

  return ( 
    <DataProd>
      
        <CartProd>
        <div className="App">
          <header className="App-header">
            <BrowserRouter> 
              
                  <NavBar />         
                  <Switch>
                    <Route path='/Historia' exact component={Historia} />
                    <Route path='/Nosotros' exact component={Nosotros} /> 
                    { hacer.condicion = true ? 
                    <Route path='/User' exact component={User} />
                    :
                    <Route path='/Cart' >
                      <Cart />
                    </Route>  
                    }
                    <Route path='/' exact component={ItemListContainer} />   
                  </Switch>
                
            </BrowserRouter>
          </header>
        </div>
      </CartProd>
    
  </DataProd>
  );
}

export default App;
