/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import axios from 'axios';
import ls from 'localstorage-slim';
import randomToken from 'random-token';
// http://localhost:8080/users/{id}/password
export default function ForgetPassword() {
    const [resetEmail, setResetEmail] = useState();
    const forms = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const arr = ls.get('key', { decrypt: true });
        const pos = arr.map((event) => event.email).indexOf(resetEmail);
        if (pos !== -1) {
            alert('email sent!');
            console.log(`localhost:3000/resetpassword/token=${randomToken(14)}`);
        } else {
            alert('email does not exist');
        }
    }

    return (
        <section className="text-white">
            <div className="container ">
                <div id="backgroundColorDash" className="card card-body">

                    <div className="row justify-content-center">
                        <div className="col-7">
                            <h1 className="text-white text-center mb-5"> LOST YOUR PASSWORD?</h1>
                            <p className="text-white">
                                If you've lost your password, you can use this form to reset it. Enter your username or email address in the field below.
                                <br />
                                <br />
                                The username or email address is case insensitive.
                                Once you have submitted the form,
                                you will receive an email asking for validation of this request to ensure that no malicious use has occurred.
                                <br />
                                <br />
                                This email will also contain a link that you must click for further instruction.
                            </p>
                            <form ref={forms} onSubmit={handleSubmit}>
                                <label className="form-label">Enter Email</label>
                                <input type="text" className="form-control" placeholder="Email" onChange={(e) => setResetEmail(e.target.value)} />
                                <button className="form-control mt-3 btn btn-outline-info mb-5" type="submit">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
