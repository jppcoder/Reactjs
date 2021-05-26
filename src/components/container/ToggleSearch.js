import React, {useState} from 'react'
import { ToggleButton } from 'react-bootstrap'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

const ToggleSearch= ({fire}) => {
    const [value, setValue] = useState([1, 3]);
  
    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => setValue(val);
  
    return (
        <> 
            <div>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mr-5" >
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