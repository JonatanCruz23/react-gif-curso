import { useState } from "react"
import { AddCategory, GifGrind } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    //*ESTA FUNCION AGREGA LAS NUEVAS CATEGORIAS AL ARREGLO
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // onCategories = {setCategories}
                //* AGREGA UNA PROPIEDAD QUE EJECUTA UNA FUNCION Q AGREGA CATERIAS
                onNewCategory={onAddCategory}
            />

            { /* AQUI RECORREMOS EL ARREGLO Y MOSTRAMOS LAS CATEGORIES */}

            {
                categories.map((category) => (
                    <GifGrind key={category} category={category} />
                ))
            }

        </>
    )
}
