import React, {useContext} from 'react'
import { CartContext }  from '../../context/CartContext'
//import
import { Modal, Button  } from 'react-bootstrap';


const Exit = ({showToast, setShowToast, texto}) => {
  const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit] = useContext(CartContext)
  
  const dotwo = () => {
      setShowToast(false)
      hacer.vaciar()
  }
  return (
    <>
      <Modal show={showToast}>
          <Modal.Header closeButton onClose={dotwo} >
            <Modal.Title>Felicitaciones !!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{texto}</Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={dotwo} >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

  
  export default Exit;