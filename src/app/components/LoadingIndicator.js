import './LoadingIndicator.sass';
import React from 'react';
import { Icon } from './Icon';

export const LoadingIndicator = (height) => {
  return (
    <div className='loading-wrapper'>
      <Icon
        className='loading-icon'
        width='200px'
        height={height || '200px'}
        source={require('../../assets/loading.svg')}
      />
    </div>
  );
};
