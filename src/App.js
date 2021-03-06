import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { receivePosts } from './actions/posts'
import * as ReadableAPI from './utils/ReadableAPI'
import { receiveCategories } from './actions/categories';
import ListPosts from './components/ListPosts'
import Nav from './components/Nav'
import SelectCategories from './components/SelectCategories'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import NewPost from './components/NewPost'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrash, faSortUp, faSortDown)

class App extends Component {
  componentDidMount() {
    ReadableAPI.getPostsInCategory()
      .then(res => this.props.dispatch(receivePosts(res)))

    ReadableAPI.getCategories()
      .then(res => this.props.dispatch(receiveCategories(res)))
  }

  render() {
    return (
      <div>
        <Nav />
        <SelectCategories />
        <Route exact path='/' component={ListPosts} />
        <Route exact path='/category/:id' component={ListPosts} />
        <Route path='/new' component={NewPost} />
        <Route exact path='/edit/:id' component={NewPost} />
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
