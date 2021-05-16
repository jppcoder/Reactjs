import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Contador } from './Contador';
import { Link } from 'react-router-dom';
import { CartContext, CartProd }  from '../../context/CartContext'

const Item = ({name,price,img,id,stock}) => {
    
  const [idProd, setIdProd, addCart] = useContext(CartContext)

  
  
    return ( 
      <> 
        
        <div className="col"
          key={id}>
          <Card style={{ width: '18rem', height:'40rem' }}>
            <Card.Img variant="top" src={img} style={{ maxHeight:'15rem' }} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>${price},00</Card.Text>
              <Contador id={id} stock={stock} agregar={addCart}/>
              </Card.Body>
              
              <Button onClick={ ()=> addCart([...idProd, id])  }>Agregar al carrito</Button>
              <Card.Footer>
                <Link to={`/items/${id}`}>Mas Informacion</Link>
                </Card.Footer>
          </Card>  
        </div>  
      </> 
    );
}

export default Item;
