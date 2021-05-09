import React from 'react';
import Item from './Item';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemList = ({handleClick, array}) => {
    

    return (
      
        <div className="card-deck"> 
        <BrowserRouter>
            <Switch>
                <Route path='/items/:id' >
                    <ItemDetail  productos={array} />
                </Route>

                 <Route path='/'>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 mb-5">
                        {array.map((item, index) =>
                        <div key={item.name}> 
                        <Item  name={item.name} price={item.price} img={item.img} stock={item.stock} id={item.id} handleClick={handleClick} />       
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