import React from 'react'

const GifGridItem = ({gif}) => {
  return (
    <div className='col-4'>
     <div className='card'>
      <img className='card-img-top' src={gif.image} alt={gif.title}/>
      <p className='card-title'>{gif.title}</p> 
     </div>
    </div>
  )
}

export default GifGridItem;