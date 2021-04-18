import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ProductSearch } from './pages/ProductSearch/ProductSearch'

export default () => (
  <HashRouter>
    <Route path='/' component={ProductSearch} />
  </HashRouter>
)