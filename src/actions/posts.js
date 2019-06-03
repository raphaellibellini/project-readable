import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'

export function receivePosts (posts) {
    return {
      type: RECEIVE_POSTS,
      posts
    }
}

function addPost (post) {
  return {
    type: ADD_POST,
    post
  }
}

export function handleAddPost (post) {
  post = {
    ...post,
    id: Math.random().toString(),
    timestamp: Date.now()
  }

  return dispatch => {
    return ReadableAPI.addPost(post)
      .then((post) => dispatch(addPost(post)))
  }
}