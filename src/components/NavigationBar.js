import React, { Component } from 'react'
import panda from "../images/panda.png"
import '../styling/NavigationBar.css'
import { NavLink } from 'react-router-dom'





//Navigation Links..Either <li> tags, routes w/ components, bootstrap navbars, navlinks/links..but those are kinda hard 
// routes and links used in conjunction


class NavigationBar extends Component {



    render() {


        return (
            <div className='shadow bg-body rounded font-mono'>
                <nav id="navBackgroundColor" className='navbar navbar-expand-lg navbar-dark pt-5 ' >
                    <span className="container-fluid">

                        <button className='navbar-toggler ' type='button' data-bs-toggle='collapse' data-bs-target="#collapsethis">
                            <span class="navbar-toggler-icon"></span>

                        </button>
                        {/**for mobile */}
                        <h2 className='navbar-brand ms-5  fs-3 fw-bold d-block d-lg-none'>
                            <span className='text-white '>Tailwind</span>
                        </h2>


                        <div className='collapse navbar-collapse justify-content-between' id="collapsethis" style={fontSize} >
                            {/**for desktop */}
                            <h2 className=' ms-5 fs-3 fw-bold d-none d-lg-block '>
                                <span className='text-white '>Tailwind</span>
                            </h2>
                            <div className="navbar-nav " >

                                {/**to reload: use anchor tags + href */}
                                {/**Using NavLink instead of Link. Its way better because .active works for NavLink instead of Link since .active is 
                                 * a child of NavLink. so it gets the property default ".active" in css
                                 */}

                                <NavLink to='/' className='nav-link text-muted fw-bold p-md-0 p-sm-0 p-0  '>Home</NavLink>
                                <NavLink to='/upgrade' className='nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  '>Upgrade</NavLink>
                                <NavLink to='/search' className='nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  '> Search</NavLink>

                                <NavLink to="/faq" className='nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  '>
                                    FAQ</NavLink>
                                <NavLink to="/tos" className='nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  '>
                                    About</NavLink>
                                {/**for mobile   */}
                                <div className='d-block d-sm-none'>
                                    <NavLink to="/signup" className='nav-link text-muted  ms-xl-5  p-0 fw-bold '>
                                        Sign up</NavLink>
                                </div>
                                <div className='d-block d-sm-none'>
                                    <NavLink to="/login" className='nav-link text-muted ms-xl-5  p-0  fw-bold '>
                                        Login</NavLink>
                                </div>

                            </div>

                            <div className='navbar-nav '>   {/**desktop */}
                                <NavLink to="/signup" className='nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-2'>
                                    Sign up</NavLink>
                                <NavLink to="/login" className='nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-3'>
                                    Login</NavLink>

                            </div>

                        </div>





                    </span>
                </nav>
            </div >
        )
    }
}

const fontSize = {
    fontSize: '18px'
}



export default NavigationBar
