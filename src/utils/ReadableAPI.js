const api = 'http://localhost:3001'

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

// Categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)


// Posts
export const getPostsInCategory = (category) => {
  const url = category ? `${api}/${category}/posts` : `${api}/posts`
  return fetch(url, { headers })
    .then(res => res.json())
    .then(data => data)
}


export const getPost = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)


export const addPost = post => {
  const data = {
    ...post,
    id: Math.random().toString(),
    timestamp: Date.now(),
  }

  return fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
}


export const editPost = post => {
  const data = {
    ...post,
    timestamp: Date.now()
  }

  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
}


export const deletePost = id => 
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .then(data => data)
    

export const votePost = (id, option) => 
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ option })
    }).then(res => res.json())
      .then(data => data)


// Comments
export const getAllCommentsForPost = postId => 
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data.comments)


export const getComment = id =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)


export const addComment = comment => {
  const data = {
    ...comment,
    id: Math.random().toString(),
    timestamp: Date.now()
  }

  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
}


export const editComment = comment => {
  const data = {
    ...comment,
    timestamp: Date.now()
  }

  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
}


export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .then(data => data)


export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  }).then(res => res.json())
    .then(data => data)