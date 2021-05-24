import React, { useContext } from 'react';
import ItemList from './ItemList';
import {DataContext}  from '../../context/DataContext'
import Cart from './Cart';

function ItemListContainer() {

	
	const [consolas] = useContext(DataContext);

	const handlerClick = () => {
		console.log(typeof consolas)
		console.log(consolas)
	  }



    return ( 
      <>
		<Cart/>
		<ItemList  array={consolas} handleClick={handlerClick}/>	
	  </>

    );

    
 
}
export default ItemListContainer;