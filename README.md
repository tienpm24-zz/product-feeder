## Table of contents

- [About the project](#about-the-project)
- [Webpack5](#webpack5)
- [Error Boundary](#error-boundary)
- [Higher-order-components](#higher-order-components)
- [GraphQl](#graphql)
- [Setup](#setup)

## About the project

A React Application build with Webpack5 &amp; Babel 7 and using Error Boundary, HOC.

## Webpack5

- babel-loader
- html-loader
- file-loader to load images
- HtmlWebpackPlugin
- TerserPlugin
- optimization (split chunks)

_You can find more details in https://webpack.js.org/_

## Error Boundary

## Higher-order-components

## GraphQL

- Using Apollo client to send request to GraphQl server via queries and mutations
- Using Context + Hooks to manage state. Passing data between components

  _Cause the demo backend can not update when request success, i will make the update cache after mutation to see UI has been updated_

  _Apollo client: https://www.apollographql.com/docs/react/_

## Setup

```sh
npm i
```
