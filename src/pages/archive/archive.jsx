import Footer from '../../components/footer'
import Navbar from '../../components/nav'
import Post from '../../components/posts'
import './archive.css'
import PropTypes from 'prop-types'
import { allPosts } from '../../fetching'

ArchivePage.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

const posts = await allPosts()

function ArchivePage ({ page, setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <section className='sectionHero-Archive'>Archivo</section>
      <section className='sectionPost-Archive'>
        {posts.map((item, index) => {
          return (
            <Post key={index} id={item.id} page={page} title={item.title} category={item.category} img={item.url} date={item.date} overview={item.overview} setPage={setPage} />
          )
        })}
      </section>
      <Footer setPage={setPage} />
    </>
  )
}

export default ArchivePage
