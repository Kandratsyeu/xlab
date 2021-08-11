import React, { useState } from 'react'
import SearchAddressInput from './SearchAddressInput/SearchAddressInput'
import SearchAddressButton from './SearchAddressButton/SearchAddressButton'
import './style.scss'

const SearchAddress: React.FC = () => {
  const [address, setAddress] = useState('')

  const changeAddress = (value: string): void => {
    setAddress(value)
  }

  return (
    <aside className="address-search">
      <SearchAddressInput changeAddress={changeAddress} />
      <SearchAddressButton address={address} />
    </aside>
  )
}

export default SearchAddress
