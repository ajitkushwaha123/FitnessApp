import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul className='flex'>
        <li className='pr-10'><NavLink to={"/"}>Home</NavLink></li>
        <li className='pr-10'><NavLink to={"/track"}>Track</NavLink></li>
        <li className='pr-10'><NavLink to={"/workout"}>Workout</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
