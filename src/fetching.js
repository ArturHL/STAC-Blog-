const endpoint = 'http://localhost:3000/'

async function fetching (endpoint) {
  let response = []
  await fetch(endpoint)
    .then(res => res.json())
    .then(res => { response = res })
  return response
}
async function postFetching (endpoint, data) {
  let response = []
  await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => { response = res })
  return response
}
async function deleteFetching (endpoint) {
  let response = []
  await fetch(endpoint, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(res => { response = res })
  return response
}

async function allPosts () {
  const response = await fetching(`${endpoint}posts`)
  return response
}
async function searchUser (userEmail) {
  const response = await fetching(`${endpoint}users/email/${userEmail}`)
  return response
}
async function createAccount (data) {
  const response = await postFetching(`${endpoint}users`, data)
  return response
}
async function searchPost (postId) {
  const response = await fetching(`${endpoint}posts/${postId}`)
  return response
}
async function searchComments (postId) {
  const response = await fetching(`${endpoint}comments/${postId}`)
  return response
}
async function postCommentOnDB (data) {
  const response = await postFetching(`${endpoint}comments`, data)
  return response
}
async function likeOnDB ({ userId, postId, isLiked }) {
  if (!isLiked) {
    const res = await postFetching(`${endpoint}likes`, { userId, postId })
    console.log(`${endpoint}likes` + ' ' + userId + ' ' + postId + ' ' + isLiked)
    return res
  } else {
    console.log(`${endpoint}likes/${userId}/${postId}`)
    const res = await deleteFetching(`${endpoint}likes/${userId}/${postId}`)
    return res
  }
}
async function isLiked (userId, postId) {
  const response = await fetching(`${endpoint}likes/${userId}/${postId}`)
  return response
}

export { fetching, allPosts, searchUser, searchPost, postCommentOnDB, searchComments, likeOnDB, isLiked, createAccount }
