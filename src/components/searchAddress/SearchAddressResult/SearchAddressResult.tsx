import React from 'react'
import './style.scss'

interface IData {
  suggestions: Array<ISuggestions>
}
interface ISuggestions {
  value: string
  [key: string]: any
}

const SearchAddressResult: React.FC<{ addresses: string }> = (props) => {
  const getData = () => {
    const addressesArray: IData = JSON.parse(props.addresses)
    if (addressesArray.suggestions) {
      return addressesArray.suggestions.map((el) => <p>{el?.value}</p>)
    } else {
      return <p>Нет адресов, удовлетворяющих запросу</p>
    }
  }

  return (
    <div className="search-address-result">
      <h3>Адреса</h3>
      <div>{getData()}</div>
    </div>
  )
}

export default SearchAddressResult
