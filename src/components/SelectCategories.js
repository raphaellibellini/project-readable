import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectCategories extends Component {
    render() {
        const { categories } = this.props

        return (
            <div>
                <ul>
                    {categories && categories.map((category) => (
                        <li key={category.path}>{category.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ categories }) {
    return {
        categories
    }
}

export default connect(mapStateToProps)(SelectCategories)