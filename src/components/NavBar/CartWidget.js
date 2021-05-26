import React, {  useEffect, useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { CartContext }  from '../../context/CartContext'


const CartWidget = () => {
    
  const [idProd] = useContext(CartContext)
  const [estado, setEstado] = useState(false)
  const [widget, setWidget] = useState([]);

  useEffect(() => {
    const widgetunit = idProd.reduce((a,b)=>(a + b.cantidad),0)
    setWidget(widgetunit)
    
  }, [idProd])

  useEffect(() => {
    
    if (widget > 0) { setEstado("activo")} else { setEstado("noshow")}
  }, [widget])

  
  return (  
      <>
      <div>
        {/* <Cart size={25} color="white"></Cart> */}
        <Link to="/Cart"><img  src="https://res.cloudinary.com/dhngiwzze/image/upload/v1621891195/cart_auc1pl.png" style={{ maxWidth:'30px', maxHeight:'30px' }} ></img></Link>
        
		  <Badge pill variant="warning" className={estado}>
        {widget}
		  </Badge>{' '}
      </div>  
      </>
    );
}
 
export default CartWidget;