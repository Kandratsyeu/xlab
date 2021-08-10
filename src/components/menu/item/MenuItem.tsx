import React from 'react'
import './style.scss'

interface Iprops {
  image: string
  title: string
}

const MenuItem: React.FC<Iprops> = (props) => {
  return (
    <li className="main-menu-item">
      <img src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </li>
  )
}

export default MenuItem
