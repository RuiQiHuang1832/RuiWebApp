import React, { Component, useRef } from 'react'
import "../styling/Login.css"
import panda from "../images/panda.png"
import { Link } from 'react-router-dom'

const TITLE = "Login";

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
  componentDidMount() {
    document.title = TITLE;
  }
  render() {
    return (
      <section id="backgroundImageLogin">
        <div className=' gradient-custom-3-login'>
          <div className='container h-100 '>
            <div className='row justify-content-center  mx-lg-5 h-100'>
              <div className=' col-xl-6 '>
                <div style={{ borderRadius: "" }} className='card my-5  '>
                  <div className=''>
                    <div className=''>
                      <div className='card-body m-lg-5 '>
                        <div className='text-center mt-3'>
                          <img src={panda} className='align-content-center' width="180" height="150" />
                          <h3 className='mt-3'>Welcome to Overflow</h3>
                        </div>
                        <h6 className='mt-5 mb-0'>Please login to your account</h6>
                        <form>
                          <div className='mb-2'>
                            <label className='form-label'></label>
                            <input type='text' placeholder='Username' className='form-control'></input>
                          </div>
                          <div className='mb-2'>
                            <label className='form-label'></label>
                            <input type='password' placeholder='Password' className='form-control'></input>
                          </div>
                          <div className='d-grid'>
                            <button type='submit' className='gradient-custom-2 btn btn-white mt-3 btn-md text-body'>Log In</button>
                          </div>
                          <div className='text-muted text-center my-4'>
                            Forgot password?
                          </div>
                          <div className='d-flex justify-content-center'>
                            <p className='mt-3 mb-0'>Don't have an account?&nbsp;  <u> <Link to="/signup" className='text-body' >Sign up</Link></u>
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
              <Link className='text-white text-decoration-none' to="/tos">Terms of Use</Link>
              <i className="bi bi-dot"></i>
              <Link className='text-white text-decoration-none' to="/faq">Help</Link>

              <i className="bi bi-dot"></i>
              {/**however, applying it to this div tag only does it for this paragraph instead of the whole box */}
              <a className='text-white text-decoration-none mb-5' href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>

            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default Login
