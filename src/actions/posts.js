export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receiveTweets (posts) {
    return {
      type: RECEIVE_POSTS,
      posts
    }
}