import './SearchBar.sass';
import React from 'react';

const SearchBar = () => {
  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input type='text' className='searchTerm' placeholder='Search' />
          <button type='submit' className='searchButton'>
            {/* with icon here */}
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
