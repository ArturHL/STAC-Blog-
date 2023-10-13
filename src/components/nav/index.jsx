import { BiMenu } from 'react-icons/bi'
import './index.css'
import Logo from '../logo'

function Navbar ({ setPage }) {
  function showMenu (id) {
    const menu = document.querySelector(`.${id}`)
    if (menu.classList.contains('inactive')) {
      menu.classList.remove('dropUp')
      menu.classList.toggle('inactive')
      setTimeout(() => { menu.classList.toggle('dropDown') }, 1)
    } else {
      setTimeout(() => { menu.classList.toggle('dropDown'); menu.classList.toggle('dropUp') }, 1)
      setTimeout(() => {
        menu.classList.toggle('inactive')
      }, 610)
    }
  }
  return (
    <nav>
      <div>
        <Logo />
      </div>
      <div>
        <BiMenu className='menuNav' onClick={() => { showMenu('toggableMenuNav') }} />
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
