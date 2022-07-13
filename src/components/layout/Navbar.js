import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {

    //PASSING DEFAULT PROPS


    return (
        <nav style={{ color: "black" }} className="navbar bg-primary">
            {/* <i className={icon} /> */}

            <h1 style={{ marginLeft: "1px" }} >
                <a style={{ color: "black" }} href="/"  >{title}</a>
            </h1>
            <ul >
                <li >
                    <Link style={{ color: "black", fontWeight: "bold" }} to="/">Home</Link>
                </li>
                <li>
                    <Link style={{ color: "black", fontWeight: "bold" }} to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "GitHunt",
    icon: "fa fa-github"
}

//PROP TYPES

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
