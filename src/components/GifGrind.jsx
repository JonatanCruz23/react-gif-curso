import React, { useEffect, useState } from "react";

import { useFectchGifs } from "../hooks/useFectchGifs";
import { GifItem } from "./GifItem";


export const GifGrind = ({ category }) => {

  // aqui estamos utilizando el custon hook que trae las imagenes y el isLoading
  const { images, isLoading } = useFectchGifs(category);

  console.log({ images, isLoading });


  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando...</h2>
        /* isLoading ? <h2>Cargando...</h2> : null */
      }

      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }

      </div>
    </>
  )
}
