import React from 'react'
import './style.scss'

const SearchAddressInput: React.FC<{ changeAddress(value: string): void }> = (
  props
) => {
  return (
    <input
      type="text"
      className="address-search-input"
      placeholder="Введите интересующий вас адрес"
      onChange={(e) => props.changeAddress(e.target.value)}
    ></input>
  )
}

export default SearchAddressInput
