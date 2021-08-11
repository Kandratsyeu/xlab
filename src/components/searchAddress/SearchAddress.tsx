import React, { useState } from 'react'
import SearchAddressInput from './SearchAddressInput/SearchAddressInput'
import SearchAddressButton from './SearchAddressButton/SearchAddressButton'
import './style.scss'
import SearchAddressResult from './SearchAddressResult/SearchAddressResult'

const SearchAddress: React.FC = () => {
  const [address, setAddress] = useState('')
  const [addresses, setAddresses] = useState('{}')

  const changeAddress = (value: string): void => {
    setAddress(value)
  }

  const changeAddresses = (value: string): void => {
    setAddresses(value)
  }

  return (
    <aside className="address-search">
      <div className="address-search-setup">
        <SearchAddressInput changeAddress={changeAddress} />
        <SearchAddressButton
          address={address}
          changeAddresses={changeAddresses}
        />
      </div>
      <SearchAddressResult addresses={addresses} />
    </aside>
  )
}

export default SearchAddress
