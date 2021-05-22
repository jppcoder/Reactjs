import React, { useState, useContext, useEffect } from 'react'
import { CartContext }  from '../../context/CartContext'



export const Contador = ({stock, id, name, price, img}) => {
  
  const [value, setValue] = useState(0);
  const [idProd, setIdProd] = useContext(CartContext)
  const [tempStock, setTempStock] = useState(stock)

 

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
    else {show2()
    }  
  };

  const remove = () => {
     //value > 0 ? setValue(value - 1) : setValue(value);
     if (value > 0) {
      setValue(value - 1);
      setTempStock(tempStock + 1);}

  };

  const addCart = (x, cantidad) => {
  // si existe el id en el array, uso un ternario para agregar mas stock al id existente
  idProd.some(i => i.id == id ) ? 
  // localizo el id si es que existe en el array
    idProd.find(i => ( i.id == id ) && ( i.cantidad += value) ) && setIdProd ([...idProd])
    
    : 
  //en caso que no exista previamente, se agrega al array el id de producto y la cantidad
  setIdProd([...idProd, ...x])  
  
  }
  

  return (
    <>  
        <p>Stock: {tempStock}</p>
        <p>Cantidad {value}</p>
        <button className="btn btn-primary plusCircle" onClick={add}>
        Agregar
        </button>
         <button onClick={remove} className="btn btn-danger">
        Quitar
        </button>
        <button className="btn btn-warning" onClick={() => addCart([{id: id, cantidad: value, name: name, price: price, img: img}])}>
        {" "}
        Enviar al carrito{" "}
        </button>
        
    </>
    );
};
