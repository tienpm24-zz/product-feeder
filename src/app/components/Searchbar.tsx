import React from 'react'

type SearchbarProps = {
  inputText: string,
  setInputText: React.Dispatch<React.SetStateAction<string>>
}

export const Searchbar = ({inputText, setInputText}: SearchbarProps) => {
  return (
      <input
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="Search products"
      />
  )
}