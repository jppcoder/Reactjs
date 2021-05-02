import React from 'react';
import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";






function App() {
  return ( 
    <div className="App container fluid">
      <header className="App-header">
      <BrowserRouter> 
        <NavBar />         
        <ItemListContainer className="intro"/>
      </BrowserRouter>
      </header>
    </div>
  
  );
}

export default App;
