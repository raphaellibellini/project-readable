import React, { Component } from 'react'
import { format } from 'timeago.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { handleDeletePost, handleVotePost } from '../actions/posts'
import { Link } from 'react-router-dom'

class Post extends Component {
    handleVote = option => {
        this.props.dispatch(handleVotePost(this.props.post.id, option))
    }

    render() {
        const { post, dispatch } = this.props

        if(post === null) {
            return <p>This post doesn't exist</p>
        }

        return (
            <div>
                <div>
                    <FontAwesomeIcon icon="sort-up" onClick={() => this.handleVote('upVote')} />
                    <div>{post.voteScore}</div>
                    <FontAwesomeIcon icon="sort-down" onClick={() => this.handleVote('downVote')} />
                </div>
                <h1>{post.title}</h1>
                <div className="edit-delete">
                    <Link to={'edit/' + post.id}><FontAwesomeIcon icon="edit" /></Link>
                    <FontAwesomeIcon icon="trash" onClick={() => dispatch(handleDeletePost(post.id))} />
                </div>
                <p>{format(post.timestamp)}, by {post.author}</p>
                <p>{post.body}</p>
            </div>
        )
    }
}

export default connect()(Post)