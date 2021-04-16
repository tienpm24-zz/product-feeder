import './Header.sass';
import React from 'react';

import SearchBar from '../../SearchBar/SearchBar';
const Header = () => {
  return (
    <>
      <div className='container'>
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
