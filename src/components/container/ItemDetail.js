import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Contador } from './Contador';
import { DataContext }  from '../../context/DataContext'

const ItemDetail = ({handleClick}) => {

  const {id} = useParams();
  const [consolas, setConsolas] = useContext(DataContext);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    
    const found = consolas.find(element => element.id == id);
    setFilter(found)
  
  }, [consolas, id])

  

    return ( 
      <>
        { <div className="container">
         <Card>
            <Card.Img variant="left" src={filter.img} style={{ maxWidth:'400px' }} />
            <Card.Body>
              <Card.Title>{filter.name}</Card.Title>
              <Card.Text>${filter.price},00</Card.Text>
              <Card.Text>${filter.desc}</Card.Text>
              <Contador stock={filter.stock}/>
              </Card.Body>             
              <Card.Footer>
              <Button onClick={handleClick}>test boton</Button>
                </Card.Footer>
          </Card>  
        </div> 
        } 
      </> 
    );
}

export default ItemDetail;
