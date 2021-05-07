import React from 'react';
import { Card } from 'react-bootstrap';
import { Contador } from './Contador';
import { Link } from 'react-router-dom';

const Item = ({name,price,img,id,stock}) => {
    

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
              <Card.Footer>
                <Link to={`/${id}`}>Mas Informacion</Link>
                </Card.Footer>
          </Card>  
        </div>  
      </> 
    );
}

export default Item;
