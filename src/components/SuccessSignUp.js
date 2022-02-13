import React, { Component } from 'react'
import '../styling/SuccessSignUp.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export function SuccessSignUp() {


    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds("0");
        }
    });

    return (
        <div id="backgroundImage" >
            <div className='gradient-custom-3'>
                <div className='container '>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-9 col-lg-7 col-xl-4 m-5 py-5'>
                            <div className='card border-0 rounded-3 '>
                                <div className='row justify-content-center bgcolorsuccess rounded-top g-0 text-center'>
                                    <i style={{ fontSize: "120px", color: "white" }} class="bi bi-check2-circle pt-2"></i>
                                    <p className=' fs-3 text-white pb-2'>Success!</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-10'>
                                        <h6 className='text-center my-5 text-wrap fs-5'>Congratulations, your account has been successfully created. <br /><br /><span className='text-muted fs-6'>(You will be redirected in {seconds} seconds)</span> </h6>
                                        <div className='d-flex justify-content-center mb-3'><button className='btn btn-lg btn-success rounded-pill mb-3  shadow rounded'> <Link className="text-reset text-decoration-none" to="/">Continue </Link> </button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}




export default SuccessSignUp