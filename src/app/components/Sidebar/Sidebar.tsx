import './Sidebar.sass';
import React, { useContext } from 'react';
import { PriceRangePicker } from '../PriceRangePicker/PriceRangePicker';
import { SidebarContext } from './context';

export const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  return (
    <div className={isSidebarOpen ? 'sidebar-wrapper' : 'sidebar-hidden'}>
      <h3 className='sidebar-title'>FILTER SELECTION</h3>
      <span className='sidebar-label'>PRICE</span>
      <PriceRangePicker />
    </div>
  );
};
