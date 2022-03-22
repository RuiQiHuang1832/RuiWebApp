import React from 'react'
import "../styling/UserDashboard.css"
import defaultImg from "../images/default_large.jpg"
import memberimage from "../images/memberimage.jpg"

export default function UserDashboard() {

    return (
        <section id='backgroundColorDash'>

            <div className='container' >

                <div className='row'>
                    <div className='col d-flex align-items-center  userCoverPage'>
                        <img className='profilePicture ms-3' src={defaultImg} ></img>
                        <div className='profilecover text-white '>
                            <h3 className='m-0'>{localStorage.getItem("user")}</h3>
                            <p className='fs-6 '>New Member</p>
                            <img src={memberimage} width="150"></img>

                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}
