// import './Sidebar.sass'
import 'react-input-range/lib/css/index.css'

import React, { useContext, useState, useEffect } from 'react'
import RangeSlider from 'react-input-range'
import styled from 'styled-components'
import { ProductFilterContext, ProductSearchContext, SidebarContext } from '../index'

type Range = {
  min: number,
  max: number
}

export const Sidebar = () => {
  const {isSidebarOpen} = useContext(SidebarContext)
  const {products} = useContext(ProductSearchContext)
  const {setFilteredProducts} = useContext(ProductFilterContext)
  const [range, setRange] = useState({ min: 0, max: 1000 })
  const [pickedRange, setPickedRange] = useState({ min: 0, max: 1000 })
  
  const filterProducts = (value: Range) => setFilteredProducts(products.filter(({price}) => price >= value.min && price <= value.max))

  const onPriceRangeChange = async (value: Range) => {
    await setPickedRange(value)
    if(products.length > 0) {
      await filterProducts(value)
    }
  }

  useEffect(() => {
    async function onProductsChange(maxValue: number) {
      let oldMaxValue
      await setRange((prevState) => {
        oldMaxValue = prevState.max
        return {...prevState, max: maxValue}
      })
      const newCurrentMaxValue = pickedRange.max === oldMaxValue || pickedRange.max > maxValue ? maxValue : pickedRange.max
      await setPickedRange((prevState) => ({...prevState, max: newCurrentMaxValue}))
      await filterProducts({min: pickedRange.min, max: newCurrentMaxValue})
    }
    if(products.length > 0) {
      const maxValue = Math.max.apply(Math, products.map((p)=>p.price))
      onProductsChange(maxValue)
    }
  }, [products])

  return (
    <Wrapper className='sidebar-wrapper' isOpen={isSidebarOpen}>
      <Title>FILTER SELECTION</Title>
      <span className='label'>PRICE</span>
      <RangeSliderWrapper className='range-slider-wrapper'>
        <PickedRange>${pickedRange.min} - ${pickedRange.max}</PickedRange>
        <RangeSlider
          maxValue={range.max}
          minValue={range.min}
          formatLabel={(val) => `${val} $`}
          value={pickedRange}
          onChange={onPriceRangeChange}
        />
        <Range>
          <span>${range.min}</span>
          <span>${range.max}</span>
        </Range>
      </RangeSliderWrapper>
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
  .input-range__slider {
    background-color: #ccc;
    background-image: none;
    border: none;
    border-radius: 10px;
    height: 27px;
    margin-left: 0;
    top: -5px;
    width: 3px;
    &:active {
      background-color: #555;
    }
  }
  .input-range__track {
    background-color: #e4e3e3;
  }
  .input-range__track--active {
    background: #555;
  }
  .input-range__label-container {
    display: none;
  }
`

const Title = styled.h3`
  padding-bottom: 20px;
  border-bottom: 1px dashed #cccccc;
`

const RangeSliderWrapper = styled.div`
  margin: 10px 0;
`

const PickedRange = styled.p`
  text-align: center;
  margin: 0;
  padding-top: 4px;
`

const Range = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #777;
  padding-top: 8px;
`