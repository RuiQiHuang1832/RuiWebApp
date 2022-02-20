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
                <nav id="navBackgroundColor" className='navbar navbar-expand-md navbar-dark pt-5 ' >
                    <span className="container-fluid">

                        <button className='navbar-toggler ' type='button' data-bs-toggle='collapse' data-bs-target="#collapsethis">
                            <span className='navbar-toggler-icon '>
                            </span>
                        </button>
                        <h2 className='navbar-brand ms-5  fs-3 fw-bold d-block d-sm-none'>
                            <span className='text-white '>Tailwind</span>
                        </h2>


                        <div className='collapse navbar-collapse justify-content-between' id="collapsethis" style={fontSize} >
                            <h2 className=' ms-5 fs-3 fw-bold d-none d-sm-block'>
                                <span className='text-white '>Tailwind</span>
                            </h2>
                            <div className="navbar-nav " >

                                {/**to reload: use anchor tags + href */}
                                {/**Using NavLink instead of Link. Its way better because .active works for NavLink instead of Link since .active is 
                                 * a child of NavLink. so it gets the property default ".active" in css
                                 */}

                                <NavLink to='/' className='nav-link text-muted fw-bold p-0 '>Home</NavLink>{/**<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house mb-1" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                </svg> */}
                                <NavLink to='/upgrade' className='nav-link text-muted ms-xl-5  fw-bold p-0'>Upgrade</NavLink>
                                {/* {<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift mb-1" viewBox="0 0 16 16">
                                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                                </svg> } */}

                                <NavLink to='/search' className='nav-link  text-muted ms-xl-5 fw-bold p-0 '> Search</NavLink>
                                {/**<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search mb-1" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg> */}
                                <NavLink to="/faq" className='nav-link text-muted ms-xl-5 p-0 fw-bold '>
                                    FAQ</NavLink>
                                <NavLink to="/tos" className='nav-link text-muted ms-xl-5 p-0 fw-bold '>
                                    About</NavLink>
                                {/**for mobile   */}
                                <div className='d-block d-sm-none'>
                                    <NavLink to="/signup" className='nav-link text-muted ms-xl-5 fw-bold '>
                                        Sign up</NavLink>
                                </div>
                                <div className='d-block d-sm-none'>
                                    <NavLink to="/login" className='nav-link text-muted ms-xl-5  fw-bold '>
                                        Login</NavLink>
                                </div>

                            </div>

                            <div className='navbar-nav '>   {/**for desktop */}

                                <NavLink to="/login" className='nav-link text-muted fw-bold d-none d-sm-block p-0 '>
                                    Login</NavLink>
                                <NavLink to="/signup" className='nav-link text-muted fw-bold d-none d-sm-block ms-xl-3 me-xl-3 p-0'>
                                    Sign up</NavLink>
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
