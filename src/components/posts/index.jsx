import './index.css'
import PropTypes from 'prop-types'

Post.propTypes = {
  page: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

function Post ({ page, category, title, date, img, overview, setPage }) {
  function postType (page, category, title, date, img, overview) {
    if (page === 'Home') {
      return (
        <div className='postItem' onClick={() => { setPage('Post') }}>
          <img src={img} alt='' />
          <div className='description-post'>
            <div className='containerAnimated'>
              <p className='category-post'>{category}</p>
              <h4 className='title-post'>{title}</h4>
            </div>
            <p className='date-post'>{date}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className='postItem-archive'>
          <div className='description-post-archive'>
            <h4 className='title-post-archive'>{title}</h4>
            <p className='overview-post-archive'>{overview}</p>
            <p className='date-post-archive'>{date}</p>
          </div>
        </div>
      )
    }
  }
  return (
    <>
      {postType(page, category, title, date, img, overview)}
    </>
  )
}

export default Post
