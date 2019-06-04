import { RECEIVE_POSTS, ADD_POST, DELETE_POST } from '../actions/posts'

export default function posts (state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return [
                ...state,
                ...action.posts
            ]
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