import React, { Component } from 'react'
import { format } from 'timeago.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import * as postActions from '../actions/posts';

class Post extends Component {
    render() {
        const { post } = this.props

        if(post === null) {
            return <p>This post doesn't exist</p>
        }

        return (
            <div>
                <div>
                    <FontAwesomeIcon icon="sort-up" />
                    <div>{post.voteScore}</div>
                    <FontAwesomeIcon icon="sort-down" />
                </div>
                <h1>{post.title}</h1>
                <div className="edit-delete">
                    <FontAwesomeIcon icon="edit" />
                    <FontAwesomeIcon icon="trash" onClick={() => this.props.handleDeletePost(post.id)} />
                </div>
                <p>{format(post.timestamp)}, by {post.author}</p>
                <p>{post.body}</p>
            </div>
        )
    }
}

export default connect(null, postActions)(Post)