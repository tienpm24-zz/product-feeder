import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { searchProducts } from '../api/product'
import { useSearch } from '../core/hooks/useSearch'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import Sidebar from './components/Sidebar'

export const App = () => {
  const { search, inputText, setInputText } = useSearch(searchProducts)
  const products = search.result || []
  return (
    <Wrapper>
      <GlobalStyle />
      <Header searchText={inputText} setSearchtext={setInputText} />
      <Content>
        <Sidebar />
        <ProductList products={products} loading={search.loading}  searchText={inputText} errorMessage={search?.error?.message}  />
      </Content>
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
`
