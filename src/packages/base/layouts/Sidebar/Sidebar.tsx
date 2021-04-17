import './Sidebar.sass';
import 'react-input-range/lib/css/index.css';

import React, { useState } from 'react';

import InputRange from 'react-input-range';

const Sidebar: React.FC = () => {
  const [value, setValue] = useState({ min: 250, max: 800 });

  return (
    <>
      <div className='sidebar'>
        <h3>FILTER SELECTION</h3>
        <span className='label'>PRICE</span>
        <div className='slider'>
          <InputRange
            maxValue={1000}
            minValue={0}
            formatLabel={(value) => `${value} $`}
            value={value}
            onChange={(value) => console.log(value)}
          />
        </div>
        <span className='range'>
          Range: ${value.min} - ${value.max}
        </span>
      </div>
    </>
  );
};

export default Sidebar;
