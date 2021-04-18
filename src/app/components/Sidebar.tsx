// import './Sidebar.sass'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { SidebarContext } from '../index'
import { PriceRangePicker } from './PriceRangePicker'

export const Sidebar = () => {
  const {isSidebarOpen} = useContext(SidebarContext)
  return (
    <Wrapper className='sidebar-wrapper' isOpen={isSidebarOpen}>
      <Title>FILTER SELECTION</Title>
      <span className='label'>PRICE</span>
      <PriceRangePicker/>
    </Wrapper>
  )
}

const Wrapper = styled('div')<{isOpen: boolean}>`
  width: ${(props) => (props.isOpen ? '25%' : '0px')};
  padding: ${(props) => (props.isOpen ? '20px' : '20px 0px')};
  overflow: hidden;
  transition: 0.5s;
  white-space: nowrap;
  border-right: #ddd solid 1px;
  flex: 0 0 auto;
  @media (max-width: 920px) {
    width: ${(props) => (props.isOpen ? '80%' : '0px')};
  }
`

const Title = styled.h3`
  padding-bottom: 20px;
  border-bottom: 1px dashed #cccccc;
`
