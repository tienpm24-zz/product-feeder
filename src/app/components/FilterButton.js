import './FilterButton.sass';
import React from 'react';
import { Icon } from './Icon';

export const FilterButton = () => {
  return (
    <div className='filter-button' onClick={() => {}}>
      <p>Show Filter</p>
      <Icon
        className='filter-icon'
        dangerouslySetInnerHTML={{
          __html: require('../../assets/sorting_options.svg'),
        }}
      />
    </div>
  );
};
