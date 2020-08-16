import React, { Fragment, useState } from 'react';


// Components //
import AddCategory from './components/GifCategories/AddCategory';
import GifGrid from './components/GifCategories/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([''])


  return (
    <Fragment>
      
      <h1 id='title'>Gif Expert App</h1>

      <AddCategory setCategories={setCategories} />
      <hr/>
      
      
      <section>{ 
        categories.map(category => 
          <GifGrid key={category} category={category} />)}
      </section>




    </Fragment>
  )
};



export default GifExpertApp
