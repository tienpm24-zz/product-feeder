import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

export const LoadingIndicator = (height) => {
  return (
    <Wrapper>
      <LoadingIcon
        width='200px'
        height={height || '200px'}
        source={require('../../assets/loading.svg')}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inherit;
  flex-direction: inherit;
  flex: inherit;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: inherit;
`

const LoadingIcon = styled(Icon)`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
`