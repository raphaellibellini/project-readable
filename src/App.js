import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { receivePosts } from './actions/posts'
import * as ReadableAPI from './utils/ReadableAPI'

class App extends Component {
  componentDidMount() {
    ReadableAPI.getPostsInCategory()
      .then(res => this.props.dispatch(receivePosts(res)))
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App)
