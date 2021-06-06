import React, {useState} from 'react'

//Bootstrap
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'


const ToggleSearch= ({fire}) => {
    const [value, setValue] = useState([1, 3]);
  
  
    const handleChange = (val) => setValue(val);
  
    return (
        <> 
            <div className="container">
                <ToggleButtonGroup className="m-2" type="radio" name="options" defaultValue={1}  >
                    <ToggleButton variant="outline-secondary" sm onClick={fire.todos} value={1}>Todos</ToggleButton>
                    <ToggleButton variant="outline-secondary" sm onClick={fire.mil} value={0}>+1000</ToggleButton>
                    <ToggleButton variant="outline-secondary" sm onClick={fire.cinco} value={2}>+5000</ToggleButton>
                    <ToggleButton variant="outline-secondary" sm onClick={fire.diez} value={3}>+10000</ToggleButton>
                </ToggleButtonGroup>
                    <ToggleButtonGroup type="radio" name="options">
                    <ToggleButton variant="outline-secondary" sm onClick={fire.ttodos}value={0}>Todos</ToggleButton>
                    <ToggleButton variant="outline-secondary" onClick={fire.consola} value={1}>Consolas</ToggleButton>
                    <ToggleButton variant="outline-secondary" onClick={fire.arcade} value={2}>Arcades</ToggleButton>
                    <ToggleButton variant="outline-secondary" onClick={fire.pedestal} value={3}>Pedestales</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </>
    );
  }
  
  export default ToggleSearch;