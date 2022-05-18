/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
// import { useParams } from 'react-router-dom';

export default function ResetPasswordPage() {
    // const { tokenid } = useParams();
    return (
        <div className="text-white">
            <div className="container ">
                <form id="backgroundColorDash" className="card card-body">

                    <div className="row justify-content-center">
                        <div className="col-5">
                            <h1>Reset Your Password</h1>
                            <p>Strong passwords include numbers, letters and punctuation marks.</p>
                            <div className=" mb-3">
                                <label className="form-label">Password</label>
                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="text" className="form-control" placeholder="Confirm Password" />
                            </div>
                            <div className="text-center">
                                <button className="form-control mt-3 btn btn-outline-info w-25 " type="submit">Submit</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}
