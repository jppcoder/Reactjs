import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Contador } from './Contador';
import { Link } from 'react-router-dom';

const Item = ({name,price,img,id,stock, handleClick}) => {
    

    return ( 
      <> 
        
        <div className="col"
          key={id}>
          <Card style={{ width: '18rem', height:'40rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>${price},00</Card.Text>
              <Contador stock={stock}/>
              </Card.Body>
              <Button onClick={handleClick}>Prueba</Button>
              <Card.Footer>
                <Link to={`/items/${id}`}>Mas Informacion</Link>
                </Card.Footer>
          </Card>  
        </div>  
      </> 
    );
}

export default Item;
