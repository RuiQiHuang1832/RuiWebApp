import React, { Component, useRef } from 'react'
import "../styling/Login.css"
import panda from "../images/panda.png"
import { Link } from 'react-router-dom'

const TITLE = "Login";

let xusername;
let xpassword;
export class Login extends Component {
  /**************************
   * 
   * 
   * 
   * https://www.youtube.com/watch?v=tDZPdovCH4I
   *Look at the previous video at the end where he sends requesst to the server.
   * all I have to do is copy that. grab data from login just like in Signup, then do a auth request
   * just like in the video to pass it in. prob using fetch API again...
   * 
   * 
   */



  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      ishelogged: null
    };


  }
  componentDidMount() {
    document.title = TITLE;
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      /**https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/ <--what i used for persist..still needs work*/
      console.log(loggedInUser)
      this.setState({ ishelogged: true })
    }
  }

  componentDidUpdate() {
    xusername = this.state.username
    xpassword = this.state.password




  }


  //http://localhost:8080/user/admin                     <-local
  //https://ruibackend.herokuapp.com/user/stuff          <-production
  //use localStorage for storing sessions..(only if i want it)
  //Basic Auth
  handleClick(e) {
    e.preventDefault()

    let url = "https://ruibackend.herokuapp.com/user/stuff"


    fetch(url, {
      method: "GET",
      headers: {
        'Authorization': 'Basic ' + window.btoa(xusername + ":" + xpassword),
        'Content-Type': 'text/plain'
      }
    }).then((response) => {
      alert("you have successfully logged in")
      console.log(response)
      localStorage.setItem('user', xusername)
      window.location.reload()
    })

    //look at authentication folder!

  }





  render() {


    return (
      <section id="backgroundImageLogin">

        <div className=' gradient-custom-3-login'>
          <div className='container h-100 '>
            <div className='row justify-content-center  mx-lg-5 h-100'>
              <div className=' col-xl-6 '>
                <div style={{ borderRadius: "" }} className='card my-5  border-warning'>
                  <div className='gradient-custom-3-login '>
                    <div className=''>
                      <div className='card-body  m-lg-5 '>
                        <div className='text-center mt-3'>
                          <img src={panda} className='align-content-center' width="180" height="150" />
                          <h3 className='mt-3 text-white'>Welcome to Overflow</h3>
                          {this.state.ishelogged ? <h3 className='text-white'>User is logged in</h3> : <h3 className='text-white'>Please Login</h3>}
                        </div>
                        <h6 className='mt-5 mb-0 text-white'>Please login to your account</h6>
                        <form onSubmit={this.handleClick}>
                          <div className='mb-2'>
                            <label className='form-label'></label>
                            <input type='text' placeholder='Username' className='form-control' onChange={(e) => this.setState({ username: e.target.value })}></input>
                          </div>
                          <div className='mb-2'>
                            <label className='form-label'></label>
                            <input type='password' placeholder='Password' className='form-control' onChange={(e) => this.setState({ password: e.target.value })} ></input>
                          </div>
                          {/**onChange={(e) => this.setState({ password: e.target.value })} */}
                          <div className='d-grid'>
                            <button type='submit' className='gradient-custom-2 mt-3 btn  btn-md text-body '><span className='text-white'>Log In</span></button>
                          </div>
                          <div className='text-white text-center my-4'>
                            Forgot password?
                          </div>
                          <div className='d-flex justify-content-center'>
                            <p className='mt-3 mb-0 text-white'>Don't have an account?&nbsp;  <u> <Link to="/signup" className='text-body ' ><span className='text-white text-decoration-underline'>Sign up</span></Link></u>
                            </p>
                          </div>


                        </form>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
            {/*applying mb-5 makes a white space at the bottom applied to this div tag V */}
            <div className='d-xxl-flex justify-content-xxl-center d-flex text-white text-nowrap footerLoginFontSize'>
              <Link className='text-white text-decoration-none' to="/tos">Terms of Use&nbsp;</Link>

              <Link className='text-white text-decoration-none' to="/faq">&bull; Help&nbsp;</Link>

              {/**however, applying it to this div tag only does it for this paragraph instead of the whole box */}
              <a className='text-white text-decoration-none mb-5' href="https://policies.google.com/privacy?hl=en-US">&bull; Privacy Policy</a>

            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default Login
