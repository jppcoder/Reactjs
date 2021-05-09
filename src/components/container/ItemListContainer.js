import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {

	const [products, setProducts] = useState([])

	const handlerClick = () => {
		console.log("hola")
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
		<ItemList array={products} handleClick={handlerClick}/>
	  </>
	  
	  
	  


    );

    
 
}
export default ItemListContainer;