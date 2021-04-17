import './Header.sass';
import React from 'react';

import SearchBar from '../../SearchBar/SearchBar';

const Header: React.FC = () => {
  return (
    <>
      <div className='container'>
        <h1>Product Feeder</h1>
        <div className='actions'>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Header;
