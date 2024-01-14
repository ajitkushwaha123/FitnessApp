import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/track"}>Track</NavLink></li>
        <li><NavLink to={"/workout"}>Workout</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
