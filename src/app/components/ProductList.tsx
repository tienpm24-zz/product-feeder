import React from 'react'
import { Product } from '../../core/utils/types'
import styled from 'styled-components'
import { ProductCard } from './ProductCard'
import { LoadingIndicator } from './LoadingIndicator'

type ProductListProps = {
  loading: boolean,
  errorMessage?: string,
  products: Product[]
}

export const ProductList = ({loading, errorMessage, products = []}: ProductListProps) => {
  if(loading) {
    return <LoadingIndicator height='100%'/>
  }
  return (
    <>
    {errorMessage && <div>Error: {errorMessage}</div>}
    <div>
      <Header>
        <Title>Show all {products.length} results</Title>
      </Header>
      <Grid>
        {products.map(product => <ProductCard key={product.id} {...product}/>)}
      </Grid>
    </div>
    </>
  )
}

const Header = styled.div`
  padding-right:130px;
  padding-left: 130px;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-right: 100px;
  padding-left:100px;
  padding-top: 10px;
  padding-bottom: 70px;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 720px) {
    text-align: center;
  }
`

