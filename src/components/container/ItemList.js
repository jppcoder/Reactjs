import React from 'react';
import Item from './Item';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemList = ({products}) => {
    

    return (
    <BrowserRouter>  
      <Switch>
        <Route> 
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 mb-5"> 
          {products.map((item, index) =>
              <div key={item.id}>
              <Item  name={item.name} price={item.price} desc={item.desc}  img={item.img} stock={item.stock}/>       
              </div>
              )}
          </div>
        </Route>
        <Route>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 mb-5"> 
          {products.map((item, index) =>
              <div key={item.id}>
              <ItemDetail  name={item.name} price={item.price} desc={item.desc}  img={item.img} stock={item.stock}/>       
              </div>
              )}
          </div>  
        </Route>    
      </Switch>
    </BrowserRouter>
    );

}

export default ItemList;