import React, { useContext } from 'react';

//Context
import {DataContext}  from '../../context/DataContext'

//Bootstrap
import Spinner from 'react-bootstrap/Spinner'

//imports componentes
import ItemList from './ItemList';


function ItemListContainer() {

	
	const [filtConsolas, fire, loading] = useContext(DataContext);

    return ( 
      <>
	  	{ loading ? <div className="spinner"><Spinner animation="border" className=" v-center" /></div> :
		<ItemList  array={filtConsolas} />}	
	  </>

    );

}
export default ItemListContainer;