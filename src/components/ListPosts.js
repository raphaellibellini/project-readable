import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListPosts extends Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.postIds.map((id) => (
                        <li key={id}>
                            <div>POST ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ posts }) {
    return{
        postIds: Object.keys(posts)
            .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
    }
    
}

export default connect(mapStateToProps)(ListPosts)