import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { searchProducts } from '../api/product'
import { useSearch } from '../core/hooks/useSearch'
import { Searchbar } from './components/Searchbar'
import { ProductList } from './components/ProductList'

export const App = () => {
  const { search, inputText, setInputText } = useSearch(searchProducts)
  return (
    <Wrapper>
      <GlobalStyle />
      <Searchbar inputText={inputText} setInputText={setInputText} />
      <ProductList products={search.result} loading={search.loading} errorMessage={search?.error?.message}/>
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
