import { RECEIVE_POSTS, VOTE_POST, ADD_POST, DELETE_POST } from '../actions/posts'

export default function posts (state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return [
                ...state,
                ...action.posts
            ]
        case VOTE_POST:
            return state.map(post => {
                if (post.id === action.id) {
                  if (action.option === "upVote") {
                    return { ...post, voteScore: post.voteScore + 1 }
                  }
                  if (action.option === "downVote") {
                    return { ...post, voteScore: post.voteScore - 1 }
                  }
                }
                return post
              })
        case ADD_POST:
            return [
                ...state,
                action.post
            ]
        case DELETE_POST:
            return state.filter((post) => post.id !== action.id)
        default:
            return state
    }
}