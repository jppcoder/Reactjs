import React from 'react';
import Item from './Item';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemList = ({products}) => {
    

    return (
      
        <div className="card-deck"> 
        <BrowserRouter>
            <Switch>
                <Route path='/filter'>
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mt-5 mb-5">
                    {products.map((filter, index) =>
                    <div key={filter.id}> 
                    <ItemDetail  name={filter.name} price={filter.price} desc={filter.desc}  img={filter.img} stock={filter.stock}/>       
                    </div>
                    )}
                    </div>   
                </Route>
                
                <Route path='/filt'>
                    <div>
                        {products.filter(person => person.price > 1000).map(filteredPerson => (
                            <li>
                            {filteredPerson.price}
                            </li>
                        ))}
                    </div>

                </Route>



                <Route path='/' exact>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 mb-5">
                    {products.map((item, index) =>
                    <div key={item.name}> 
                    <Item  name={item.name} price={item.price} img={item.img} stock={item.stock}/>       
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