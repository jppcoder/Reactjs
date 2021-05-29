import React, { useState, useContext, useEffect } from 'react'
import { ShieldShaded } from 'react-bootstrap-icons';
import { CartContext }  from '../../context/CartContext'
import  Cartel  from './Cartel';


export const Contador = ({stock, id, name, price, img}) => {
  
  const [value, setValue] = useState(0);
  const [idProd, setIdProd] = useContext(CartContext)
  const [tempStock, setTempStock] = useState(stock)
  const [estado, setEstado] = useState(false)
  const [saldo, setSaldo] = useState("")
  const [showToast, setShowToast] = useState(false)

  function show () {
    alert(`Agregaste ${value} al carrito`);  
  }
  
  function show2 () {
    alert(`No hay mas stock`);
  }

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
  idProd.some(i => i.id == id ) ? 
  // localizo el id si es que existe en el array
    idProd.find(i => ( i.id == id ) && ( i.cantidad += value) ) && setIdProd ([...idProd])
    
    : 
  //en caso que no exista previamente, se agrega al array el id de producto y la cantidad
  setIdProd([...idProd, ...x])  
  
  }
  
  useEffect(() => {
    
    
    value > 0 ? setEstado(true) : setEstado(false)

  }, [value, setEstado])

  return (
    <>  
        <p>Stock: {tempStock}</p>

        <button className="btn btn-primary plusCircle" onClick={add}>
          +  
        </button>
        <span className="m-2">   {value}    </span>
         <button onClick={remove} className="btn btn-danger">
        -  
        </button>
        <br></br>
        <button disabled={!estado} className="btn btn-warning mt-2" onClick={() => addCart([{id: id, cantidad: value, name: name, price: price, img: img}])}>
        Agregar al carrito
        </button>
        <h5>{saldo}</h5>
        <Cartel showToast={showToast} setShowToast={setShowToast} texto={"no hay mas stock"}/>
    </>
    );
};
