import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { searchProducts } from '../api/product'
import { useSearch } from '../core/hooks/useSearch'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

export const App = () => {
  const { search, inputText, setInputText } = useSearch(searchProducts)
  const products = search.result || []
  return (
    <Wrapper>
      <GlobalStyle />
      <Header products={products} searchText={inputText} setSearchtext={setInputText} errorMessage={search?.error?.message}  />
      <ProductList products={products} loading={search.loading} />
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
  a {
    color: #333333;
  }
`
