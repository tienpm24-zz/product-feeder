import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

export const FilterButton = () => {
  return (
    <Button onClick={() => {}}>
      <p>Show Filter</p>
      <FilterIcon
        dangerouslySetInnerHTML={{
          __html: require('../../assets/sorting_options.svg'),
        }}
      />
    </Button>
  )
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding-right: 50px;
  @media (max-width: 1400px) {
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
