import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <h1>Index</h1>
            <Link to={'/about'}>
                <span>Navigate About page</span>
            </Link>
        </div>
    )
}

export default Index