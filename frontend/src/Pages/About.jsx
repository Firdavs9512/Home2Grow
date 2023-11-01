import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <NavLink to={'/'}>
            Navigate index page
        </NavLink>
    </div>
  )
}

export default About