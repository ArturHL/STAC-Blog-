import './index.css'
import PropTypes from 'prop-types'

Post.propTypes = {
  page: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

async function postUp (ID) {
  const storage = window.localStorage.getItem('storageType') === 'local' ? window.localStorage : window.sessionStorage
  storage.setItem('postID', ID)
}
function Post ({ id, page, category, title, date, img, overview, setPage }) {
  function postType (id, page, category, title, date, img, overview, setPage) {
    if (page === 'Home') {
      return (
        <div className='postItem' onClick={async () => { await postUp(id); setPage('Post') }}>
          <img src={img} alt='' />
          <div className='description-post'>
            <div className='containerAnimated'>
              <p className='category-post'>{category}</p>
              <h4 className='title-post'>{title}</h4>
            </div>
            <p className='date-post'>{date.slice(0, -14)}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className='postItem-archive' onClick={async () => { await postUp(id); setPage('Post') }}>
          <div className='description-post-archive'>
            <h4 className='title-post-archive'>{title}</h4>
            <p className='overview-post-archive'>{overview}</p>
            <p className='date-post-archive'>{date.slice(0, -14)}</p>
          </div>
        </div>
      )
    }
  }
  return (
    <>
      {postType(id, page, category, title, date, img, overview, setPage)}
    </>
  )
}

export default Post
