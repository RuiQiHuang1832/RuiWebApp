import React, { Component } from 'react'
import panda from "../images/panda.png"
import '../styling/NavigationBar.css'
import { Link } from 'react-router-dom'

//Navigation Links..Either <li> tags, routes w/ components, bootstrap navbars, navlinks/links..but those are kinda hard 
// routes and links used in conjunction


class NavigationBar extends Component {


    render() {

        return (
            <div className='shadow bg-body rounded'>
                <nav className='navbar navbar-expand-md navbar-light bg-light'>
                    <div className="container-fluid">
                        <span style={fontSize}>
                            <div className="navbar-nav">
                                <a className='navbar-brand'>
                                    <img src={panda} className='align-text-top' width="36" height="30" />
                                    &nbsp; Overflow
                                </a>
                                {/**to reload: use anchor tags + href */}
                                <Link to='/' className='nav-link'>Home</Link>
                                <a className='nav-link'>Upgrade</a>
                                <a className='nav-link'>Search</a>
                        
                            </div>
                        </span>
                        <span style={fontSize}>
                            <div className='navbar-nav navbar-collapse justify-content-end' >
                                <Link to="/signup" className='nav-link'>Sign up</Link>
                                <Link to="/login" className='nav-link'>Login </Link>
                            </div>
                        </span>

                    </div>
                </nav>
            </div>
        )
    }
}

const fontSize = {
    fontSize: '18px'
}

export default NavigationBar
