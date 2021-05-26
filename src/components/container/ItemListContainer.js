import React, { useContext } from 'react';
import ItemList from './ItemList';
import {DataContext}  from '../../context/DataContext'



function ItemListContainer() {

	
	const [filtConsolas] = useContext(DataContext);

	const handlerClick = () => {
		
		console.log(filtConsolas)
	  }



    return ( 
      <>
	  	
		<ItemList  array={filtConsolas} handleClick={handlerClick}/>	
	  </>

    );

    
 
}
export default ItemListContainer;