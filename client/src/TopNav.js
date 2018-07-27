import React from 'react'
import { Link } from 'react-router-dom'
import TypeLogo from './TypeLogo.js'

import './styles/TopNav.css'

const NavLink = (props) => (
  <a href={`/${props.path}`}>
    <button>{props.path}</button>
  </a>
)

const TopNav = () => (
  <div id="topnav">
    <Link to={"/"}>
      <TypeLogo type="nav"/>
    </Link>
    <NavLink path="connect"></NavLink>
    <NavLink path="corporate"></NavLink>
    <NavLink path="about"></NavLink>
    <NavLink path="events"></NavLink>
  </div>
)

export default TopNav
