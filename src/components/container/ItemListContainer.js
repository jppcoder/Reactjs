import React, { useContext } from 'react';

//Context
import {DataContext}  from '../../context/DataContext'


//imports componentes
import ItemList from './ItemList';


function ItemListContainer() {

	
	const [filtConsolas, fire, loading] = useContext(DataContext);

    return ( 
      <>
		<ItemList  array={filtConsolas} loading={loading} />	
	  </>

    );

}
export default ItemListContainer;