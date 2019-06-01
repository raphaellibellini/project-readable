import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewPost extends Component {
    render() {
        const { categories } = this.props

        return (
            <div>
                <form>
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