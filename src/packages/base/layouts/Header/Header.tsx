import './Header.sass';
import React from 'react';

import SearchBar from '../../SearchBar/SearchBar';
const Header = () => {
  return (
    <>
      <div className='container'>
        <h1>Nike</h1>
        <div className='actions'>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Header;
