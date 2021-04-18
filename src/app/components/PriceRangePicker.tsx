import 'react-input-range/lib/css/index.css'

import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import RangeSlider from 'react-input-range'

import { usePrevious } from '../../core/hooks/usePrevious'
import { ProductFilterContext, ProductSearchContext } from '../index'

type Range = {
  min: number,
  max: number
}

export const PriceRangePicker = () => {
  const {products} = useContext(ProductSearchContext)
  const {setFilteredProducts} = useContext(ProductFilterContext)
  const [range, setRange] = useState({ min: 0, max: 1000 })
  const [pickedRange, setPickedRange] = useState({ min: 0, max: 1000 })
  const prevProducts = usePrevious(products);

  const filterProducts = (value: Range) => setFilteredProducts(products.filter(({price}) => price >= value.min && price <= value.max))

  const onPriceRangeChange = async (value: Range) => {
    if(range.max >= value.max){
      await setPickedRange(value)
      if(products.length > 0) {
        await filterProducts(value)
      }
    }
  }

  useEffect(() => {
    async function onProductsChange() {
      const maxValue = Math.max.apply(Math, products.map((p)=>p.price))
      console.log(range.max, pickedRange.max, maxValue)
      if(maxValue > range.max){
        await setRange({min: 0, max: maxValue})
        await setPickedRange({min: 0, max: maxValue})
      } else {
        await setPickedRange({min: 0, max: maxValue})
        await setRange({min: 0, max: maxValue})
      }
      setFilteredProducts(products)
    }
    if(products.length > 0) {
      onProductsChange()
    } else if (prevProducts && products.length === 0 && prevProducts.length !== 0) {
      setFilteredProducts([])
    }
  }, [products])

  return (
    <Wrapper className='range-slider-wrapper'>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 10px 0;
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