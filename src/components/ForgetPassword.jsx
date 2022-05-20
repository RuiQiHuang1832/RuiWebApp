/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import ls from 'localstorage-slim';
import randomToken from 'random-token';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    const [resetEmail, setResetEmail] = useState();
    const [mytoken, setmytoken] = useState(randomToken(30));
    const [feedback, setFeedback] = useState('');

    const forms = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const arr = ls.get('key', { decrypt: true });
        const pos = arr.map((event) => event.email).indexOf(resetEmail);
        if (pos !== -1) {
            const value = {
                tokenIDVALUE: mytoken,
                user: arr[pos].id,
            };
            ls.set('token', value, { ttl: 600, encrypt: true });
            emailjs.sendForm('service_jo5fr7m', 'template_5rsg6am', forms.current, '_2JKIlgBkZKk4qUiI')
                .then((result) => {
                    setFeedback('Link Sent! Check your email');
                }, (error) => {

                });
        } else {
            setFeedback('No User Associated with Email');
        }
    }

    return (
        <section className="text-white">
            <div className="container ">
                <div id="backgroundColorDash" className="card card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
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
                                <input type="email" name="email" className="form-control" placeholder="Email" onChange={(e) => setResetEmail(e.target.value)} />
                                <input name="message" defaultValue={`https://rui-web-app.vercel.app/resetpassword/token=${mytoken}`} className="d-none" />
                                <div className="text-warning">{feedback}</div>
                                <button className="form-control mt-3 btn btn-outline-info mb-5" type="submit">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
