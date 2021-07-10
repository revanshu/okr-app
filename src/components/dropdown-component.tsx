import React, { useState } from 'react'
import logo from '../assets/user-solid-circle.svg';

interface Okrs {
  id: string
  title: string
  category: string
  childs: Okrs[]
}

export default function DropDownComponent(props: { data: Okrs }) {
  const [showObjectives, setshowObjectives] = useState(true)

  const dropdownClick = () => {
    setshowObjectives(!showObjectives)
  }

  const childRows = props.data.childs.map((child) => (
    <div className="child row" key={child.id}>
      <div className="vertical" />
      <div className="horizontal" />
      <img src={logo} alt="user icon" />
      {child.title}
    </div>
  ))

  return (
    <div className="drop-down-container">
      <div className="parent row">
        <div className={showObjectives && props.data.childs.length > 0 ? 'vertical' : ''} />
        <div className="dropdown-icon" onClick={dropdownClick}>
          <i className={'arrow ' + (showObjectives ? 'down' : 'right')} />
        </div>
        <img src={logo} alt="user icon" />
        {props.data.title}
      </div>
      {showObjectives && childRows}
    </div>
  )
}
