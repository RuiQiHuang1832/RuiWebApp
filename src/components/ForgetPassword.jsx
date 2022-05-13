/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import axios from 'axios';
// http://localhost:8080/users/{id}/password
export default function ForgetPassword() {
    const [email, setEmail] = useState();
    const forms = useRef();
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="text-white"> LOST YOUR PASSWORD?</h1>
            <p className="text-white">
                If you've lost your password, you can use this form to reset it. Enter your username or email address in the field below.
                The username or email address is case insensitive. Once you have submitted the form,
                you will receive an email asking for validation of this request to ensure that no malicious use has occurred.
                This email will also contain a link that you must click for further instruction.
            </p>

            <div className="input-group mb-3">
                <form ref={forms} onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="Email" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
