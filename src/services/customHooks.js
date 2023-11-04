import { useEffect, useState } from 'react'
import { isLiked, searchComments, searchPost } from './api'

function usePostContent (postID) {
  const storage = window.localStorage.getItem('storageType') === 'local' ? window.localStorage : window.sessionStorage
  console.log(postID + ' postID')

  const [postRequired, setPostRequired] = useState({})
  const [comments, setComments] = useState([])
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    searchPost(postID)
      .then(postRequired => setPostRequired(postRequired))
    searchComments(postID)
      .then(commentsRequired => setComments(commentsRequired))
    isLiked(storage.getItem('userpostID'), postID)
      .then(isLiked => setLiked(isLiked))
  }, [postID])

  return { postRequired, comments, liked }
}

export { usePostContent }
