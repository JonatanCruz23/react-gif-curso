import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

// ESTE CUSTON HOOK SIRVE PARA EXTRAER Y CARGAR LAS IMAGENES
export const useFectchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
    setIsLoading(false);
  }
// ESTE HOOK EVITA LA RECARGA DE MULTIPLES PETICIONES POR RENDERIZACION
  useEffect(() => {
    getImages();
  }, [])

// ESTAMOS RETORMANDO LAS IMAGINES Y EL ISLOADING AL COMPONENTE GifGrid
  return {
    images,
    isLoading
  }
}
