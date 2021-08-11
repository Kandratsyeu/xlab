import React, { useState } from 'react'
import MenuItem from './item/MenuItem'
import { Link } from 'react-router-dom'

import './style.scss'

import MenuSvg from './item/img/main.svg'
import SearchSvg from './item/img/search.svg'
import CalendarSvg from './item/img/calendar.svg'
import ExitSvg from './item/img/exit.svg'
import MapSvg from './item/img/map.svg'
import SettingSvg from './item/img/setting.svg'
import TablesSvg from './item/img/tables.svg'
import VidgetSvg from './item/img/vidget.svg'

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
            image={TablesSvg}
            title="Таблицы"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
          <MenuItem
            image={CalendarSvg}
            title="Календарь"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
          <MenuItem
            image={MapSvg}
            title="Карты"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
          <MenuItem
            image={VidgetSvg}
            title="Виджеты"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
          <MenuItem
            image={SettingSvg}
            title="Настройки"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
          <MenuItem
            image={ExitSvg}
            title="Выход"
            currentPage={currentPage}
            pageSwitcher={pageSwitcher}
          />
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
