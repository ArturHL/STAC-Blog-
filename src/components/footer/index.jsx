import './index.css'

import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import Logo from '../logo'
import PropTypes from 'prop-types'

Footer.propTypes = {
  setPage: PropTypes.func.isRequired
}

function Footer ({ setPage }) {
  return (
    <section className='footer'>
      <div className='footer-header'>
        <p>STAC</p>
        <div className='footerAKA'>
          <Logo setPage={setPage} />
          <Logo setPage={setPage} />
          <Logo setPage={setPage} />
          <Logo setPage={setPage} />
          <Logo setPage={setPage} />
        </div>
      </div>
      <div className='footer-description'>
        Blog sobre desarrollo de sofware, tecnologia, solucion de problemas comunes e implementaciones de codigo.
      </div>
      <div className='footer-more'>
        <p>Created By Arturo Hernandez</p>
        <div className='socialMedia'>
          <AiOutlineInstagram />
          <AiFillGithub />
          <FaXTwitter />
        </div>
      </div>
    </section>
  )
}

export default Footer
