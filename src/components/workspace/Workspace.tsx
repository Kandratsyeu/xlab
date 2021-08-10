import React from 'react'
import Menu from '../menu/Menu'
import MainPage from '../../pages/main/MainPage'
import AddressPage from '../../pages/address/AddressPage'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './style.scss'

const Workspace: React.FC = () => {
  return (
    <main className="main-workspace">
      <Menu />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/address" component={AddressPage}></Route>
      </Switch>
    </main>
  )
}

export default Workspace
