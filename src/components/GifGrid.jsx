import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const { images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {
        isLoading && <h1>Cargando...</h1>
      }
      <div className="card-grid">
        {
          images.map( img =>  (
              <GifItem key={img.id} { ...img} />
          ))
        } 
      </div>
      
    </>
  )
}
