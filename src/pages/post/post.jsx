import Footer from '../../components/footer'
import Navbar from '../../components/nav/index'
import { FcLike } from 'react-icons/fc'
import { FaRegBookmark, FaBookmark, FaRegHeart } from 'react-icons/fa6'
import './post.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

PostPage.propTypes = {
  setPage: PropTypes.func.isRequired
}

function PostPage ({ setPage }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const comments = [
    {
      id: 1,
      author: 'Usuario 1',
      text: 'Este es un comentario de ejemplo 1.'
    },
    {
      id: 2,
      author: 'Usuario 2',
      text: 'Este es un comentario de ejemplo 2.'
    },
    {
      id: 3,
      author: 'Usuario 3',
      text: 'Este es un comentario de ejemplo 3.'
    }
  ]
  function likePost () {
    console.log('Like post')
    setIsLiked(!isLiked)
  }
  function savePost () {
    console.log('Save post')
    setIsSaved(!isSaved)
  }
  return (
    <>
      <Navbar setPage={setPage} />
      <div className='post-container'>
        <h1 className='post-title'>Linterns en JS?</h1>
        <div className='post-info'>
          <span className='post-date'>10/26/23</span>
          <span className='post-author'> Arturo Hernandez</span>
        </div>
        <div className='post-content'>
          <img className='post-image' src='data:image/png;base64,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' alt='Imagen Destacada' />
          <p>Para usar un linter tienes que estarr mucho rato batallando con el, sobre todo si no hablas ingles. es un detalle cuando todos los errores te salen en ingles y tienes que andar googleando y traduciendo todo. jaja.</p>
        </div>
        <div className='post-footer'>
          <div className='post-actions'>
            <button className='action-button' onClick={likePost}>
              {isLiked ? <FcLike /> : <FaRegHeart />}
            </button>
            <button className='action-button' onClick={savePost}>
              {isSaved ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </div>
          <div className='share-buttons'>
            <button className='share-button'>Compartir en Facebook</button>
            <button className='share-button'>Compartir en Twitter</button>
          </div>
          <div className='comments-section'>
            <h2>Comentarios</h2>
            <ul className='comments-list'>
              {comments.map((comment) => (
                <li key={comment.id} className='comment-item'>
                  <strong>{comment.author}:</strong> {comment.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  )
}

export default PostPage
