import './ProductSearchBar.sass';
import React, { useContext } from 'react';
import { ProductSearchContext } from './context';

export const Searchbar = ({ ...props }) => {
  const { searchText, setSearchtext } = useContext(ProductSearchContext);
  return (
    <div className='searchbar-wrapper'>
      <input
        className='searchbar-input'
        type='text'
        value={searchText}
        onChange={(e) => setSearchtext(e.target.value)}
        placeholder='Search products'
      />
      <button
        className='searchbar-button'
        data-var='vsButton'
        aria-label='Search'
      >
        <svg
          className='search-icon'
          fill='#333'
          height='30px'
          width='30px'
          viewBox='0 0 24 24'
        >
          <path d='M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z'></path>
        </svg>
      </button>
    </div>
  );
};
