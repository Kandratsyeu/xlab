import * as React from 'react'
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
          <MenuItem image={MenuSvg} title="Главная" />
          <MenuItem image={SearchSvg} title="Поиск адресов" />
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
