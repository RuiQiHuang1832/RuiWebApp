/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-multi-spaces */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { API } from '../global';

export default function EditTopic() {
    const location = useLocation();
    const [text, setText] = useState('');
    const {
        topic, forumname, title, id,
    } = useParams();
    const navigate = useNavigate();
    // basically changes "help-and-support" to Help and Support

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`${API}posts/edit/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: text,
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Successfully posted');
                } else {
                    console.log('Unexpected Error');
                }
            })
            .then(() => {
                const currentPathname = location.pathname;
                const editedPathname = `${currentPathname.replace('edit', '')}`;
                navigate(editedPathname);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        localStorage.getItem('user') == null ? (<h4 className="text-white">Access Denied</h4>)
            : (
                <section>
                    <div className="container pt-5">
                        <div id="backgroundColorDash" className="card ">
                            <div className="d-inline-flex bg-white w-100 p-1 justify-content-between fw-bold backgroundasset">
                                <div className="ms-2 text-black">
                                    Editing Post
                                </div>
                            </div>
                            {/* THIS IS HOW YOU PUT A BORDER FOR ONLY A SECTION, YOU PUT IT ON THE FORM, AND NOT THE WHOLE CARD LOL */}
                            <form className="p-3 rounded-0 border border-top-0 border-white" onSubmit={handleSubmit}>
                                <div className=" col-6 ">
                                    <label className="form-label text-white">Topic Title</label>
                                    <input
                                        type="text"
                                        style={{ background: 'rgba(0, 0, 0, .2)', color: 'white' }}
                                        className="form-control rounded-0 shadow-none"
                                        value={title}
                                        disabled
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
                                        data={location.state.body}

                                    />

                                </div>
                                <div className="text-center">
                                    {text === ''
                                        ? <button type="submit" className="btn btn-outline-light" disabled>Submit</button>
                                        : <button type="submit" className="btn btn-outline-light">Submit</button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            )
    );
}
