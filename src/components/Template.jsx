/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../styling/Template.css';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

// Template for how all forum pages should be built.
const forumiconsize = {
    fontSize: '28px',
};

export default function Template() {
    const location = useLocation();
    const { topic, forumname } = useParams();
    let threadIdentifier = {};
    const [currentTopic, setCurrentTopic] = useState();
    const [postData, setPostData] = useState();
    // could be coded better
    function convertForumNameToCategory() {
        if (forumname === 'general-discussion') {
            setCurrentTopic('General Discussion');
        } else if (forumname === 'help-and-support') {
            setCurrentTopic('Help And Support');
        } else if (forumname === 'feedback-and-suggestions') {
            setCurrentTopic('Feedback And Suggestions');
        }
    }
    useEffect(() => {
        convertForumNameToCategory();
        axios.get('https://ruibackend.herokuapp.com/post-data')
            .then((res) => {
                const { data } = res;
                const filtered = data.filter((val) => val.category.includes(currentTopic));
                threadIdentifier = filtered;
            }).then(() => {
                setPostData(threadIdentifier.map((obj) => (
                    <tr key={obj.id}>
                        <td style={forumiconsize} className="pb-4 m-0">
                            <i className="bi bi-lock-fill" />
                        </td>
                        <td>
                            <h6 className="">
                                <a className="text-decoration-none text-white" href={`/${obj.id}-${obj.title}`}>{obj.title}</a>
                                <span className="text-muted" style={{ fontSize: '11px' }}>&nbsp;&nbsp;&nbsp; 3 weeks ago</span>
                            </h6>
                            <p className="summaryfontsize col-md-8">Started By: Ben</p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                            3

                            <p className="summaryfontsize">Replies</p>

                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                            0

                            <p className="summaryfontsize">Views</p>
                        </td>

                    </tr>
                )));
            });
    }, [currentTopic]);

    return (
        location.state === null ? <div className="text-white">404! PAGE NOT FOUND. PLEASE REFRESH PAGE. URL IS NOT A PAGE</div>
            : (
                <section>
                    <div className="container-fluid pt-5">

                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-11 ">
                                <div id="backgroundColorDash" className="card forumbannerheader">
                                    <div className="card-body">
                                        <div className="forumbannergeneraldiscussion">
                                            <div className="centered text-white text-center fs-3 fw-bold">
                                                {location.state.name}
                                                <p style={{ fontSize: '13px' }} className="fw-normal mt-2">
                                                    {location.state.description}
                                                </p>
                                                {/* user must be logged in to post */}
                                                {localStorage.getItem('user') == null
                                                    ? (
                                                        <span
                                                            className="btn btn-secondary newTopicBtn"
                                                        >
                                                            Please log in to post a topic
                                                        </span>
                                                    ) : (
                                                        <a
                                                            href={`/${topic}/${forumname}/post`}
                                                            className="btn btn-outline-light newTopicBtn"
                                                        >
                                                            Start New Topic
                                                        </a>
                                                    )}

                                            </div>

                                        </div>
                                        <div
                                            style={{
                                                backgroundColor: ' #0f5579',
                                                borderBottom: '1px solid #151515',
                                            }}
                                            className="backgroundasset d-inline-flex p-2 w-100 justify-content-between fw-bold mt-3"
                                        >
                                            <div
                                                style={{ textShadow: '1px 1px 1px #000' }}
                                                className="fs-6 ms-2 text-white "
                                            >
                                                Topics
                                            </div>

                                        </div>
                                        <div
                                            style={{
                                                backgroundColor: ' rgb(48,48,48)',
                                                borderBottom: '1px solid #151515',
                                            }}
                                            className=" d-inline-flex w-100  justify-content-between fw-bold mt-3"
                                        >
                                            <div style={{ fontSize: '13px', textShadow: '1px 1px 1px #000' }} className="ms-2 text-white ">
                                                Other Topics
                                            </div>

                                        </div>
                                        <table className="table align-middle table-borderless">
                                            <thead className="text-white ">
                                                <tr>
                                                    <th style={{ width: '2%' }} className="col border-bottom "> </th>
                                                    <th className="col-6 border-bottom "> </th>
                                                    <th className="col-2 text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
                                                    <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell" style={{ width: '13%' }}> </th>
                                                    <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-white">
                                                {postData}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
    );
}
