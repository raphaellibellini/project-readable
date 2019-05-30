import React, { Component } from 'react'
import { connect } from 'react-redux'

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

function mapStateToProps ({ posts }, { id }) {
    const post = posts[id]

    return {
        post
    }
}

export default connect(mapStateToProps)(Post)