import React, {Fragment} from 'react'
// Custom Hooks
import {useFetchGif} from '../../hooks/useFetchGif';
// Component
import GifGridItem from './GifGridItem';



const GifGrid = ({category}) => {

  const {data:images, loading} = useFetchGif(category);

  return (
    <Fragment>

    <span className='resultadoDe'>Todos los resultados de: </span>
    <h2 className='categoriaBuscada'>{category}</h2>

    <div className='row align-items-center'>

      {images.map(gif => (
        <GifGridItem key={gif.id} gif={gif} category={category} />
      ))
      }

    </div>

    

    </Fragment>
  )
}

export default GifGrid;
