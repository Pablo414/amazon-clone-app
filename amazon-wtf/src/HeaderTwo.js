import React from 'react';
import './HeaderTwo.css';

function HeaderTwo() {
  return (
    <div className='header__two'>
      <div header='header__content'>
      <div className='header__top'>
        <h2>Categories</h2>
      </div>
      <div id='buttons' className='header__bottom '>
        <h5>All</h5>
        <h5>Comics</h5>
        <h5>Pokemon</h5>
        <h5>Football</h5>
        <h5>Hockey</h5>
        <h5>Funko Pop</h5>
        <h5>Famous People</h5>
      </div>
      </div>
    </div>
  )
}

export default HeaderTwo
