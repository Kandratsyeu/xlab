import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import Workspace from './components/workspace/Workspace'
import './style.scss'

const App: React.FC = () => {
  return (
    <>
      {
        <Router>
          <Header />
          <Workspace />
        </Router>
      }
    </>
  )
}

export default App
