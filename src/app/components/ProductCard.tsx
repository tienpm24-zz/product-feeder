import './ProductCard.sass';
import React from 'react';
import { Product } from '../../core/utils/types';
import { Icon } from './Icon';

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
          src={picture || require('../../assets/default-image.png')}
        />
        <div className='card-detail'>
          <h3 className='card-title'>{name}</h3>
          <p className='card-price'>
            {currency + price.split('.')[0]}
            <span>.{price.split('.')[1]}</span>
          </p>
          <a className='card-view-button' href={viewItemURL} target='_blank'>
            <Icon
              className='card-view-icon'
              dangerouslySetInnerHTML={{
                __html: require('../../assets/visible.svg'),
              }}
            />
            <p>View</p>
          </a>
        </div>
      </div>
    </div>
  );
};
