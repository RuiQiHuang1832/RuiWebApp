import React, { Component, useRef } from 'react'
import "../styling/Login.css"
import panda from "../images/panda.png"
import { Link } from 'react-router-dom'

const TITLE = "Login";

export class Login extends Component {
  componentDidMount() {
    document.title = TITLE;
  }
  render() {
    return (
      <section id="backgroundColor">
        <div className='container h-100'>
          <div className='row justify-content-center  mx-lg-5 h-100'>
            <div className=' col-xl-10 '>
              <div style={{ borderRadius: "" }} className='card my-5  '>
                <div className='row g-0'>
                  <div className='col-lg-6'>
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

                  <div style={{ borderRadius: "" }} className='col-lg-6 d-flex align-items-center gradient-custom-2 '>
                    <div className='text-white px-3 py-4 p-md-5 mx-md-4'>
                      <h4 className='mb-4'>We are more than just a company</h4>
                      <p className='small mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default Login
