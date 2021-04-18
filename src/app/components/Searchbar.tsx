// import './SearchBar.sass'
import React from 'react'
import styled from 'styled-components'

type SearchbarProps = {
  inputText: string,
  setInputText: React.Dispatch<React.SetStateAction<string>>
}

export const Searchbar = ({inputText, setInputText, ...props}: SearchbarProps) => {
  return (
    <Wrapper className='searchbar-wrapper' {...props}>
      <Input 
        className='searchbar-input' 
        type='text' 
        value={inputText} 
        onChange={e => setInputText(e.target.value)}
        placeholder="Search products" 
      />
      <SearchButton
        className='searchbar-button'
        data-var='vsButton'
        aria-label='Search'
      >
        <svg
          className='search-icon'
          fill='#333'
          height='30px'
          width='30px'
          viewBox='0 0 24 24'
        >
          <path d='M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z'></path>
        </svg>
      </SearchButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: auto 0;
`

const Input = styled.input`
  position: relative;
  visibility: visible;
  background: #f3f3f3;
  cursor: text;
  color: #333;
  padding: 10px 50px 10px 44px;
  border-radius: 100px;
  height: 20px;
  width: -webkit-fill-available;
  border: 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  :focus {
    outline: none;
  }
`

const SearchButton = styled.button `
  position: absolute;
  top: 2px;
  left: 0px;
  padding: 6px 8px;
  align-items: center;
  border-radius: 100px;
  background: transparent;
  outline: 0;
  cursor: pointer;
  border: none;
  border-width: 2px;
  transition: 0.4s;
  :focus {
    outline: none;
  }
  svg {
    height: 24px;
    width: 24px;
  }
`