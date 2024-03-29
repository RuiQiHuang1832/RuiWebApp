/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-multi-spaces */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../global';

export default function NewTopic() {
    const [text, setText] = useState('');
    const [title, setTitle] = useState();
    const { topic, forumname } = useParams();
    const navigate = useNavigate();
    // basically changes "help-and-support" to Help and Support
    const titleTopic = forumname.replaceAll('-', ' ').toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    function handleSubmit(e) {
        e.preventDefault();
        // this api always requires a user to be in the DB before they can submit anyhting.
        fetch(`${API}posts?username=${localStorage.getItem('user')}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                body: text, title, category: titleTopic, authorId: localStorage.getItem('user'),
            }),
        }).then((response) => {
            if (response.ok) {
                console.log('Successfully posted');
            } else {
                console.log('Unexpected Error');
            }
        }).then(navigate('/'));
    }

    return (
        localStorage.getItem('user') == null ? (<h4 className="text-white">Access Denied</h4>)
            : (
                <section>
                    <div className="container pt-5">
                        <div id="backgroundColorDash" className="card ">
                            <div className="d-inline-flex bg-white w-100 p-1 justify-content-between fw-bold backgroundasset">
                                <div className="ms-2 text-black">
                                    Posting a New Topic in
                                    {' '}
                                    {titleTopic}
                                </div>
                            </div>
                            {/* THIS IS HOW YOU PUT A BORDER FOR ONLY A SECTION, YOU PUT IT ON THE FORM, AND NOT THE WHOLE CARD LOL */}
                            <form className="p-3 rounded-0 border border-top-0 border-white" onSubmit={handleSubmit}>
                                <div className=" col-6 ">
                                    <label className="form-label text-white">Topic Title</label>
                                    <input
                                        type="text"
                                        onChange={(e) => setTitle(e.target.value)}
                                        style={{ background: 'rgba(0, 0, 0, .2)', color: 'white' }}
                                        className="form-control rounded-0 shadow-none"
                                        required
                                        maxLength={70}
                                    />
                                </div>

                                <div className="mb-3 mt-3 ck-editor__editable">

                                    <CKEditor
                                        editor={Editor}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setText(data);
                                        }}
                                        onBlur={(event, editor) => {
                                            console.log('Blur.', editor);
                                        }}
                                        onFocus={(event, editor) => {
                                            console.log('Focus.', editor);
                                        }}

                                    />

                                </div>
                                <div className="text-center">
                                    {text === ''
                                        ? <button type="submit" className="btn btn-outline-light" disabled>Post New Topic</button>
                                        : <button type="submit" className="btn btn-outline-light">Post New Topic</button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            )
    );
}
