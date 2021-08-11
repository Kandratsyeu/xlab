import React from 'react'
import './style.scss'

interface Iprops {
  image: string
  title: string
  currentPage: string
  pageSwitcher(page: string): void
}

const MenuItem: React.FC<Iprops> = (props) => {
  return (
    <li
      className={
        `main-menu-item ` + (props.title === props.currentPage ? 'active' : '')
      }
      onClick={() => {
        props.pageSwitcher(props.title)
      }}
    >
      <img src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </li>
  )
}

export default MenuItem
