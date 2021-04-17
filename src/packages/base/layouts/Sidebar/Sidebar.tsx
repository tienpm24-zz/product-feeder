import './Sidebar.sass';
import React from 'react';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <h3>Shop by Price</h3>
        <div className='left-menu'>
          <label className='checkbox'>
            <input type='checkbox' /> <span className='label'>$0 - $25</span>
          </label>

          <label className='checkbox'>
            <input type='checkbox' /> <span className='label'>$25 - $50</span>
          </label>

          <label className='checkbox'>
            <input type='checkbox' /> <span className='label'>$50 - $100</span>
          </label>

          <label className='checkbox'>
            <input type='checkbox' /> <span className='label'>$100 - $150</span>
          </label>

          <label className='checkbox'>
            <input type='checkbox' /> <span className='label'>Over $15</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
