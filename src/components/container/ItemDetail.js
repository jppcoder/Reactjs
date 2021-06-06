import React, { useContext, useEffect, useState } from 'react';

//Context
import { DataContext }  from '../../context/DataContext'
import { useParams } from 'react-router';

//Bootstrap
import { Card , CardGroup} from 'react-bootstrap';

//import de componentes
import { Contador } from './Contador';

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
        <div className="container mt-5">
          <CardGroup >
            <Card className="text-white border-0">
            <Card.Img variant="left" src={filter.img} style={{objectFit:'cover'}} />
              <Card.ImgOverlay>
                           
                <Card.Text text='dark'>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card style={{ width: '18rem'}} className="border-0">
            <Card.Body>
            <Card.Title>{filter.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text className="text-left">${filter.desc}</Card.Text>
              <Card.Text>${filter.price},00</Card.Text>
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