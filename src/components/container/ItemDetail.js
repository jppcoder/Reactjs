import React, { useContext, useEffect, useState } from 'react';

//Context
import { DataContext }  from '../../context/DataContext'
import { useParams } from 'react-router';

//Bootstrap
import { Card , CardGroup, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

//import de componentes
import { Contador } from './Contador';

const ItemDetail = ({handleClick}) => {

  const {id} = useParams();
  const [consolas] = useContext(DataContext);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    
    const found = consolas.find(element => element.id2 == id);
    setFilter(found)
    
  }, [consolas, id])

   
    return ( 
      <>
        <div className="container mt-5">
          <CardGroup >
            <Card className="text-white border-0">
              <Card.Img variant="left" src={filter.img} style={{objectFit:'cover'}} />  
            </Card>
            <Card style={{ width: '18rem'}} className="border-0">
              <Card.Body>
                <Card.Title>{filter.name}</Card.Title>
                  <Card.Text className="text-left">${filter.desc}</Card.Text>
                  <Card.Text>${filter.price},00</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Contador id={filter.id} key={filter.key} name={filter.name} img={filter.img} price={filter.price}  stock={filter.stock}/>
                <LinkContainer to="/"><Button variant="primary">Regresar</Button></LinkContainer>
              </Card.Footer>
            </Card> 
          </CardGroup>
        </div> 
      </> 
    );
}
export default ItemDetail;


