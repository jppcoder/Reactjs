
import React from 'react'

//import
import { Row, Col, Toast } from 'react-bootstrap';


const CartelAdd = ({addToast, setAddToast, texto, img}) => {
    

  return (
    <Row >
      <Col xs={6}>
        <Toast style={{
                    position: 'absolute',
                    top: -150,
                    right: -150,
                      }} onClose={() => setAddToast(false)} show={addToast} delay={2500} autohide>
          <Toast.Header>
            <img style={{objectFit:'cover', minWidth: '5em', height:'5em'}}
              src={img}
              className="rounded mr-2"
              alt="miniatura del producto seleccionado"
            />
            <strong className="mr-auto">Felicitaciones</strong>
            
          </Toast.Header>
          <Toast.Body>{texto}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

  
  export default CartelAdd;