import Footer from '../../components/footer'
import Navbar from '../../components/nav/index'
import Post from '../../components/posts'
import './home.css'
import PropTypes from 'prop-types'

const endpoint = 'http://localhost:3000/posts'

HomePage.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

async function fetching (endpoint) {
  let response = []
  await fetch(endpoint)
    .then(res => res.json())
    .then(res => { response = res })
  return response
}
const posts = await fetching(endpoint)

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
            <Post key={index} page={page} title={item.title} category={item.category} img={item.img} date={item.date} overview={item.overview} setPage={setPage} />
          )
        })}
      </section>
      <p className='link'>No encuentras un Post? Ve al Archivo</p>
      <Footer setPage={setPage} />
    </>
  )
}

export default HomePage
