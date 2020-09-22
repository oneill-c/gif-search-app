import React, { useState } from 'react';
import styled from 'styled-components'

import { fetchGifs } from './actions'
import Search from './modules/shared/search';

interface AppProps {
  className: string
}

const App = ({ className }: AppProps) => {

  const [gifs, setGif] = useState<string[]>([])

  /**
   * executeQuery
   * 
   * @param {string} query Query to pass to the API call
   */
  const executeQuery = async (query: string) => {
    const { data } = await fetchGifs(query)

    setGif(data.map((o: GiphyDataObject) => o.images.preview_gif.url))
  }

  const imageList = gifs.length > 0 && gifs.map(gif => <img key={gif} src={gif} alt={gif} />)

  return (
    <>
      <div className={className}>
        <div className="search-container">
          <h1>FIND-A-MEME</h1>
          <Search id="search" onComplete={executeQuery} />
        </div>
      </div>

      <div>
        {imageList}
      </div>
    </>
  );
}

export default styled(App).attrs({
  className: ''
})`
  color: #63FFD5;
  height: 100%;

  .search-container {
    margin: 20% 30% 0 30%;
  }
`
