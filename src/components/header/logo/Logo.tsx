import React from 'react'
import './style.scss'
import logoSvg from './logo.svg'

const Logo: React.FC = () => {
  return (
    <a className="header-logo">
      <img src={logoSvg} alt="" />
      <h1>Wrench CRM</h1>
    </a>
  )
}

export default Logo
