import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewPost extends Component {
    state = {
        title: "",
        body: "",
        author: "",
        category: "",
        toHome: false
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState(() => ({
          [name]: value
        }))
    }
    
    handleSubmit = e => {
        e.preventDefault()

        const { title, body, author, category } = this.state

        console.log("New Post", `Titulo ${title}, Body ${body}, Author ${author}, Cat ${category}`)

        this.setState(() => ({
            author: '',
            title: '',
            category: '',
            body: '',
            toHome: false
        }))
    }

    render() {
        const { categories } = this.props
        const { body, toHome } = this.state

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
                    <label>Category</label>
                    <select onChange={e => this.handleChange(e)} name="category">
                    {categories.map((category, index) => (
                        <option key={index} value={category.name}>
                        {category.name}
                        </option>
                    ))}
                    </select>
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