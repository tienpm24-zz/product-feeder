import './Header.sass';
import React from 'react';
import { FilterButton } from '../FilterButton/FilterButton';
import { Searchbar } from '../ProductSearchbar/ProductSearchbar';

export const Header = () => {
  return (
    <div className='header-wrapper'>
      <FilterButton />
      <Searchbar />
    </div>
  );
};
