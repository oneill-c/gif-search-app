import React, { useState, FormEvent, KeyboardEvent } from 'react'
import { FaSearch } from 'react-icons/fa'

import SearchBox from './search-box'
import { IconStyles } from './styles'

export interface Props {
  id: string;
  onComplete: (value: string) => void;
}

const Search = ({ id, onComplete }: Props) => {

  const [query, setQuery] = useState('')

  /**
   * onChange
   * 
   * @param {string} value Latest value of search field
   */
  const onChange = ({ currentTarget: { value } }: FormEvent<HTMLInputElement>): void => {
    setQuery(value)
  }

  /**
   * onKeyUp
   * 
   * @param {number} keyCode Code of key that has been struck
   */
  const onKeyUp = ({ keyCode }: KeyboardEvent<HTMLInputElement>): void => {
    if (keyCode === 13) {
      onComplete(query)
    }
  }

  return (
    <div id={id} className="relative">
      <FaSearch size={22} style={IconStyles} />
      <SearchBox
        type="text"
        name="search"
        value={query}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  )
}

export default Search