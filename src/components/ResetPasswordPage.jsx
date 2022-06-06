/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';
import { useForm } from 'react-hook-form';
import ls from 'localstorage-slim';
import { useNavigate, useParams } from 'react-router-dom';

export default function ResetPasswordPage() {
    const { tokenid } = useParams();
    const [password, setPassword] = useState('');
    const [spinner, setSpinner] = useState('Submit');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
    const {
        register, watch, handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: '',
            cPassword: '',
        },
        mode: 'all',
    });
    const lsvalue = ls.get('token', { decrypt: true });
    useEffect(() => {
        ls.flush();
    }, []);

    const watched = watch();
    const handleClick = () => {
        setSpinner(<div className="spinner-border spinner-border-sm" role="status" />);
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
        fetch(`https://ruibackend.herokuapp.com/users/${lsvalue.user}/password`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: hashedPassword }),

        }).then((response) => {
            if (!response.ok) {
                setFeedback("INVALID FORM. Please Do not clear cache. Try submitting another 'forgot password?' request");
                navigate('/');
                throw new Error(response.status);
            } else {
                setFeedback('Password has been successfully reset. Redirecting in 3 seconds...');
                setTimeout(() => {
                    navigate('/login');
                }, '3000');
            }
            ls.flush(true);
        });
    };
    if (lsvalue === null) {
        return <div className="text-white">TOKEN EXPIRED</div>;
    }
    if (tokenid !== lsvalue.tokenIDVALUE) {
        return <div className="text-white">UNKNOWN PAGE</div>;
    }
    return (
        <div className="text-white">
            <div className="container ">
                <form
                    id="backgroundColorDash"
                    className="card card-body"
                    onSubmit={handleSubmit(() => {
                        handleClick();
                    })}
                >

                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <h1>Reset Your Password</h1>
                            <p>Strong passwords include numbers, letters and punctuation marks.</p>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="formpassword">Password</label>
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
                                    className="form-control"
                                    placeholder="Password*"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="text-white">Between 3 and 32 characters</div>
                                <div className="text-danger">{errors.password?.message}</div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="formcpassword">Confirm Password</label>
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
                                    className="form-control"
                                    placeholder="Confirm Password*"
                                />
                                <div className="text-danger">{errors.cPassword?.message}</div>

                                <div className="text-center">
                                    <div className="text-info">{feedback}</div>
                                    <button className="form-control mt-3 btn btn-outline-info w-25 " type="submit">{spinner}</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
