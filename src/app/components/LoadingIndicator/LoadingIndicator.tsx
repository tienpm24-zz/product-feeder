import './LoadingIndicator.sass';
import React, { FC } from 'react';

import { Icon } from '../Icon/Icon';

type LoadingIndicatorProps = {
  height: string;
};

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({ height }) => {
  return (
    <div className='loading-wrapper'>
      <Icon
        className='loading-icon'
        width='200px'
        height={height || '200px'}
        source={require('../../../assets/loading.svg')}
      />
    </div>
  );
};
