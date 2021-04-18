import './FilterButton.sass';
import React, { useContext } from 'react';
import { Icon } from '../Icon/Icon';
import { SidebarContext } from '../Sidebar/context';

export const FilterButton = () => {
  const { isSidebarOpen, setSidebar } = useContext(SidebarContext);
  return (
    <div
      className='filter-button'
      onClick={() => setSidebar((prevState) => !prevState)}
    >
      <p>{`${isSidebarOpen ? 'Hide' : 'Show'} Filter`}</p>
      <Icon
        className='filter-icon'
        source={require('../../../assets/sorting_options.svg')}
      />
    </div>
  );
};
