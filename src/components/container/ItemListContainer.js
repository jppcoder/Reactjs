import React, { useState, useEffect, useContext } from 'react';
import ItemList from './ItemList';
import {CartContext}  from '../../context/CartContext'
import {DataContext}  from '../../context/DataContext'
import Cart from './Cart';

function ItemListContainer() {

	const [products, setProducts] = useState([])
	const [items, setItems] = useContext(CartContext);
	const [consolas, setConsolas] = useContext(DataContext);

	const handlerClick = () => {
		console.log(typeof consolas)
		console.log(consolas)
	  }


	useEffect(() => {
		fetch("json/prod.json")
		.then(response => response.json())
		.then(datos => {
			setProducts(datos)
		})

	},[])

	

    return ( 
      <>
		<Cart/>
		<ItemList  array={consolas} handleClick={handlerClick}/>
		
	  </>
	  
	  
	  


    );

    
 
}
export default ItemListContainer;