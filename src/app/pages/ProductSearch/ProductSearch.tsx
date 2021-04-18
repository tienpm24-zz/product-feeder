import './ProductSearch.sass';
import React, { useState, createContext } from 'react';
import { Header } from '../../components/Header/Header';
import { ProductList } from '../../components/ProductList/ProductList';
import { ProductSearchContext } from '../../components/ProductSearchbar/context';
import { SidebarContext } from '../../components/Sidebar/context';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useSearch } from '../../hooks/useSearch';
import { searchProducts } from '../../services/products';
import { Product } from '../../utils/types';

type ProductFilterProps = {
  filteredProducts: Product[];
  setFilteredProducts: (value: Product[]) => void;
};

export const ProductFilterContext = createContext<Partial<ProductFilterProps>>(
  {}
);

export const ProductSearch = () => {
  const { search, inputText, setInputText } = useSearch(searchProducts);
  const [isSidebarOpen, setSidebar] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const productSearchContextValue = {
    products: search.result || [],
    searchText: inputText,
    setSearchtext: setInputText,
    isLoading: search.loading,
    errorMessage: search?.error?.message,
  };
  const sidebarContextValue = { isSidebarOpen, setSidebar };
  const productFilterContextValue = { filteredProducts, setFilteredProducts };

  return (
    <div className='product-search-wrapper'>
      <SidebarContext.Provider value={sidebarContextValue}>
        <ProductSearchContext.Provider value={productSearchContextValue}>
          <ProductFilterContext.Provider value={productFilterContextValue}>
            <Header />
            <div className='product-search-content'>
              <Sidebar />
              <ProductList />
            </div>
          </ProductFilterContext.Provider>
        </ProductSearchContext.Provider>
      </SidebarContext.Provider>
    </div>
  );
};
