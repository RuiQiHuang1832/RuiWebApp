/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import '../styling/Template.css';
import { } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import ThreadBody from './ThreadBody';
import ThreadUser from './ThreadUser';

export default function Thread() {
    function ThreadReplies(len) {
        const items = [];
        for (let i = 0; i < len; i += 1) {
            items.push(<div key={i} style={{ color: '#AFAFAF' }} className="row g-0">
                <div
                    style={{ width: '18%', background: 'linear-gradient(#161716, transparent)' }}
                    className="col-3 border-end-0 mt-2 threadBorder"
                >
                    <ThreadUser />
                </div>
                <div style={{ width: '82%' }} className="col-9  border-start-0 mt-2 threadBorder">
                    <ThreadBody number={i + 1} />
                </div>
                <div
                    style={{ borderBottomWidth: '4px', background: 'rgb(11 10 10)' }}
                    className="d-flex justify-content-between threadBorder border-top-0 "
                >
                    <span className="p-1">
                        &nbsp;
                        <button type="button" className="rounded text-white" style={{ background: 'black' }}>
                            <i className="bi bi-flag-fill" />
                            &nbsp;Report
                        </button>
                    </span>
                    <span className="p-1">
                        &nbsp;
                        <button type="button" className="rounded text-white" style={{ background: 'black' }}>
                            <i className="bi bi-reply-fill" />
                            &nbsp;Reply
                        </button>
                    </span>
                </div>
            </div>);
        }
        return items;
    }
    return (
        <section className="container text-white pt-3 g-0">
            <div style={{ borderBottomWidth: '4px' }} className=" threadBorder">
                <h4 className="text-start mb-0 p-1">
                    <i className="bi bi-text-left ms-2 " style={{ fontSize: '20px' }} />
                    <span className="ms-1 font-monospace " style={{ fontSize: '20px' }}> What is this site all about?</span>
                </h4>
            </div>
            <div className="d-flex flex-column">
                {ThreadReplies(4)}
            </div>
            <form className=" rounded-0 mt-4">
                <div style={{ background: 'blue' }} className="border border-white border-bottom-0 ">
                    <label className=" text-white">&nbsp;Quick Reply</label>
                </div>

                <div className="mb-3 ck-editor__editable">

                    <CKEditor
                        editor={Editor}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                        }}
                        onBlur={(event, editor) => {
                            // console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            // console.log('Focus.', editor);
                        }}

                    />

                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-light" disabled>Post</button>

                </div>
            </form>
        </section>

    );
}
