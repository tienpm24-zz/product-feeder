import './index.sass';
import React from 'react';
import { searchProducts } from '../api/product';
import { useSearch } from '../core/hooks/useSearch';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import Sidebar from './components/Sidebar';

export const App = () => {
  const { search, inputText, setInputText } = useSearch(searchProducts);
  const products = search.result || [];
  return (
    <div className='wrapper'>
      <Header searchText={inputText} setSearchtext={setInputText} />
      <div className='content'>
        <Sidebar />
        <ProductList
          products={products}
          loading={search.loading}
          searchText={inputText}
          errorMessage={search?.error?.message}
        />
      </div>
    </div>
  );
};
