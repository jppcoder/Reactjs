import React, { useState, useContext, useEffect } from 'react'

//Context
import { CartContext }  from '../../context/CartContext'

//Bootstrap
import { Button } from 'react-bootstrap'

//imports de componentes
import  Cartel  from './Cartel';


export const Contador = ({stock, id, name, price, img}) => {
  
  const [idProd, setIdProd] = useContext(CartContext)
  const [value, setValue] = useState(0);
  const [tempStock, setTempStock] = useState(stock)
  const [estado, setEstado] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const add = () => {
    if (tempStock > 0) {
    setValue(value + 1);
    setTempStock(tempStock - 1);
    }
    else {
      setShowToast(true)
    }  
  };

  const remove = () => {
     //value > 0 ? setValue(value - 1) : setValue(value);
     if (value > 0) {
      setValue(value - 1);
      setTempStock(tempStock + 1);}
  };

  const addCart = (x, cantidad) => {
  // show(); muestra el producto agregado
  // si existe el id en el array, uso un ternario para agregar mas stock al id existente
  idProd.some(i => i.id === id ) ? 
  // localizo el id si es que existe en el array
    idProd.find(i => ( i.id === id ) && ( i.cantidad += value) ) && setIdProd ([...idProd])
    
    : 
  //en caso que no exista previamente, se agrega al array el id de producto y la cantidad
  setIdProd([...idProd, ...x])  
  
  }
  
  useEffect(() => { 
    value > 0 ? setEstado(true) : setEstado(false)

  }, [value])

  return (
    <>  
        <p>Stock: {tempStock}</p>

        <Button className="btn btn-primary"  onClick={remove}>
        -   
        </Button>
        <span className="m-2">   {value}    </span>
         <Button onClick={add} className="btn btn-danger">
        +  
        </Button>
        <br></br>
        <Button disabled={!estado} className="btn btn-warning mt-2" onClick={() => addCart([{id: id, cantidad: value, name: name, price: price, img: img, stock: stock}])}>
        Agregar al carrito
        </Button>
        
        <Cartel showToast={showToast} setShowToast={setShowToast} texto={"no hay mas stock"}/>
    </>
    );
};
