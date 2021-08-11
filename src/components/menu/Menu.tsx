import React, { useState } from 'react'
import MenuItem from './item/MenuItem'
import { Link } from 'react-router-dom'

import './style.scss'

import MenuSvg from './item/img/main.svg'
import SearchSvg from './item/img/search.svg'

const Menu: React.FC = () => {
  const [currentPage, setPage] = useState<string>('')

  const pageSwitcher = (page: string) => {
    setPage(page)
  }

  return (
    <aside className="main-menu">
      <nav>
        <h3>Меню</h3>
        <ul>
          <Link to="/">
            <MenuItem
              image={MenuSvg}
              title="Главная"
              currentPage={currentPage}
              pageSwitcher={pageSwitcher}
            />
          </Link>
          <Link to="/address">
            <MenuItem
              image={SearchSvg}
              title="Поиск адресов"
              currentPage={currentPage}
              pageSwitcher={pageSwitcher}
            />
          </Link>
          <MenuItem
            image={SearchSvg}
            title="Поиск адресов"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
          <MenuItem
            image={SearchSvg}
            title="Поиск адресов"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
          <MenuItem
            image={SearchSvg}
            title="Поиск адресов"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
          <MenuItem
            image={SearchSvg}
            title="Поиск адресов"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
