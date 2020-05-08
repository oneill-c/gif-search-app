import React, { useState, FormEvent } from 'react';
import axios from 'axios'

import './App.css';

function App() {

  const [ query, setQuery ] = useState('')
  const [ gifs, setGif ] = useState([])

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value)
  }

  const executeQuery = async () => {
    const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=d6PiZFkypriSO88HqRqBBrUu1Z2M1G50&q=${query}&limit=25&offset=0&rating=G&lang=en`)

    setGif(result.data.data.map((o: any) => o.images['preview_gif'].url))
  }

  const imageList = gifs.length > 0 && gifs.map(gif => <img key={gif} src={gif} />)

  return (
    <div className="App">
      
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
