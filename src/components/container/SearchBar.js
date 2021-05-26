import React, {useContext, useEffect, useState} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import {DataContext}  from '../../context/DataContext'
import ToggleSearch from './ToggleSearch';

const SearchBar = ({}) => {
    
    const [consolas, fire] = useContext(DataContext)
    const [variable, setVariable] = useState(["hola"])
  

    return (
      <>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
        </InputGroup>
        
        <ToggleSearch fire={fire}/>
      </>

    )
}

export default SearchBar;