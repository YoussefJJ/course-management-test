import React from 'react'

interface SearchBarProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}

function SearchBar(props: SearchBarProps) {
  const { onChange, placeholder } = props
  return (
    <input className='form-control my-md-1' type="text" placeholder={placeholder} onChange={onChange}/>
  )
}

export default SearchBar