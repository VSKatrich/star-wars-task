import { NavLink } from "react-router-dom"

import st from './Sidebar.module.css'

const Sidebar = ({ starships }) => {

  const linkElements = [...starships].map(ship => {
    const linkShip = ship.split('/')
    const shipNumber = linkShip[linkShip.length - 2]

    const selected = ({ isActive }) => isActive ? st.active_link : st.link;

    return (
      <NavLink
        className={selected}
        key={shipNumber}
        to={'ship/' + shipNumber}
      >Ship {shipNumber}
      </NavLink>
    )
  })

  return (
    <div className={st.sidebar}>
      {linkElements}
    </div>
  )
}

export default Sidebar