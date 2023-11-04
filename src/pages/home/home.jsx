import Footer from '../../components/footer'
import Navbar from '../../components/nav/index'
import Post from '../../components/posts'
import './home.css'
import PropTypes from 'prop-types'
import { allPosts } from '../../services/api'

HomePage.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

const posts = await allPosts()

function HomePage ({ page, setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <section className='section-welcome'>
        <h1>Some Things About Coding</h1>
        <p>Bienvenido a STAC - Blog sobre desarrollo de sofware, tecnologia, solucion de problemas comunes e implementaciones de codigo.</p>
      </section>
      <section className='section-post'>
        {posts.slice(0, 3).map((item, index) => {
          return (
            <Post key={index} id={item.id} page={page} title={item.title} category={item.category} img={item.url} date={item.date} overview={item.overview} setPage={setPage} />
          )
        })}
      </section>
      <p className='link' onClick={() => { setPage('Archive') }}>No encuentras un Post? Ve al Archivo</p>
      <Footer setPage={setPage} />
    </>
  )
}

export default HomePage
