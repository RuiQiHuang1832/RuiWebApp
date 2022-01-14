import React, { Component, useState, useRef } from 'react'
import "../styling/Signup.css"
import { useForm } from 'react-hook-form'
import myInstance from '../global/finals';
import { Link } from 'react-router-dom'

//also able to use refs but refs don't function in function components b/c they have no instance however,
//you are able to use it within another function if you want to use them in funciton componenets"
//You can, however, use the ref attribute inside a function component as long as you refer to a DOM element or a class component:
//https://reactjs.org/docs/refs-and-the-dom.html


export default function Signup() {

    const { register, handleSubmit, watch, reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            firstName: "",
            email: "",
            password: "",
            cPassword: ""
        },
        mode: 'onChange'
    });

    let formColor = () => {
        if (watched.firstName === '') {
            myInstance.val = ""
        } else if (errors.firstName?.message === undefined) {
            myInstance.val = "is-valid"
        } else {
            myInstance.val = "is-invalid"
        }
        if (watched.email === '') {
            myInstance.valEmail = ""
        } else if (errors.email?.message === undefined) {
            myInstance.valEmail = "is-valid"
        } else {
            myInstance.valEmail = "is-invalid"
        }
        if (watched.password === '') {
            myInstance.valPw = ""
        } else if (errors.password?.message === undefined) {
            myInstance.valPw = "is-valid"
        } else {
            myInstance.valPw = "is-invalid"
        }
        if (watched.cPassword === '') {
            myInstance.valCPw = ""
        } else if (errors.cPassword?.message === undefined) {
            myInstance.valCPw = "is-valid"
        } else {
            myInstance.valCPw = "is-invalid"
        }
    };


    //   console.log(val)
    //   console.log(errors.firstName?.message)
    let watched = watch();


    return (
        <div> {/*background shouldn't affect child and stuff on top of it like "card", however grid affects children */}
            <section id="backgroundImage">
                <div className=' gradient-custom-3'>
                    <div className='container '> {/**neccessary when using row + column */}
                        <div className='row d-flex justify-content-center '>
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6"> {/**Changes width each screen size */}
                                <div className="card" style={{ borderRadius: "30px", margin: "60px auto" }}>
                                    <div className="card-body p-5"> {/**card must always be accompained by card-body */}
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                        <form onSubmit={handleSubmit(() => {
                                            reset();
                                            {/**passes first name, don't reset on submit */ }
                                        })}>
                                            {formColor()}
                                            <div className='mb-2'>
                                                <label className='form-label' htmlFor="" ></label>
                                                <input  {...register("firstName",
                                                    {
                                                        required: "Please provide a name",
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9_]*$/,
                                                            message: "No special characters"
                                                        },
                                                        minLength: {
                                                            value: 4,
                                                            message: "Minimum length must be 4 characters or more"
                                                        },
                                                        maxLength: {
                                                            value: 13,
                                                            message: "Max length must be 13 characters or less"
                                                        },

                                                    })} type="text" id="formname" className={`form-control  + ${myInstance.val} `} placeholder='Username*' />
                                                <div className='text-muted'>Between 4 and 13 characters</div>
                                                <div className='text-danger'>{errors.firstName?.message}</div>
                                                {/**class="form-control" are set to width: 100% by default  */}
                                            </div>

                                            <div className='mb-2'>
                                                <label className='form-label' htmlFor="formemail" ></label>
                                                <input {...register("email",
                                                    {
                                                        required: "Please provide a valid email.",
                                                        pattern:
                                                        {
                                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                            message: "Please provide a valid email."
                                                        }
                                                    })} type="text" id="formemail" className={`form-control  + ${myInstance.valEmail} `} placeholder='Email Address*' />
                                                <div className='text-danger'>{errors.email?.message}</div>
                                            </div>
                                            <div className='mb-2'>
                                                <label className='form-label' htmlFor="formpassword" ></label>
                                                <input {...register("password",
                                                    {
                                                        required: "Enter a valid password",
                                                        minLength: {
                                                            value: 3,
                                                            message: "Enter a valid password"
                                                        },
                                                        maxLength: {
                                                            value: 32,
                                                            message: "Enter a valid password"
                                                        }
                                                    })} type="password" id="formpassword" className={`form-control  + ${myInstance.valPw} `} placeholder='Password*' />
                                                <div className='text-muted'>Between 3 and 32 characters</div>
                                                <div className='text-danger'>{errors.password?.message}</div>
                                            </div>


                                            <div className='mb-4'>
                                                <label className='form-label' htmlFor="formcpassword" ></label>
                                                <input {...register("cPassword",
                                                    {
                                                        required: "Passwords do not match",
                                                        validate: value => value === watched.password || 'Passwords do not match'
                                                    })} type="password" id="formcpassword" className={`form-control  +  ${myInstance.valCPw}`} placeholder='Confirm Password*' />
                                                <div className='text-danger'>{errors.cPassword?.message}</div>

                                            </div>
                                            <div id="requiredInfo" className='d-flex justify-content-center'>
                                                <p>* Required Information</p>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    required
                                                    id="formcheck"
                                                />
                                                <label className="form-check-label" htmlFor="formcheck">
                                                    I agree to all statements in <a href="#!" className="text-body"><u><Link className='text-body' to="/tos">Terms of Service </Link></u></a>
                                                </label>
                                                *
                                            </div>

                                            <div className='d-grid '>
                                                <button type='submit' className='btn btn-success  btn-lg gradient-custom-4 text-body'>Register</button>

                                            </div>
                                            <p className='text-center text-muted mt-4 mb-0'>Already have an account? <u >  <Link className='text-body' to="/login">Login </Link></u></p>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}


