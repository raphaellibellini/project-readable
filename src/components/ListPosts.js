import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class ListPosts extends Component {
    state = {
        sortBy: 'date'
    }
    
    handleChange = e => {
    const value = e.target.value

        this.setState(() => ({
            sortBy: value
        }))
    }
    
    sortBy(posts) {
        switch (this.state.sortBy) {
            case 'voteScore':
                return posts.sort((a, b) => b.voteScore - a.voteScore)
            case 'date':
                return posts.sort((a, b) => b.timestamp - a.timestamp)
            default:
                return posts
        }
    }

    render() {
        let { posts } = this.props
        const category = this.props.match.params.id
        if (category !== undefined) {
            posts = posts.filter(post => {
                return post.category === category
            })
        }

        if (posts !== undefined && posts.length > 1) {
            posts = this.sortBy(posts)
        }

        return(
            <div>
                <form>
                    <label>
                    Sort By
                        <select onChange={e => this.handleChange(e)}>
                            <option value="date" defaultValue>Date</option>
                            <option value="voteScore">Score</option>
                        </select>
                    </label>
                </form>


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