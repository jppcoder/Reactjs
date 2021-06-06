import React from 'react';
import Item from './Item';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import SearchBar from './SearchBar';


const ItemList = ({array}) => {
    

    return (
      
        <div className="card-deck"> 
        <BrowserRouter>
            
            <Switch>
                <Route path='/items/:id'>
                    <ItemDetail  />
                </Route>

                 <Route path='/'>
                    <SearchBar />
                    <div fill className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 mb-5 ">
                        {array.map((item) =>
                        <div key={item.key}> 
                        <Item  name={item.name} price={item.price} img={item.img} stock={item.stock} id={item.id2}  key={item.key} />       
                        </div>
                        )}
                </div>
                </Route> 


            </Switch>
        
        </BrowserRouter>



        
      


        </div>  
    );
}

export default ItemList;