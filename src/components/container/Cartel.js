
import React from 'react'

//import
import { Row, Col, Toast } from 'react-bootstrap';


const Cartel = ({showToast, setShowToast, texto}) => {
    

  return (
    <Row >
      <Col xs={6}>
        <Toast style={{
                    position: 'absolute',
                    top: -150,
                    right: -150,
                      }} onClose={() => setShowToast(false)} show={showToast} delay={3500} autohide>
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