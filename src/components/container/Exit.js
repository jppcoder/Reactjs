import React, {useContext} from 'react'
import { CartContext }  from '../../context/CartContext'
//import
import { Row, Col, Toast } from 'react-bootstrap';


const Exit = ({showToast, setShowToast, texto}) => {
  const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)
  
  const dotwo = () => {
      setShowToast(false)
      hacer.vaciar()
  }
  return (
    <Row >
      <Col xs={6}>
        <Toast style={{
                    position: 'absolute',
                    top: -150,
                    right: -150,
                      }} onClose={dotwo} show={showToast} >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Atencion</strong>
            
          </Toast.Header>
          <Toast.Body>{texto}</Toast.Body>
        </Toast>
      </Col>
      
    </Row>
  );
}

  
  export default Exit;