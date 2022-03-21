import React, { Component } from 'react'
import '../styling/NavigationBar.css'
import { NavLink } from 'react-router-dom'
import UserCustomization from './UserCustomization'







//Navigation Links..Either <li> tags, routes w/ components, bootstrap navbars, navlinks/links..but those are kinda hard 
// routes and links used in conjunction

export default class NavigationBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isUserLogged: ""
        }
        this.handleLogout = this.handleLogout.bind(this)
    }
    componentDidMount() {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            /**https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/ <--what i used for persist..still needs work*/
            this.setState({ isUserLogged: true })

        } else {
            this.setState({ isUserLogged: false })
        }
    }

    handleLogout() {
        this.setState({ isUserLogged: false })
        localStorage.clear();
        window.location.href = "/"  //"refresh effect"
    }


    render() {

        return (
            <div className='shadow bg-body rounded font-mono'>
                <nav id="navBackgroundColor" className='navbar navbar-expand-lg navbar-dark pt-5 ' >
                    <span className="container-fluid">
                        <button id="btnprops" className='navbar-toggler ' type='button' data-bs-toggle='collapse' data-bs-target="#collapsethis">
                            <div style={{ fontSize: "27px" }}>
                                {/**being edited with css + bs. need to include d-flex,else not editable in css */}
                                <i id="navbaricontop" className="d-flex bi bi-dash-lg"></i>
                                <i id="navbariconmid" className="d-flex bi bi-dash-lg"></i>
                                <i id="navbariconbot" className="d-flex bi bi-dash-lg"></i>



                            </div>





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

                                <NavLink to='/' className='nav-link text-muted fw-bold p-md-0 p-sm-0 p-0 mt-3 mt-lg-0 mt-xl-0 '>Home</NavLink>
                                <NavLink to='/upgrade' className='nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  '>Upgrade</NavLink>
                                <NavLink to='/search' className='nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  '> Search</NavLink>

                                <NavLink to="/faq" className='nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  '>
                                    FAQ</NavLink>
                                <NavLink to="/tos" className='nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  '>
                                    About</NavLink>
                                {/**for mobile   */}
                                <div className='d-block d-sm-none'>
                                    {this.state.isUserLogged ? <span className='nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-3'>
                                        Welcome, {localStorage.getItem("user")}!</span> : <NavLink to="/signup" className='nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-2'>
                                        Sign up</NavLink>}
                                </div>
                                <div className='d-block d-sm-none'>

                                    {this.state.isUserLogged ? <NavLink to="/" onClick={() => this.handleLogout()} className='nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-3'>
                                        Logout</NavLink> : <NavLink to="/login" className='nav-link text-muted ms-xl-5  p-0  fw-bold '>
                                        Login</NavLink>}
                                </div>

                            </div>

                            <div className='navbar-nav '>   {/**desktop */}


                                {this.state.isUserLogged ? <UserCustomization handleChange={this.handleLogout} /> : <NavLink to="/signup" className='nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-2'>
                                    Sign up</NavLink>}

                                {this.state.isUserLogged ? <></> : <NavLink to="/login" className='nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-3'>
                                    Login</NavLink>}

                            </div>

                        </div>
                        {/**<NavLink to="/" onClick={() => this.handleLogout()} className='nav-link text-muted fw-bold d-none d-sm-block  ms-xl-2 me-xl-2 p-md-0 p-sm-0 p-0  ms-lg-3'>
                                    Logout</NavLink> */}




                    </span>
                </nav>
            </div >
        )
    }
}

const fontSize = {
    fontSize: '18px'
}



