import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ({icon,title}) => {
    
    //PASSING DEFAULT PROPS

    
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}/>
                    {title}
                </h1>
                <ul>
                    <li>
                        {/* IF WE HAVE SOME STATE LETS SAY WE HAD SOME SEARCH FOR GIT PROFILES AND THEN 
                        IF WE USE a TAG AND CLICK ABOUT AND THEN GO BACK THEN OUR STATE WOULD HAVE GONE
                        SO TO RETAIN THOSE RESULTS Link IS USED */}
                        {/* <a href="/">Home</a> */} 
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <a href="/about">About</a> */}
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps={
    title:"Github Finder",
    icon:"fa fa-github"
  }

//PROP TYPES

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}


export default Navbar
