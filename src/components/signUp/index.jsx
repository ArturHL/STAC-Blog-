import Logo from '../../components/logo'
import PropTypes from 'prop-types'
import { FaAngleLeft } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { createAccount } from '../../fetching'
import './index.css'

SignUp.propTypes = {
  setPage: PropTypes.func.isRequired,
  profileOk: PropTypes.func.isRequired
}

function hideMenu () {
  const menu = document.querySelector('.containerSignUp')
  menu.classList.add('inactive')
}
async function createUser (profileOk) {
  const name = document.querySelector('.name-SignUp').value.toString()
  const username = document.querySelector('.userName-SignUp').value.toString()
  const email = document.querySelector('.email-SignUp').value.toString()
  const password = document.querySelector('.password-SignUp').value.toString()
  const data = { name, username, email, password }
  const succesful = await createAccount(data)
  if (succesful) {
    profileOk(email, password)
  } else {
    window.alert('User already exists')
  }
}

function SignUp ({ setPage, profileOk }) {
  return (
    <div className='containerSignUp inactive'>
      <div className='logIn-container'>
        <Logo setPage={setPage} />
        <div className='loginTitle'>
          <button className='buttonHover' onClick={hideMenu}><FaAngleLeft /></button>
          <p>Sign Up</p>
        </div>
        <div className='google'>
          <FcGoogle />
          <p>Sign in with Google</p>
        </div>
        <div>
          OR USE EMAIL
        </div>
        <form action='' className='loginForm'>
          <input type='text' placeholder='Name' className='principalInput name-SignUp' />
          <input type='text' placeholder='@UserName' className='principalInput userName-SignUp' />
          <input type='text' placeholder='example@email.com' className='principalInput email-SignUp' />
          <input type='text' placeholder='Password' className='principalInput password-SignUp' />
          <div className='extrasLogin'>
            <div>
              <input type='checkbox' className='checkbox' />
              <p>Remember me</p>
            </div>
          </div>
          <button type='button' className='buttonLogin buttonHover' onClick={() => { createUser(profileOk) }}>Sign In</button>
        </form>
      </div>
    </div>

  )
}

export default SignUp
