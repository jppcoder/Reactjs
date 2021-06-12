import React, {useContext, useState, useEffect} from 'react';

//Context
import {DataContext}  from '../../context/DataContext'
import { CartContext } from '../../context/CartContext';

//Bootstrap
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

const SearchBar = () => {
    
    const [consolas, fire] = useContext(DataContext)
    const [idProd, setIdProd, hacer, total, setTotal, unit, setUnit, showToast, setShowToast, user, setUser, width, height] = useContext(CartContext)
    const [tamaño, setTamaño] = useState("")
    const breakpoint = 620;
    console.log(tamaño)
    useEffect(() => {
      setTamaño(width < breakpoint ? "sm" : "xl")
    }, [width])

    return (
      <> 
          <div className="container mt-5">
              <ToggleButtonGroup className="m-2" type="radio" name="options" defaultValue={1}  >
                <ToggleButton variant="outline-secondary" size={tamaño} onClick={fire.todos} value={1}>Todos</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={fire.mil} value={0}>+1000</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={fire.cinco} value={2}>+5000</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={fire.diez} value={3}>+10000</ToggleButton>
              </ToggleButtonGroup>
                <ToggleButtonGroup type="radio" name="options">
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={fire.ttodos}value={0}>Todos</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={fire.consola} value={1}>Consolas</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={fire.arcade} value={2}>Arcades</ToggleButton>
                <ToggleButton variant="outline-secondary"   size={tamaño} onClick={fire.pedestal} value={3}>Pedestales</ToggleButton>
              </ToggleButtonGroup>
          </div>
      </>
  );
}

export default SearchBar;