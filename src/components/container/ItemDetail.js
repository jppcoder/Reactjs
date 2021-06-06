import React, { useContext, useEffect, useState } from 'react';
import { Card , CardGroup} from 'react-bootstrap';
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
        

         <div className="container">
        
        <CardGroup>
  <Card className="bg-dark text-white">
  <Card.Img variant="left" src={filter.img} style={{objectFit:'cover'}} />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
    <Card.Footer>

    <Contador id={filter.id} key={filter.key} name={filter.name} img={filter.img} price={filter.price}  stock={filter.stock}/>
    </Card.Footer>
</Card> 
</CardGroup>

        </div> 
      </> 
    );
}





export default ItemDetail;


{/* <Card>
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
 */}