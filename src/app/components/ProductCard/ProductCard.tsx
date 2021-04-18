import './ProductCard.sass';
import React from 'react';
import { Product } from '../../utils/types';
import { Icon } from '../Icon/Icon';

export const ProductCard = ({
  name,
  currency,
  price,
  picture,
  viewItemURL,
}: Product) => {
  return (
    <div className='card-wrapper'>
      <div className='card'>
        <img
          className='card-image'
          src={picture || require('../../../assets/default-image.png')}
        />
        <div className='card-detail'>
          <h3 className='card-title'>{name}</h3>
          <p className='card-price'>
            {currency + price.toFixed(2).split('.')[0]}
            <span>.{price.toFixed(2).split('.')[1]}</span>
          </p>
          <a className='card-view-button' href={viewItemURL} target='_blank'>
            <Icon
              className='card-view-icon'
              source={require('../../../assets/visible.svg')}
            />
            <p>View</p>
          </a>
        </div>
      </div>
    </div>
  );
};
