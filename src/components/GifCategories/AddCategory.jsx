import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

  const [InputValue, setInputValue] = useState('')

  const handleInputSubmit = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      
     // Validacion de datos
     if(InputValue.trim().length >= 1){
      setCategories([InputValue]);
     }else{
       alert('por favor escriba algo')
     }

    // reseteo del input
    setInputValue('')
  }

  //Render
  return (
     <form onSubmit={handleSubmit}>
       <input type="text" value={InputValue} className="categoryInput" placeholder="¿Que estas buscando?"  
       onChange={ handleInputSubmit } />
       <button className='searchButton'><span role="img" aria-label='emoji'>🔍 </span> Buscar </button>
    </form>
  )
}

AddCategory.propTypes ={
  setCategories: PropTypes.func.isRequired

}



export default AddCategory
