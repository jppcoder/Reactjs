import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Contador } from './Contador';


const ItemDetail = ({name,desc,price,img,id,stock}) => {
    
  useParams();
  console.log(useParams);

    return ( 
      <> 
        
        <div className="col Prueba"
          key={id}>
          <Card style={{ width: '100%' ,height: '600px'}}>
            <Card.Img variant="top" src={img} style={{ width: '200px' }} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {desc}
              </Card.Text>
              <Card.Text>${price}</Card.Text>
              <Contador stock={stock}/>
              </Card.Body>
          </Card>  
        </div>  
      </> 
    );
}

export default ItemDetail;
