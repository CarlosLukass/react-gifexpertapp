
const GetGif = async (category) => {
  const httpURL = 'https://api.giphy.com/v1/gifs/search'
  const apikey = 'hN7IpdafWTX67ucQtUcNIfo3smoEbDyC';
    
    const url =  `${httpURL}?q=${encodeURI(category)}&limit=10&api_key=${apikey}`
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = await data.map( img => {
      return {
        id: img.id,
        title: img.title,
        image: img.images?.downsized_medium.url
      }
    })

    return gifs
}

export default GetGif
