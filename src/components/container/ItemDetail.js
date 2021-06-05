import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Contador } from './Contador';
import { DataContext }  from '../../context/DataContext'

const ItemDetail = ({handleClick}) => {

  const {id} = useParams();
  const [consolas] = useContext(DataContext);
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
              <Contador id={filter.id} key={filter.key} name={filter.name} img={filter.img} price={filter.price}  stock={filter.stock}/>
              </Card.Body>             
              <Card.Footer>
                </Card.Footer>
          </Card>  
        </div> 
        } 
      </> 
    );
}

export default ItemDetail;
