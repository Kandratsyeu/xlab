import React from 'react'
import Logo from './logo/Logo'
import Profile from './profile/Profile'
import './style.scss'

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="main-header-content">
        <Logo />
        <Profile />
      </div>
    </header>
  )
}

export default Header
