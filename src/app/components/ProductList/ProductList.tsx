import './ProductList.sass';
import React, { useContext } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';
import { ProductSearchContext } from '../ProductSearchbar/context';
import { ProductFilterContext } from '../../pages/ProductSearch/ProductSearch';

export const ProductList = () => {
  const { isLoading, errorMessage, searchText } = useContext(
    ProductSearchContext
  );
  const { filteredProducts: products } = useContext(ProductFilterContext);
  let title;
  switch (true) {
    case isLoading:
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
  if (isLoading) {
    return (
      <div className='pd-list-wrapper'>
        <LoadingIndicator height='100%' />
      </div>
    );
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
