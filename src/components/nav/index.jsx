import { FaMinus } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import Logo from '../logo'
import './index.css'
import PropTypes from 'prop-types'

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired
}

function Navbar ({ setPage }) {
  const [isDrop, setIsDrop] = useState()
  function showMenu (id) {
    const menu = document.querySelector(`.${id}`)
    if (menu.classList.contains('inactive')) {
      menu.classList.remove('dropUp')
      menu.classList.toggle('inactive')
      setIsDrop(true)
      setTimeout(() => { menu.classList.toggle('dropDown') }, 1)
    } else {
      setTimeout(() => { menu.classList.toggle('dropDown'); menu.classList.toggle('dropUp') }, 1)
      setTimeout(() => {
        menu.classList.toggle('inactive')
      }, 610)
      setIsDrop(false)
    }
  }
  useEffect(() => {
    const item1 = document.querySelector('.menuNavItem01')
    const item2 = document.querySelector('.menuNavItem02')
    const item3 = document.querySelector('.menuNavItem03')
    if (isDrop) {
      item2.classList.add('inactive')
      item1.classList.add('rotateItem1')
      item1.classList.remove('menuNavItem')
      item3.classList.add('rotateItem3')
      item3.classList.remove('menuNavItem')
    } else {
      item1.classList.remove('rotateItem1')
      item1.classList.add('menuNavItem')
      item3.classList.remove('rotateItem3')
      item3.classList.add('menuNavItem')
      setTimeout(() => { item2.classList.remove('inactive') }, 150)
    }
  }, [isDrop])
  return (
    <nav>
      <div>
        <Logo setPage={setPage} />
      </div>
      <div>
        <div className='menuNav' onClick={() => { showMenu('toggableMenuNav') }}>
          <FaMinus className='menuNavItem menuNavItem01' />
          <FaMinus className='menuNavItem menuNavItem02' />
          <FaMinus className='menuNavItem menuNavItem03' />
        </div>
        <div className='toggableMenuNav inactive'>
          <p onClick={() => { setPage('Home') }}>Home</p>
          <p onClick={() => { setPage('Archive') }}>Archive</p>
          <p onClick={() => { setPage('About') }}>About</p>
          <p onClick={() => { setPage('Account') }}>Account</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
