import React, { useContext } from 'react';

//context
import { CartContext }  from '../../context/CartContext'

//bootstrap
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import de componente
import { Contador } from './Contador';

const Item = ({name,price,img,id,stock, key}) => {
    
  const [addCart] = useContext(CartContext)
  

    return ( 
      <> 
          <Card style={{ minWidth: '22em', height:'35rem' }} key={key}>
            <Card.Img variant="top" src={img} style={{objectFit:'scale-down', maxHeight:'15rem' }} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text >${price},00</Card.Text>
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
