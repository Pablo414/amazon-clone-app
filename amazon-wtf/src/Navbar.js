import React from 'react'

function Navbar() {
  return (
    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items'>
        <li className='navbar-toggle'></li>
        <Link to='#' className='menu-bars'>
            
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
