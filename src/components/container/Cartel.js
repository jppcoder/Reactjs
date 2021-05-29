
import React, {useContext, useState} from 'react'
import Toast from 'react-bootstrap/Toast'
import { Row, Col, Button } from 'react-bootstrap';
import { CartContext }  from '../../context/CartContext'

const Cartel = ({showToast, setShowToast, texto}) => {
    

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
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

  
  export default Cartel;