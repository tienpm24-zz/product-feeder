import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Product } from '../../core/utils/types'
import { Icon } from './Icon'

export const ProductCard = ({name, currency, price, picture, viewItemURL}: Product) => {
  return ( 
    <CardWrapper>
      <Card>
        <Image src={picture || require('../../assets/default-image.png')} />
        <Details>
          <Title>{name}</Title>
          <Price>{currency+price.split('.')[0]}<span>.{price.split('.')[1]}</span></Price>
          <ViewButton href={viewItemURL} target='_blank'>
            <ViewIcon dangerouslySetInnerHTML={{ __html: require('../../assets/visible.svg') }}/>
            <p>View</p>
          </ViewButton>
        </Details>
      </Card>
    </CardWrapper>  
    )
}

const CardWrapper = styled.div`
  padding: 30px;
  width: 28%;
  @media (max-width: 1400px) {
    width: 38%;
  }
  @media (max-width: 920px) {
    width: 86%;
  }
`

const ShowAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
  }
`

const Card = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 4px;
  animation-name: ${ShowAnimation};
  animation-duration: 150ms;
  animation-delay: 150ms;
  opacity: 0;
  animation-fill-mode: forwards;
  height: 100%;
  :hover {
    border: 1px solid #333;
    a {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  object-fit: scale-down;
  max-height: 325px;
`

const Details = styled.div`
  padding: 10px;
  position: relative;
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0px 0;
  padding: 6px 0px 32px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
`

const Price = styled.p`
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0px;
  font-weight: 500;
  font-size: 20px;
  span {
    font-size:12px;
    line-height: 23px;
    vertical-align: text-top;
  }
`

const ViewButton = styled.a`
  position: absolute;
  bottom: 20px;
  right: 10px;
  border: solid 1px #333;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  opacity: 0;
  p {
    padding-left: 8px;
  }
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: #333;
    path {
      fill: #fff;
    }
  }
`

const ViewIcon = styled(Icon)`
  display: flex;
`
