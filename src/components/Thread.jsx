/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import '../styling/Template.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react/dist/ckeditor';
import ls from 'localstorage-slim';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import ThreadBody from './ThreadBody';
import ThreadUser from './ThreadUser';
import { API } from '../global';

export default function Thread() {
    const [elementHidden, setElementHidden] = useState(false);
    const { id, title } = useParams();
    const [text, setText] = useState('');
    const location = useLocation();
    const [isAuthor, setIsAuthor] = useState(false);
    const navigate = useNavigate();
    const [fetchedData, setFetchedData] = useState({});
    const [originalPost, setOriginalPost] = useState({ body: '...', authorId: '...' });
    // for quick replys
    function handleSubmit() {
        fetch(`${API}posts/${id}/users/${localStorage.getItem('user')}/replies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: text,
            }),
        }).then((response) => {
            if (response.ok) {
                console.log('Successfully posted');
            } else {
                console.log('Unexpected Error');
            }
        });
        window.location.reload();
    }

    function handleClick() {
        setElementHidden(true);
    }

    function handleEdit() {
        const currentPathname = location.pathname;
        const editedPathname = `${currentPathname}/edit`;
        navigate(editedPathname, { state: { body: originalPost.body } });
    }
    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${API}post-data`, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => {
                const tmp = data.filter((e) => e.id == id);
                setIsAuthor(tmp[0].authorId == localStorage.getItem('user'));
                console.log(isAuthor);
                setOriginalPost(tmp[0]);
            })
            .catch((error) => {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    // Handle other errors
                }
            });

        return () => {
            console.log('Cleanup post-data');
            abortController.abort();
        };
    }, []);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${API}post-reply/${id}`, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setFetchedData(data);
            })
            .catch((error) => {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    // Handle other errors
                }
            });

        return () => {
            console.log('Cleanup post-reply');
            abortController.abort();
        };
    }, []);

    function ThreadReplies(len) {
        const items = [];
        items[0] = (
            <div key={-1} style={{ color: '#AFAFAF' }} className="row g-0">
                <div
                    style={{ background: 'linear-gradient(#161716, transparent)' }}
                    className="d-none d-lg-block col-lg-3 threadUserCol3   border-end-0 mt-2 threadBorder"
                >

                    <ThreadUser authorId={originalPost.authorId} pfp={JSON.parse(localStorage.getItem('images'))?.[`${originalPost.authorId}.jpg`]} />
                </div>
                <div className="col-lg-9 col-xl-9 threadUserCol9 hideBorderLeft mt-2 threadBorder pb-lg-0 pb-5">
                    <ThreadBody number={0} time={originalPost.createdAt} body={originalPost.body} authorId={originalPost.authorId} />
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
                        {isAuthor
                            && (
                                <button name="edit" type="button" className="rounded text-white" onClick={() => handleEdit()} style={{ background: 'black' }}>
                                    <i className="bi bi-pencil-square" />
                                    <span className="d-none d-lg-inline-block">&nbsp;Edit</span>
                                </button>
                            )}
                        &nbsp;
                        <a href="#reply">
                            <button name="reply" type="button" className="rounded text-white" style={{ background: 'black' }}>
                                <i className="bi bi-reply-fill" />
                                <span className="d-none d-lg-inline-block">&nbsp;Reply</span>
                            </button>
                        </a>

                    </span>
                </div>
            </div>
        );
        for (let i = 0; i < len; i += 1) {
            items.push(<div key={fetchedData[i].id} style={{ color: '#AFAFAF' }} className="row g-0">
                <div
                    style={{ background: 'linear-gradient(#161716, transparent)' }}
                    className="d-none d-lg-block col-lg-3 threadUserCol3   border-end-0 mt-2 threadBorder"
                >
                    <ThreadUser authorId={fetchedData[i].user.username} pfp={JSON.parse(localStorage.getItem('images'))?.[`${fetchedData[i].user.username}.jpg`]} />
                </div>
                <div className="col-lg-9 col-xl-9 threadUserCol9 hideBorderLeft mt-2 threadBorder pb-lg-0 pb-5">
                    <ThreadBody number={i + 1} time={fetchedData[i].timeStamp} body={fetchedData[i].content} authorId={fetchedData[i].user.username} />
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
                        <a href="#reply">
                            <button type="button" className="rounded text-white" style={{ background: 'black' }}>
                                <i className="bi bi-reply-fill" />
                                <span className="d-none d-lg-inline-block">&nbsp;Reply</span>
                            </button>
                        </a>
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

                        {title}
                    </span>
                </h4>
            </div>
            <div className="d-flex flex-column">
                {ThreadReplies(fetchedData.length)}
            </div>

            <form id="reply" className=" rounded-0 mt-4 " onSubmit={handleSubmit}>

                <div style={{ background: '#0f5579', fontSize: '13px' }} className="border border-white border-bottom-0 ">
                    <label className=" text-white ">&nbsp;Quick Reply</label>

                </div>
                <div onClick={handleClick}>
                    {elementHidden
                        ? (
                            <div id="ckEditor" className="mb-3 ck-editor__editable">

                                <CKEditor
                                    editor={Editor}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setText(data);
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
                    {
                        text == '' ? <button type="submit" className="btn btn-outline-light" disabled>Post</button>
                            : <button type="submit" className="btn btn-outline-light">Post</button>
                    }

                </div>
            </form>
        </section>

    );
}
