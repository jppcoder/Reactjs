import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Contador } from './Contador';
import { Link } from 'react-router-dom';
import { CartContext }  from '../../context/CartContext'

const Item = ({name,price,img,id,stock, key}) => {
    
  const [addCart] = useContext(CartContext)

    return ( 
      <> 
        
        
          <Card style={{ minWidth: '22em', height:'35rem' }} key={key}>
            <Card.Img variant="top" src={img} style={{ maxHeight:'15rem' }} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text mb-3 >${price},00</Card.Text>
              <Contador id={id} key={key} stock={stock} agregar={addCart} name={name} img={img} price={price}/>
              </Card.Body>
              <Card.Footer>
                <Link to={`/items/${id}`}>Mas Informacion</Link>
                </Card.Footer>
          </Card>  
         
      </> 
    );
}

export default Item;
