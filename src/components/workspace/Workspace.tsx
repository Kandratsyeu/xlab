import React from 'react'
import Menu from '../menu/Menu'
import MainPage from '../../pages/main/MainPage'
import './style.scss'

const Workspace: React.FC = () => {
  return (
    <main className="main-workspace">
      <Menu />
      <MainPage />
    </main>
  )
}

export default Workspace
