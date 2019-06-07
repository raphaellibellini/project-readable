import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'

export function receivePosts (posts) {
    return {
      type: RECEIVE_POSTS,
      posts
    }
}

function votePost (id, option) {
  return {
    type: VOTE_POST,
    id,
    option
  }
}

export function handleVotePost (id, option) {
  return dispatch => {
    return ReadableAPI.votePost(id, option)
      .then(() => dispatch(votePost(id, option)))
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

function deletePost (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function handleDeletePost (id) {
  return dispatch => {
    return ReadableAPI.deletePost(id)
      .then(() => dispatch(deletePost(id)))
  }
}