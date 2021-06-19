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
    
    useEffect(() => {
      setTamaño(width < breakpoint ? "sm" : "xl")
    }, [width])

    
    return (
      <> 
          <div className="container mt-5">
              <ToggleButtonGroup className="m-2" type="radio" name="options" defaultValue={1}  >
                <ToggleButton variant="outline-secondary" size={tamaño} onClick={()=> fire.firstFilt(1)} value={1}>Todos</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={()=>  fire.firstFilt(1000)} value={0}>+$1.000</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={()=> fire.firstFilt(5000)} value={2}>+$20.000</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={()=> fire.firstFilt(40000)} value={3}>+$40.000</ToggleButton>
              </ToggleButtonGroup>
                <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={()=> fire.search("todo") }value={0}>Todos</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={()=> fire.search("consola")} value={1}>Consolas</ToggleButton>
                <ToggleButton variant="outline-secondary"  size={tamaño} onClick={()=> fire.search("arcade") }value={2}>Arcades</ToggleButton>
                <ToggleButton variant="outline-secondary"   size={tamaño} onClick={()=> fire.search("pedestal")} value={3}>Pedestales</ToggleButton>
              </ToggleButtonGroup>
          </div>
      </>
  );
}

export default SearchBar;