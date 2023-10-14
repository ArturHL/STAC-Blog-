import './about.css'
import Navbar from '../../components/nav'
import Footer from '../../components/footer'
import PropTypes from 'prop-types'

AboutPage.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

function AboutPage ({ setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <section className='sectionAbout'>
        <h4>About <br /> Some Things About Coding</h4>
        <p>
          No hay mucho que decir. Este blog es un pasatiempo y una forma mas de mejorar como desarrollador. Dicen por ahi que la mejor forma de aprender es
          enseñando asi que eso trato de hacer. Si te gusta el contenido de este blog puedes visitar mas de mis proyectos. Tengo ______ que es una plataforma para
          aprender matematicas y ciencias de la computacion. Quiza no sea el mejor contenido educativo pero a mi me ayudo.
        </p>
      </section>
      <Footer setPage={setPage} />
    </>
  )
}

export default AboutPage
