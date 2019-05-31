import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class ListPosts extends Component {
    render() {
        let { posts } = this.props
        const category = this.props.match.params.id
        if (category !== undefined) {
            posts = posts.filter(post => {
                return post.category === category
            })
        }

        return(
            <div>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Post post={post} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ posts }) {
    return { posts }
}

export default connect(mapStateToProps)(ListPosts)