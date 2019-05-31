import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SelectCategories extends Component {
    render() {
        const { categories } = this.props

        return (
            <nav>
                <ul>
                    {categories && categories.map((category) => (
                        <li key={category.path}>
                            <Link to={`/category/${category.path}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps ({ categories }) {
    return {
        categories
    }
}

export default connect(mapStateToProps)(SelectCategories)