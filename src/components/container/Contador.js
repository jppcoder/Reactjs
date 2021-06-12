import React, { useState, useContext, useEffect } from 'react'

//Context
import { CartContext }  from '../../context/CartContext'

//Bootstrap
import { Button } from 'react-bootstrap'
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';

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
     if (value > 0) {
      setValue(value - 1);
      setTempStock(tempStock + 1);}
  };

  const addCart = (x, cantidad) => {
  
  idProd.some(i => i.id === id ) ? 

    idProd.find(i => ( i.id === id ) && ( i.cantidad += value) ) && setIdProd ([...idProd])  
    : 
    setIdProd([...idProd, ...x])  
  
  }
  
  useEffect(() => { 
    
    value > 0 ? setEstado(true) : setEstado(false)

  }, [value])

  return (
    <>  
      <p>Stock: {tempStock}</p>
      <DashCircle onClick={remove} size={28}/>
      <span className="m-2">   {value}    </span>
      <PlusCircle onClick={add} size={28} /> 
      <br></br>
      <Button disabled={!estado} className="btn btn-warning mt-2 " onClick={() => addCart([{id: id, cantidad: value, name: name, price: price, img: img, stock: stock}])}>
        Agregar al carrito
      </Button>
      <Cartel showToast={showToast} setShowToast={setShowToast} texto={"no hay mas stock"}/>
    </>
    );
};
