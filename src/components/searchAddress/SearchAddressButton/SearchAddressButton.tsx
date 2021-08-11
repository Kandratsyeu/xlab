import React from 'react'
import SearchSvg from './search.svg'
import './style.scss'
import getAddresses from '../../../api/api'

const SearchAddressButton: React.FC<{
  address: string
  changeAddresses(value: string): void
}> = (props) => {
  return (
    <button
      className="address-search-button"
      onClick={async () => {
        const addresses = await getAddresses(props.address).then((resp) => resp)
        props.changeAddresses(addresses as string)
      }}
      disabled={props.address.length < 3 ? true : false}
    >
      <img src={SearchSvg} alt="search" />
      <span>Поиск</span>
    </button>
  )
}

export default SearchAddressButton
