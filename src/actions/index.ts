
/**
 * fetchGifs
 * 
 * Fetches GIFs from Giphy API.
 * 
 * @param {string} query Query to be passed to the Giphy API to refine search results.
 */
export const fetchGifs = async (query: string): Promise<HTTPResponse<GiphyDataObject[]>> => {
    
    let response, error
  
    try {
      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${query}&limit=25&offset=0&rating=G&lang=en`)
      response = await res.json()
  
    } catch (err) {
      error = err
    }

    return {
        data: response.data,
        pagination: response.pagination,
        error
    }
  }