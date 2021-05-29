import React, { useContext } from 'react';
import ItemList from './ItemList';
import {DataContext}  from '../../context/DataContext'
import Spinner from 'react-bootstrap/Spinner'


function ItemListContainer() {

	
	const [filtConsolas, fire, loading, setLoading] = useContext(DataContext);

	const handlerClick = () => {
		
		console.log(filtConsolas)
	  }



    return ( 
      <>
	  	{ loading ? <div className="spinner"><Spinner animation="border" className=" v-center" /></div> :
		<ItemList  array={filtConsolas} handleClick={handlerClick}/>}	
	  </>

    );

    
 
}
export default ItemListContainer;