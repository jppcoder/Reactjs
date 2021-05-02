import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Contador } from './Contador';


const ItemDetail = ({name,desc,price,img,id,stock}) => {
    

    return ( 
      <> 
        
        <div className="col"
          key={id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {desc}
              </Card.Text>
              <Contador stock={stock}/>
              </Card.Body>
          </Card>  
        </div>  
      </> 
    );
}

export default ItemDetail;
