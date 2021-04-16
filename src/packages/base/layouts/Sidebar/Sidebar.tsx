import './Sidebar.sass';
import React from 'react';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <ul className='left-menu'>
          <li>
            <div className='items'>
              <span>Menu 1</span>
            </div>
          </li>
          <li>
            <div className='items'>
              <span>Menu 2</span>
            </div>
          </li>
          <li>
            <div className='items'>
              <span>Menu 3</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
