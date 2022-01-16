import React, { Component } from 'react'
import panda from "../images/panda.png"
import '../styling/NavigationBar.css'
import { Link } from 'react-router-dom'
import house from '../images/house.svg'
import search from '../images/search.svg'
import gift from '../images/gift-fill.svg'
import clipboard from '../images/clipboard-plus.svg'
import keyfill from '../images/key-fill.svg'

//Navigation Links..Either <li> tags, routes w/ components, bootstrap navbars, navlinks/links..but those are kinda hard 
// routes and links used in conjunction


class NavigationBar extends Component {


    render() {

        return (
            <div className='shadow bg-body rounded'>
                <nav className='navbar navbar-expand-md navbar-light bg-light' >
                    <span className="container-fluid">
                    <a className='navbar-brand'>
                        <img src={panda} className='align-text-top' width="36" height="30" />
                                    &nbsp; Overflow
                                </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#collapsethis">
                        <span className='navbar-toggler-icon'>
                        </span>
                    </button>
                
                     <div className='collapse navbar-collapse' id="collapsethis" style={fontSize} >
                            <div className="navbar-nav " >
                     
                                {/**to reload: use anchor tags + href */}
                                <Link to='/' className='nav-link text-black'><img src={house} className='mb-1' /> Home</Link> 
                                <a className='nav-link text-black'><img src={gift} className='mb-1'/> Upgrade</a>
                                <a className='nav-link text-black'><img  src={search} className='mb-1' /> Search</a>
                             </div>
                        </div>

                    

                        <div  className='collapse navbar-collapse justify-content-end ' id="collapsethis" style={fontSize}>
                            <div className='navbar-nav ' >
                                <Link to="/signup"  className='nav-link'><img src={keyfill} style={{transform: " rotate(90deg) "}} className='mb-1'/>Sign up</Link>
                                <Link to="/login" className='nav-link'><img src={clipboard} className='mb-1'/> Login</Link>
                            </div>
                        </div>


    
                    </span>
                </nav>
            </div>
        )
    }
}

const fontSize = {
    fontSize: '18px'
}

const fontIcon = {

  
}

export default NavigationBar
