import React, { useState } from "react";


export const Contador = ({stock, agregar, id}) => {
  
  const [value, setValue] = useState(0);
  const [itemStock, setItemStock] = useState(stock);
  
  function show () {
    alert(`Agregaste ${value} al carrito`);
    setItemStock(itemStock - value);
    console.log(itemStock);
  }
  
  function show2 () {
    alert(`No hay mas stock`);
  }

  const add = () => {
    itemStock > 0 ? (value < itemStock ? setValue(value + 1) :  show2()) 
    
    
    : setValue(value);
    
  };

  const remove = () => {
     value > 0 ? setValue(value - 1) : setValue(value);
  };

  return (
    <>  
        <p>Stock: {itemStock}</p>
        <p>Cantidad {value}</p>
        <button className="btn btn-primary plusCircle" onClick={add}>
        Agregar
        </button>
         <button onClick={remove} className="btn btn-danger">
        Quitar
        </button>
        <button className="btn btn-warning" onClick={() => agregar([{id: id, cantidad: value}])}>
        {" "}
        Enviar al carrito{" "}
        </button>
    </>
    );
};
