/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
import React, { useState, useEffect } from 'react';
import '../styling/Signup.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import axios from 'axios';

import { API } from '../global';

let simpleAuth = false; // auth for signup=success
const TITLE = 'Sign up';
// also able to use refs but refs don't function in function components
// b/c they have no instance however,
// you are able to use it within another function if you want to use them in funciton componenets"
// You can, however, use the ref attribute inside a function component
// as long as you refer to a DOM element or a class component:
// https://reactjs.org/docs/refs-and-the-dom.html
let val = ''; let valEmail = ''; let valPw = ''; let
  valCPw = ''; // default values
export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dupmessage, setDupmessage] = useState(' ');
  const [ipaddress, setIpaddress] = useState();
  const [spinner, setSpinner] = useState('Register');

  const {
    register, handleSubmit, watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
      cPassword: '',
    },
    mode: 'all',

  });
  const watched = watch();
  // for Ip address
  useEffect(() => {
    document.title = TITLE;
    // axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=0761240eebc74e768f377af56ed0058a')
    //   .then((response) => {
    //     setIpaddress(response.data.ip_address);
    //   });
  }, []);
  // componentdidUpdate with the second parameter being empty. however
  // can also provide a list of things to allow it to know when to update
  // 1) [] - acts like componentDidMount,To run the useEffect only on mount,
  // pass an empty array [] as a second argument
  // 2) no second parameter -  it runs both after the first render and after every update.
  // 3) [...] Only re-run the effect if count changes

  // eslint-disable-next-line no-lone-blocks
  { /** ^combining mode:onChange and onChange=>(e.target.value) doesn't work for some reason.
  react hook form validation doesn't work together with 2x Onchange
    hypothesis: 100% not sure.. actual really stumped on this one..
    work around is to use a different mode like "all" which uses both blur/change
    I thought I could do onSubmit=>(e.target.value) but it doesn't grab the value fast enough to
    submit it into address..something about async.. but not enough knowledge..rn */ }

  const handleClick = () => {
    setSpinner(<div className="spinner-border spinner-border-sm" role="status" />);
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

    //  e.preventDefault()

    const userinfo = {
      username, email, hashedPassword, ipaddress,
    };

    fetch(`${API}users/add  `, {
      // look at login.js on how to implement login

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userinfo.username, email: userinfo.email, password: userinfo.hashedPassword, ipaddress: userinfo.ipaddress, role: 'USER', bio: '',
      }),
    }).then((response) => {
      if (!response.ok) {
        if (response.status === 500) {
          setDupmessage('Username/Email is already taken. Try again.');
        }
        throw new Error(response.status);
      } else { setDupmessage(''); }
    }).then(() => {
      setTimeout(() => { //
        simpleAuth = false;
        // set to false********** make it so users cannot go to sign=success in browser
      }, 6000);
      navigate('/signup=success');
    }).catch(() => {
      setSpinner('Register');
    });
    simpleAuth = true; // auth for signup=success
  };

  // useEffect(()=> {
  //     fetch("http://localhost:8080/student/getAll")
  //     .then(res => res.json())
  //     .then((result)=> {
  //         settheaddress(result)
  // }
  // )
  // }, [])

  const formColor = () => {
    if (watched.firstName === '') {
      val = '';
    } else if (errors.firstName?.message === undefined) {
      val = 'is-valid';
    } else {
      val = 'is-invalid';
    }
    if (watched.email === '') {
      valEmail = '';
    } else if (errors.email?.message === undefined) {
      valEmail = 'is-valid';
    } else {
      valEmail = 'is-invalid';
    }
    if (watched.password === '') {
      valPw = '';
    } else if (errors.password?.message === undefined) {
      valPw = 'is-valid';
    } else {
      valPw = 'is-invalid';
    }
    if (watched.cPassword === '') {
      valCPw = '';
    } else if (errors.cPassword?.message === undefined) {
      valCPw = 'is-valid';
    } else {
      valCPw = 'is-invalid';
    }
  };

  //   console.log(val)
  //   console.log(errors.firstName?.message)
  return (
    <div>
      {' '}
      {/* background shouldn't affect child and stuff on top of it like "card",
      however grid affects children */}
      <section id="backgroundImage">
        <div className=" gradient-custom-3">
          <div className="container ">
            {' '}
            {/** neccessary when using row + column */}
            <div className="row d-flex justify-content-center ">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                {' '}
                {/** Changes width each screen size, also borderRadius to cut corners */}
                <div className="card " style={{ borderRadius: '', margin: '60px auto' }}>
                  <div className="card-body gradient-custom-3 p-5">
                    {' '}
                    {/** card must always be accompained by card-body */}
                    <h2 className="text-uppercase text-center text-white mb-5">Create an account</h2>
                    <form onSubmit={handleSubmit(() => {
                      handleClick();
                      // reset();
                      // passes first name, don't reset on submit
                    })}
                    >
                      {formColor()}
                      <div className="mb-2">
                        <label className="form-label" htmlFor="form label" />
                        <input
                          {...register(
                            'firstName',
                            {
                              required: 'Please provide a username',
                              pattern: {
                                value: /^(?![0-9._])(?!.*[._]$)(?!.*\d_)(?!.*_\d)[a-zA-Z0-9]+$/,
                                message: 'No special characters',
                              },
                              minLength: {
                                value: 4,
                                message: 'Minimum length must be 4 characters or more',
                              },
                              maxLength: {
                                value: 13,
                                message: 'Max length must be 13 characters or less',
                              },

                            },
                          )}
                          type="text"
                          id="formname"
                          className={`form-control  + ${val} `}
                          placeholder="Username*"
                          onChange={(e) => setUsername(e.target.value)}
                        />

                        <div className="text-white">Between 4 and 13 characters</div>
                        {/* {theaddress.map(student =>(
                                                       <p>
                                                       Id:{student.id}
                                                       Name:{student.name}
                                                       Address:{student.address}
                                                       </p>
                                                       ))
                                                       }   */}
                        <div className="text-danger">{errors.firstName?.message}</div>
                        <div className="text-danger">{dupmessage}</div>
                        {/** className="form-control" are set to width: 100% by default  */}
                      </div>

                      <div className="mb-2">
                        <label className="form-label" htmlFor="formemail" />
                        <input
                          {...register(
                            'email',
                            {
                              required: 'Please provide a valid email.',
                              pattern:
                              {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: 'Please provide a valid email.',
                              },
                            },
                          )}
                          type="text"
                          id="formemail"
                          className={`form-control  + ${valEmail} `}
                          placeholder="Email Address*"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="text-danger">{errors.email?.message}</div>
                      </div>
                      <div className="mb-2">
                        <label className="form-label" htmlFor="formpassword" />
                        <input
                          {...register(
                            'password',
                            {
                              required: 'Enter a valid password',
                              minLength: {
                                value: 3,
                                message: 'Enter a valid password',
                              },
                              maxLength: {
                                value: 32,
                                message: 'Enter a valid password',
                              },
                            },
                          )}
                          type="password"
                          id="formpassword"
                          className={`form-control  + ${valPw} `}
                          placeholder="Password*"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="text-white">Between 3 and 32 characters</div>
                        <div className="text-danger">{errors.password?.message}</div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label" htmlFor="formcpassword" />
                        <input
                          {...register(
                            'cPassword',
                            {
                              required: 'Passwords do not match',
                              validate: (value) => value === watched.password || 'Passwords do not match',
                            },
                          )}
                          type="password"
                          id="formcpassword"
                          className={`form-control  +  ${valCPw}`}
                          placeholder="Confirm Password*"
                        />
                        <div className="text-danger">{errors.cPassword?.message}</div>

                      </div>
                      <div id="requiredInfo" className="d-flex justify-content-center">
                        <p>* Required Information</p>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          required
                          id="formcheck"
                        />
                        <label className="form-check-label text-white" htmlFor="formcheck">
                          I agree to all statements in
                          {' '}
                          <span className="text-white "><u><Link className="" to="/tos">Terms of Service </Link></u></span>
                        </label>
                        <span className="text-white">*</span>
                      </div>

                      <div className="d-grid ">
                        <button type="submit" className="btn btn-success  btn-lg gradient-custom-4 text-body registerbutton">{spinner}</button>

                      </div>
                      <p className="text-center text-white mt-4 mb-0">
                        Already have an account?
                        {' '}
                        <u>
                          {' '}
                          <Link className="text-white" to="/login">Login </Link>
                        </u>
                      </p>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { simpleAuth };
