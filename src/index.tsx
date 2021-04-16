import './index.sass'

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './packages/base/layouts'
import Card from './packages/base/card/Card'
ReactDOM.render(
  <>
    <Layout>
      <Card id='n01' name='Nike Blazer Mid 77 Suede' description='Shoe' price='100$'/>
  </Layout>
  </>,

  document.getElementById('root')
);
