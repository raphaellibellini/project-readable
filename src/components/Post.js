import React, { Component } from 'react'
import { format } from 'timeago.js';


class Post extends Component {
    render() {
        const { post } = this.props

        if(post === null) {
            return <p>This post doesn't exist</p>
        }

        return (
            <div>
                <h1>{post.title}</h1>
                <p>{format(post.timestamp)}, by {post.author}</p>
                <p>{post.body}</p>
            </div>
        )
    }
}

export default Post