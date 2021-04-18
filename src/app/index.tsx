import React, {useState, createContext} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { searchProducts } from '../api/product'
import { useSearch } from '../core/hooks/useSearch'
import { Product } from '../core/utils/types'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { Sidebar } from './components/Sidebar'

type ProductSearchProps = { 
  products: Product[], 
  searchText: string, 
  setSearchtext: (value: string) => void,
  isLoading: boolean,
  errorMessage: string
}

type SidebarProps = {
  isSidebarOpen: boolean, 
  setSidebar: (value: boolean) => void
}

type ProductFilterProps = {
  filteredProducts: Product[], 
  setFilteredProducts: (value: Product[]) => void
}

export const ProductSearchContext = createContext<Partial<ProductSearchProps>>({})
export const SidebarContext = createContext<Partial<SidebarProps>>({})
export const ProductFilterContext = createContext<Partial<ProductFilterProps>>({})


export const App = () => {
  const { search, inputText, setInputText } = useSearch(searchProducts)
  const [isSidebarOpen, setSidebar] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])

  const productSearchContextValue = {
    products: search.result || [], 
    searchText: inputText, 
    setSearchtext: setInputText, 
    isLoading: search.loading,
    errorMessage: search?.error?.message
  }
  const sidebarContextValue = {isSidebarOpen, setSidebar} 
  const productFilterContextValue = {filteredProducts, setFilteredProducts} 

  return (
    <Wrapper>
      <GlobalStyle />
      <SidebarContext.Provider value={sidebarContextValue}>
        <ProductSearchContext.Provider value={productSearchContextValue}>
          <ProductFilterContext.Provider value={productFilterContextValue}>
            <Header />
            <Content>
              <Sidebar />
              <ProductList />
            </Content>
          </ProductFilterContext.Provider>
        </ProductSearchContext.Provider>
      </SidebarContext.Provider>
    </Wrapper> 
  )
}

const GlobalStyle = createGlobalStyle`
  html,body { 
    height: 100%; 
    margin: 0px; 
    padding: 0px; 
  }
  div, a, p, span {
    font-family: 'Krub', sans-serif;
    line-height: normal;
  }
  a {
    text-decoration: none;
  }
  #root {
    height: 100%;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  a {
    color: #333333;
  }
`

const Content = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`
