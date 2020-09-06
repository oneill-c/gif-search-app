import React, { useState, FormEvent } from 'react';
import { fetchGifs } from './actions'

function App() {

  const [ query, setQuery ] = useState('')
  const [ gifs, setGif ] = useState<string[]>([])

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value)
  }

  const executeQuery = async () => {
    const { data, error }= await fetchGifs(query)

    if (error) {
      // handle error
    }

    setGif(data.map((o: GiphyDataObject) => o.images.preview_gif.url))
  }

  const imageList = gifs.length > 0 && gifs.map(gif => <img key={gif} src={gif} />)

  return (
    <div>
      
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <input type="text" value={query} onChange={onChange} />
        <button onClick={executeQuery}>Search</button>

        <div>
          {imageList}
        </div>
      </div>
    </div>
  );
}

export default App;
