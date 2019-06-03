import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'
import { Redirect } from 'react-router-dom'

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: '',
        toHome: false
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState(() => ({
          [name]: value
        }))
    }

    validate = () => {
        const { title, author, category, body } = this.state;
        return title !== '' && author !== '' && category !== '' && body !== '';
    }
    
    handleSubmit = e => {
        e.preventDefault()

        const { ...post } = this.state
        const { dispatch } = this.props

        if (this.validate()) {
            dispatch(handleAddPost(post))

            this.setState(() => ({
                title: '',
                body: '',
                author: '',
                category: '',
                toHome: true
            }))
        } else {
            alert('Error adding post! Please fill in all the fields.')
        }
    }

    render() {
        const { categories } = this.props
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h2>Compose your new Post</h2>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title</label>
                        <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        className="input"
                        />
                </div>
                <div>
                    <label>Body</label>
                    <textarea
                        placeholder="What's happening?"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280}
                    />
                </div>
                <div>
                    <label>Author</label>
                    <input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleChange}
                    className="input"
                    />
                </div>
                <div>
                    <label htmlFor="category">
                    <select
                        id="category"
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value="select">Select Category</option>
                        {categories.map(category => (
                        <option key={category.path} value={category.name}>
                            {category.name}
                        </option>
                        ))}
                    </select>
                    </label>
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({ categories }) {
    return {
        categories
    }
}

export default connect (mapStateToProps)(NewPost)