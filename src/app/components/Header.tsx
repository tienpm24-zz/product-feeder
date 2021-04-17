import React from 'react'
import styled from 'styled-components'
import { Product } from '../../core/utils/types'
import { Icon } from './Icon'
import { Searchbar } from './Searchbar'

type HeaderProps = {
  errorMessage?: string,
  products: Product[],
  searchText: string,
  setSearchtext: any
}


export const Header = ({errorMessage, products, searchText, setSearchtext}: HeaderProps) => {
  const title = errorMessage
    ?errorMessage
    :!searchText 
      ? 'search a product!'
      : searchText.length === 1
        ? 'Plesase type more than one letter'
        : products.length > 0
          ? `Show all ${products.length} results`
          : 'No items found'
  return (
    <>
      <Wrapper>
        <FilterButton onClick={() => {}}>
          <p>Show Filter</p>
          <FilterIcon dangerouslySetInnerHTML={{ __html: require('../../assets/sorting_options.svg') }}/>
        </FilterButton>
        <Searchbar inputText={searchText} setInputText={setSearchtext} />
        <Title>{title}</Title>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding-right:130px;
  padding-left: 130px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 2px 5px 0px #ccc;
`


const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 920px) {
    font-size: 12px;
  }
`

const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  @media (max-width: 920px) {
      p {
        display: none;  
      }
  }
  p {
    font-size: 16px;
    padding-right: 8px;
  }
  :hover {
    cursor: pointer;
  }
`

const FilterIcon = styled(Icon)`
  display: flex;
`