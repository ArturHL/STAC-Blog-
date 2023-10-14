import './account.css'
import Navbar from '../../components/nav'
import Footer from '../../components/footer'
import PropTypes from 'prop-types'

AccountPage.propTypes = {
  setPage: PropTypes.func.isRequired
}

function AccountPage ({ setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <div className='profileCard'>
        <img src='https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=600' alt='profile img' className='profileImg' />
        <div>
          <p className='userProfile'>@username</p>
          <p className='emailProfile'>email@example.com</p>
          <p className='passwordProfile'>*********</p>
        </div>
      </div>
      <div className='profileOptions'>
        <p>Mis Likes</p>
        <p>Mis Comentarios</p>
      </div>
      <Footer setPage={setPage} />
    </>

  )
}

export default AccountPage
