import './SearchBar.sass'
import React from 'react'

type SearchbarProps = {
  inputText: string,
  setInputText: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({inputText, setInputText}: SearchbarProps) => {
  return (
    <div className='input-group'>
      <input className='search' type='text' value={inputText} onChange={e => setInputText(e.target.value)}
      placeholder="Search products" />
      <button
        className='pre-search-btn ripple'
        data-var='vsButton'
        aria-label='Search'
      >
        <svg
          className='pre-search-input-icon'
          fill='#111'
          height='30px'
          width='30px'
          viewBox='0 0 24 24'
        >
          <path d='M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z'></path>
        </svg>
      </button>
    </div>
  )
}
