import './SearchBar.sass';
import React from 'react';

const SearchBar = () => {
  return (
    <>
      <div className='input-group'>
        <input
          className='search'
          type='text'
          placeholder='Searching for something?'
        />
        <span className='bar'></span>
      </div>
    </>
  );
};

export default SearchBar;
