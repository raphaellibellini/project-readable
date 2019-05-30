import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { receivePosts } from './actions/posts'
import * as ReadableAPI from './utils/ReadableAPI'
import { receiveCategories } from './actions/categories';

class App extends Component {
  componentDidMount() {
    ReadableAPI.getPostsInCategory()
      .then(res => this.props.dispatch(receivePosts(res)))

    ReadableAPI.getCategories()
      .then(res => this.props.dispatch(receiveCategories(res)))
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <div>
          <nav>
            <ul>
              {categories && categories.map((category) => (
                <li key={category.path}>
                  <b>{category.name}</b>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
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
    posts: state.posts,
    categories: state.categories
  }
}

export default connect(mapStateToProps)(App)
