import Footer from '../../components/footer'
import Navbar from '../../components/nav/index'
import { FcLike } from 'react-icons/fc'
import { FaRegBookmark, FaBookmark, FaRegHeart } from 'react-icons/fa6'
import './post.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { postCommentOnDB, likeOnDB } from '../../services/api'
import { userValidator } from '../../services/utils'
import { usePostContent } from '../../services/customHooks'

PostPage.propTypes = {
  setPage: PropTypes.func.isRequired
}

const storage = window.localStorage

function PostPage ({ setPage }) {
  const { postRequired, comments, liked } = usePostContent(storage.getItem('postID'))
  console.log({ postRequired, comments, liked })
  const [isLiked, setIsLiked] = useState(liked === 'true')
  const [isSaved, setIsSaved] = useState(false)
  function likePost () {
    const validation = userValidator(storage)
    if (validation) {
      const userId = storage.getItem('userID')
      const postId = storage.getItem('postID')
      setIsLiked(!isLiked)
      likeOnDB({ userId, postId, isLiked })
    } else {
      window.alert('Debes iniciar sesion para poder dar like')
    }
  }
  function savePost () {
    const validation = userValidator(storage)
    if (validation) {
      console.log('Save post')
      setIsSaved(!isSaved)
    } else {
      window.alert('Debes iniciar sesion para poder guardar tus post favoritos')
    }
  }
  function updatePage () {
    document.querySelector('.comment-input').value = ''
    // newComments()
  }
  function postComment () {
    const validation = userValidator(storage)
    if (validation) {
      const content = document.querySelector('.comment-input').value
      const userId = storage.getItem('userID')
      const postId = storage.getItem('postID')
      postCommentOnDB({ userId, postId, content })
      updatePage()
    } else {
      window.alert('Debes iniciar sesion para poder comentar')
    }
  }
  return (
    <>
      <Navbar setPage={setPage} />
      <div className='post-container'>
        <h1 className='post-title'>{postRequired.title}</h1>
        <div className='post-info'>
          <span className='post-date'>{postRequired.date.slice(0, -14)}</span>
          <span className='post-author'> Arturo Hernandez</span>
        </div>
        <div className='post-content'>
          <img className='post-image' src={postRequired.url} alt='Imagen Destacada' />
          <p>{postRequired.content}</p>
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
            <button className='share-button'>Compartir en X</button>
          </div>
          <div className='comments-section'>
            <h2>Comentarios</h2>
            <input type='text' className='comment-input' placeholder='Escribe un comentario...' />
            <button type='button' className='comment-send' onClick={postComment}>Enviar</button>
            <ul className='comments-list'>
              {comments.map((comment) => (
                <li key={comment.id} className='comment-item'>
                  <strong>{comment.userId}:</strong> {comment.content}
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
