import { useState } from "react"

// EXTRAEMOS LA PROPIEDAD onNewCategory QUE VIENE POR PROPS
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    // funcion que guarda en setinputValue lo que esta entrando al input
    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }
    // FUNCION Q ENVIA LA INFORMACION DEL INPUT A onNewCategory y evita el refrech
    const onSubmit = (event) => {
        
        event.preventDefault();
        if (inputValue.trim().length <= 1) return

        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
