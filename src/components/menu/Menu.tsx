import React from 'react'
import MenuItem from './item/MenuItem'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './style.scss'

import MenuSvg from './item/img/main.svg'
import SearchSvg from './item/img/search.svg'

const Menu: React.FC = () => {
  return (
    <aside className="main-menu">
      <nav>
        <h3>Меню</h3>
        <ul>
          <Link to="/">
            <MenuItem image={MenuSvg} title="Главная" />
          </Link>
          <Link to="/address">
            <MenuItem image={SearchSvg} title="Поиск адресов" />
          </Link>
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
