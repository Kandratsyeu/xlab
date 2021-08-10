import React from 'react'
import './style.scss'
import profileSvg from './person.svg'

const Logo: React.FC = () => {
  return (
    <a className="header-profile">
      <img src={profileSvg} alt="" />
      <p>Имя Фамилия</p>
    </a>
  )
}

export default Logo
