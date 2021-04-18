import './PriceRangePicker.sass';
import 'react-input-range/lib/css/index.css';

import React, { useContext, useState, useEffect } from 'react';
import RangePicker from 'react-input-range';

import { Range } from './types';
import { ProductSearchContext } from '../ProductSearchbar/context';
import { ProductFilterContext } from '../../pages/ProductSearch/ProductSearch';
import { usePrevious } from '../../hooks/usePrevious';

export const PriceRangePicker = () => {
  const { products } = useContext(ProductSearchContext);
  const { setFilteredProducts } = useContext(ProductFilterContext);
  const [range, setRange] = useState({ min: 0, max: 1000 });
  const [pickedRange, setPickedRange] = useState({ min: 0, max: 1000 });
  const prevProducts = usePrevious(products || []);

  const filterProducts = (value: Range) =>
    setFilteredProducts(
      products.filter(({ price }) => price >= value.min && price <= value.max)
    );

  const onPriceRangeChange = async (value: Range) => {
    if (range.max >= value.max) {
      await setPickedRange(value);
      if (products.length > 0) {
        await filterProducts(value);
      }
    }
  };

  useEffect(() => {
    async function onProductsChange() {
      const maxValue = Math.max.apply(
        Math,
        products.map((p) => p.price)
      );
      if (maxValue > range.max) {
        await setRange({ min: 0, max: maxValue });
        await setPickedRange({ min: 0, max: maxValue });
      } else {
        await setPickedRange({ min: 0, max: maxValue });
        await setRange({ min: 0, max: maxValue });
      }
      setFilteredProducts(products);
    }
    if (products.length > 0) {
      onProductsChange();
    } else if (
      products.length === 0 &&
      prevProducts &&
      prevProducts.length !== 0
    ) {
      setFilteredProducts([]);
    }
  }, [products]);

  return (
    <div className='range-slider-wrapper'>
      <p className='picked-range-text'>
        ${pickedRange.min} - ${pickedRange.max}
      </p>
      <RangePicker
        maxValue={range.max}
        minValue={range.min}
        formatLabel={(val) => `${val} $`}
        value={pickedRange}
        onChange={onPriceRangeChange}
      />
      <div className='range-text-wrapper'>
        <span>${range.min}</span>
        <span>${range.max}</span>
      </div>
    </div>
  );
};
