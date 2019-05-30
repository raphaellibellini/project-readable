import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { receivePosts } from './actions/posts'
import * as ReadableAPI from './utils/ReadableAPI'
import { receiveCategories } from './actions/categories';
import ListPosts from './components/ListPosts'
import Nav from './components/Nav'

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
        <Nav />
        <ListPosts />
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
