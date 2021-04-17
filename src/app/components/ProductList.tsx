import React from 'react'
import { Product } from '../../core/utils/types'
import styled from 'styled-components'
import { ProductCard } from './ProductCard'
import { LoadingIndicator } from './LoadingIndicator'

type ProductListProps = {
  loading: boolean,
  products: Product[],
}

export const ProductList = ({loading, products}: ProductListProps) => {
  if(loading) {
    return <LoadingIndicator height='100%'/>
  }
  return (
    <>
      <Grid>
        {products.map(product => <ProductCard key={product.id} {...product}/>)}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 100px;
  padding-left:100px;
  padding-top: 10px;
  padding-bottom: 70px;
`