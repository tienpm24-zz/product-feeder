import './ProductList.sass';
import React from 'react';
import { Product } from '../../core/utils/types';
import { ProductCard } from './ProductCard';
import { LoadingIndicator } from './LoadingIndicator';

type ProductListProps = {
  loading: boolean;
  products: Product[];
  searchText: string;
  errorMessage: string;
};

export const ProductList = ({
  loading,
  products,
  errorMessage,
  searchText,
}: ProductListProps) => {
  let title;
  switch (true) {
    case loading:
      title = '';
      break;
    case errorMessage ? true : false:
      title = errorMessage;
      break;
    case products.length > 0:
      title = `Show all ${products.length} results`;
      break;
    case searchText.length > 1 && products.length === 0:
      title = 'No items found';
      break;
    case searchText.length < 2:
      title = 'Please enter the product which you are looking for';
      break;
    default:
      title = '';
  }
  if (loading) {
    return <LoadingIndicator height='100%' />;
  }
  return (
    <div className='pd-list-wrapper'>
      <h2 className='pd-list-title'>{title}</h2>
      <div className='pd-list-grid'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
