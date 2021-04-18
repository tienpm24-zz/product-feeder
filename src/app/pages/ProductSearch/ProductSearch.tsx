import React, {useState, createContext} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { Header } from '../../components/Header/Header'
import { ProductList } from '../../components/ProductList/ProductList'
import { ProductSearchContext } from '../../components/ProductSearchbar/context'
import { SidebarContext } from '../../components/Sidebar/context'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { useSearch } from '../../hooks/useSearch'
import { searchProducts } from '../../services/products'
import { Product } from '../../utils/types'

type ProductFilterProps = {
  filteredProducts: Product[], 
  setFilteredProducts: (value: Product[]) => void
}

export const ProductFilterContext = createContext<Partial<ProductFilterProps>>({})

export const ProductSearch = () => {
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
