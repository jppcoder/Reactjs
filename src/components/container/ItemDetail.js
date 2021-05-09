import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Contador } from './Contador';


const ItemDetail = ({handleClick, productos}) => {

  const {id} = useParams();
  
  const found = productos.find(element => element.id === id);
  console.log(found)

    return ( 
      <> 
        
        <div className="container">
        <Card>
            <Card.Img variant="left" src={found.img} />
            <Card.Body>
              <Card.Title>{found.name}</Card.Title>
              <Card.Text>${found.price},00</Card.Text>
              <Card.Text>${found.desc}</Card.Text>
              <Contador stock={found.stock}/>
              </Card.Body>
              
              <Card.Footer>
              <Button onClick={handleClick}>Prueba</Button>
                </Card.Footer>
          </Card>  
        </div>  
      </> 
    );
}

export default ItemDetail;
