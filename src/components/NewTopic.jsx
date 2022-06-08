/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

export default function NewTopic() {
    return (
        <section>
            <div className="container pt-5">

                <div id="backgroundColorDash" className="card ">

                    <div className="d-inline-flex bg-white w-100 p-1 justify-content-between fw-bold backgroundasset">
                        <div className="ms-2 text-black">
                            Posting a New Topic in Cracked Programs
                        </div>
                    </div>
                    {/* THIS IS HOW YOU PUT A BORDER FOR ONLY A SECTION, YOU PUT IT ON THE FORM, AND NOT THE WHOLE CARD LOL */}
                    <form className="p-3 rounded-0 border border-top-0 border-white">
                        <div className=" col-6 ">
                            <label className="form-label text-white">Topic Title</label>
                            <input
                                type="text"
                                style={{ background: 'rgba(0, 0, 0, .2)', color: 'white' }}
                                className="form-control rounded-0 shadow-none"
                                required
                            />
                        </div>

                        <div className="mb-3 mt-3 ck-editor__editable">

                            <CKEditor
                                editor={Editor}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
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
                            <button type="submit" className="btn btn-outline-light ">Post New Topic</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
