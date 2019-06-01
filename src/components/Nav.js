import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/' exact>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/new'>
                        New Post
                    </Link>
                </li>
            </ul>
        </nav>
    )
}