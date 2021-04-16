import './index.sass';

import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className='layout'>
        <Header />

        <div className='main'>
          <Sidebar />
          <div className='content'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
