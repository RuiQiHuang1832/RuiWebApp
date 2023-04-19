/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import '../styling/Template.css';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import ThreadBody from './ThreadBody';
import ThreadUser from './ThreadUser';
import { API } from '../global';

export default function Thread() {
    const [elementHidden, setElementHidden] = useState(false);
    const { id, title } = useParams();

    // for quick replys
    function handleClick() {
        setElementHidden(true);
    }
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        fetch(`${API}post-data`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const tmp = data.filter((e) => e.id == id);
                setFetchedData(tmp[0]);
            });
    }, []);

    function ThreadReplies(len) {
        const items = [];
        for (let i = 0; i < len; i += 1) {
            items.push(<div key={i} style={{ color: '#AFAFAF' }} className="row g-0">
                <div
                    style={{ background: 'linear-gradient(#161716, transparent)' }}
                    className="d-none d-lg-block col-lg-3 threadUserCol3   border-end-0 mt-2 threadBorder"
                >
                    <ThreadUser authorId={fetchedData.authorId} />
                </div>
                <div className="col-lg-9 col-xl-9 threadUserCol9 hideBorderLeft mt-2 threadBorder pb-lg-0 pb-5">
                    <ThreadBody number={i + 1} time={fetchedData.createdAt} body={fetchedData.body} authorId={fetchedData.authorId} />
                </div>
                <div
                    style={{ borderBottomWidth: '4px', background: 'rgb(11 10 10)' }}
                    className="d-flex justify-content-between threadBorder border-top-0 "
                >
                    <span className="p-1">
                        &nbsp;
                        <button type="button" className="rounded text-white" style={{ background: 'black' }}>
                            <i className="bi bi-flag-fill" />
                            <span className="d-none d-lg-inline-block">&nbsp;Report</span>
                        </button>
                    </span>
                    <span className="p-1">
                        &nbsp;
                        <button type="button" className="rounded text-white" style={{ background: 'black' }}>
                            <i className="bi bi-reply-fill" />
                            <span className="d-none d-lg-inline-block">&nbsp;Reply</span>
                        </button>
                    </span>
                </div>
            </div>);
        }
        return items;
    }

    return (
        <section className="container-lg px-3 px-lg-0 text-white pt-3 g-0">
            <div style={{ borderBottomWidth: '4px' }} className=" threadBorder">
                <h4 className="text-start mb-0 p-1">
                    <i className="bi bi-text-left ms-2 " style={{ fontSize: '17px' }} />
                    <span className="ms-2 font-monospace " style={{ fontSize: '20px' }}>

                        {fetchedData.title}
                    </span>
                </h4>
            </div>
            <div className="d-flex flex-column">
                {ThreadReplies(4)}
            </div>

            <form className=" rounded-0 mt-4">

                <div style={{ background: 'blue' }} className="border border-white border-bottom-0 ">
                    <label className=" text-white">&nbsp;Quick Reply</label>

                </div>
                <div onClick={handleClick}>
                    {elementHidden
                        ? (
                            <div id="ckEditor" className="mb-3 ck-editor__editable">

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
                        ) : (
                            <div
                                aria-label="textarea"
                                role="button"
                                tabIndex={0}
                                className="border border-1 clickableTextArea mb-3"
                                style={{ height: '100px' }}
                            />
                        )}
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-outline-light" disabled>Post</button>

                </div>
            </form>
        </section>

    );
}
