import { useState, useEffect } from "react";
import GetGif from "../Services/GetGif";


export const useFetchGif = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: false
  });

  useEffect( () => {

    setTimeout( () => {
    GetGif(category)
     .then( img => {
       setState({
         data: img,
         loading: false
       })
     })
    }, 1000)

    
  }, [category])
  
  return state;
    

}