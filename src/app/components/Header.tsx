import React from 'react'
import styled from 'styled-components'
import { FilterButton } from './FilterButton'
import { Icon } from './Icon'
import { Searchbar } from './Searchbar'

type HeaderProps = {
  searchText: string,
  setSearchtext: any
}

export const Header = ({searchText, setSearchtext}: HeaderProps) => {
  return (
    <Wrapper>
      <FilterButton />
      <ProductSearchbar inputText={searchText} setInputText={setSearchtext} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 0 0 auto;
  z-index: 1;
  display: flex;
  height: 72px;
  padding-right:130px;
  padding-left: 130px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 2px 5px 0px #ccc;
`

const ProductSearchbar = styled(Searchbar)`
  max-width: 700px;
  flex: 1 0 auto;
`