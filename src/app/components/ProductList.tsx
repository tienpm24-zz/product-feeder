import React from 'react'
import { Product } from '../../core/utils/types'
import styled from 'styled-components'
import { ProductCard } from './ProductCard'
import { LoadingIndicator } from './LoadingIndicator'

type ProductListProps = {
  loading: boolean,
  products: Product[],
  searchText: string,
  errorMessage: string
}

export const ProductList = ({loading, products, errorMessage, searchText}: ProductListProps) => {
  let title
  switch (true) {
    case loading:
       title = ""
      break
    case errorMessage?true:false:
      title = errorMessage
      break
    case products.length > 0:
       title = `Show all ${products.length} results`
      break
    case searchText.length > 1 && products.length === 0:
      title = 'No items found'
      break
    case searchText.length < 2:
      title = 'Please enter the product which you are looking for'
      break
    default:
      title = ''
  }
  if(loading) {
    return <LoadingIndicator height='100%'/>
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Grid>
        {products.map(product => <ProductCard key={product.id} {...product}/>)}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 130px;
  padding-left: 130px;
  padding-top: 30px;
  @media (max-width: 920px) {
    font-size: 16px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 70px;
`