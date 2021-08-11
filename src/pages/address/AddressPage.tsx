import React from 'react'
import SearchAddress from '../../components/searchAddress/SearchAddress'
import './style.scss'

const AddressPage: React.FC = () => {
  return (
    <aside className="address-page">
      <h2>Поиск адресов</h2>
      <p>Введите интересующий вас адрес</p>
      <SearchAddress />
    </aside>
  )
}

export default AddressPage
