import React, { Component } from 'react'

class Post extends Component {
    render() {
        const { post } = this.props

        if(post === null) {
            return <p>This post doesn't exist</p>
        }

        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.author}</p>
                <p>{post.body}</p>
            </div>
        )
    }
}

export default Post