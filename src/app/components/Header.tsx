import './Header.sass';
import React from 'react';
import { FilterButton } from './FilterButton';

import { Searchbar } from './Searchbar';

type HeaderProps = {
  searchText: string;
  setSearchtext: any;
};

export const Header = ({ searchText, setSearchtext }: HeaderProps) => {
  return (
    <div className='header-wrapper'>
      <FilterButton />
      <Searchbar inputText={searchText} setInputText={setSearchtext} />
    </div>
  );
};
