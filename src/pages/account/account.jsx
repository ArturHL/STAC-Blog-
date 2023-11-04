import './account.css'
import Navbar from '../../components/nav'
import Footer from '../../components/footer'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { FaAngleLeft, FaBookmark } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { TbCategoryFilled } from 'react-icons/tb'
import { FiMoreVertical } from 'react-icons/fi'
import Logo from '../../components/logo'
import Post from '../../components/posts'
import { allPosts, searchUser } from '../../services/api'
import SignUp from '../../components/signUp'
import { emptyValidator } from '../../services/utils'

AccountPage.propTypes = {
  setPage: PropTypes.func.isRequired
}

const posts = await allPosts()
const storage = window.localStorage
const session = window.sessionStorage

function AccountPage ({ setPage }) {
  const [pageProfile, setPageProfile] = useState(false)
  function pageState (storage) {
    storage.getItem('userLogged') === '1' ? setPageProfile(true) : setPageProfile(false)
  }
  async function profileOk (Email, Password) {
    const email = Email
    const password = Password
    const emailIsNull = emptyValidator('email')
    const passwordIsNull = emptyValidator('password')
    if (emailIsNull & passwordIsNull) {
      const userProfile = await searchUser(email)
      const storageType = document.querySelector('.checkbox').checked
      if (userProfile) {
        if (userProfile.password === password) {
          if (storageType) {
            storage.setItem('userID', userProfile.id)
            storage.setItem('user@', userProfile.username)
            storage.setItem('userLogged', '1')
            storage.setItem('storageType', 'local')
            pageState(storage)
          } else {
            session.setItem('userID', userProfile.id)
            session.setItem('user@', userProfile.username)
            session.setItem('userLogged', '1')
            storage.setItem('storageType', 'session')
            session.setItem('storageType', 'session')
            pageState(session)
          }
          setPageProfile(true)
        } else {
          window.alert('Contraseña incorrecta')
        }
      } else {
        window.alert('El usuario no existe')
      }
    } else {
      window.alert('Rellena todos los campos')
    }
  }
  function dropMenu () {
    const moreMenuProfile = document.querySelector('.moreMenuProfile')
    if (moreMenuProfile.classList.contains('inactive')) {
      moreMenuProfile.classList.remove('inactive')
      setTimeout(() => {
        moreMenuProfile.classList.add('moreMenuProfileDrop')
      }, 10)
    } else {
      moreMenuProfile.classList.remove('moreMenuProfileDrop')
      setTimeout(() => {
        moreMenuProfile.classList.add('inactive')
      }, 310)
    }
  }
  function closeSession () {
    storage.clear()
    session.clear()
    window.location.reload()
  }
  function showSignUp () {
    const signUp = document.querySelector('.containerSignUp')
    signUp.classList.remove('inactive')
  }
  function isConnected () {
    const storageSet = storage.getItem('storageType') === 'local' ? storage : session
    if (pageProfile) {
      const page = 'Home'
      return (
        <>
          <Navbar setPage={setPage} />
          <div className='moreMenuProfile inactive'>
            <AiOutlineClose className='closeMenuProfile' onClick={dropMenu} />
            <p>Editar Perfil</p>
            <p onClick={closeSession}>Cerrar Sesion</p>
          </div>
          <div className='profileContainer'>
            <div className='profileCard'>
              <img src='https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=600' alt='profile img' className='profileImg' />
              <div>
                <p className='userProfile'>@{storageSet.getItem('user@')}</p>
                <p className='passwordProfile'>*********</p>
              </div>
              <FiMoreVertical onClick={dropMenu} />
            </div>
            <div className='moreSection'>
              <div className='stats'><AiFillHeart className='heart' /> <div><p className='stat'>123</p>Likes</div></div>
              <div className='stats'><TbCategoryFilled className='category' /> <div><p className='stat'>Technologia</p>Categoria</div></div>
              <div className='stats'><FaBookmark className='saves' /> <div><p className='stat'>4</p>Guardados</div></div>
            </div>
            <div className='commentsSection'>
              <h2>Estos son los Post en los que has comentado</h2>
              {posts.slice(0, 3).map((item, index) => {
                return (
                  <Post key={index} id={item.id} page={page} title={item.title} category={item.category} img={item.url} date={item.date} overview={item.overview} setPage={setPage} />
                )
              })}
              <p>Ver mas</p>
            </div>
          </div>

          <Footer setPage={setPage} />
        </>

      )
    } else {
      return (
        <>
          <div className='logIn-container'>
            <Logo setPage={setPage} />
            <div className='loginTitle'>
              <button className='buttonHover' onClick={() => { setPage('Home') }}><FaAngleLeft /></button>
              <p>Log In</p>
            </div>
            <div className='google'>
              <FcGoogle />
              <p>Sign in with Google</p>
            </div>
            <div>
              OR USE EMAIL
            </div>
            <form action='' className='loginForm'>
              <input type='text' placeholder='example@email.com' className='principalInput email' />
              <input type='text' placeholder='Password' className='principalInput password' />
              <div className='extrasLogin'>
                <div>
                  <input type='checkbox' className='checkbox' />
                  <p>Remember me</p>
                </div>
                <p className='forgotPassword'>Forgot password?</p>
              </div>
              <button type='button' className='buttonLogin buttonHover' onClick={() => { profileOk(document.querySelector('.email').value.toString(), document.querySelector('.password').value.toString()) }}>Log In</button>
            </form>
            <div className='footerLogin'>
              Don&apos;t have an account? <button onClick={showSignUp}>Sign Up</button>
            </div>
          </div>
          <SignUp setPage={setPage} profileOk={profileOk} />
        </>
      )
    }
  }
  useState(() => {
    const storageSet = storage.getItem('storageType')
    storageSet === 'local' ? pageState(storage) : pageState(session)
  }, [])
  return (
    <>
      {isConnected()}
    </>
  )
}

export default AccountPage
