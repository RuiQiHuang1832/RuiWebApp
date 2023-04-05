/* eslint-disable camelcase */
/* eslint-disable no-mixed-operators */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { SelfBuildingSquareSpinner } from 'react-epic-spinners';
import React, { useEffect, useState } from 'react';
import '../styling/Template.css';
import { useParams, useLocation } from 'react-router-dom';
import JSZip from 'jszip';
import { getRelativeTime } from '../functions/coreFunctions';
import { API } from '../global';

// Template for how all forum pages should be built.
const forumiconsize = {
    fontSize: '28px',
};

export default function Template() {
    const location = useLocation();
    const { topic, forumname } = useParams();
    let threadIdentifier = {};
    const [currentTopic, setCurrentTopic] = useState();
    const [images, setImages] = useState([]);

    const [postData, setPostData] = useState(
        <tr className="">
            <td colSpan={5}>
                <div className="d-flex justify-content-center">
                    <SelfBuildingSquareSpinner size={50} color="rgb(52,159,182)" className="mt-2" />
                </div>
            </td>
        </tr>,
    );

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
        if (location.state.data === undefined) {
            window.location.href = '/';
        }
        fetch(`${API}users/images`)
            .then((response) => response.blob())
            .then((blob) => {
                const zipFile = new JSZip();
                return zipFile.loadAsync(blob); // Load the zip file asynchronously
            })
            .then((zip) => {
                const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
                const imagePromises = [];

                // Loop through each file in the zip archive
                zip.forEach((relativePath, zipEntry) => {
                    if (imageExtensions.some((ext) => zipEntry.name.endsWith(ext))) {
                        // Extract the image file from the zip archive
                        const imagePromise = zipEntry
                            .async('blob')
                            .then((imageBlob) => {
                                const imageUrl = URL.createObjectURL(imageBlob);
                                return imageUrl;
                            });
                        imagePromises.push(imagePromise);
                    }
                });

                // Wait for all image promises to resolve and display the images
                return Promise.all(imagePromises);
            })
            .then((imageUrls) => {
                setImages([...imageUrls]);
                convertForumNameToCategory();
            })
            .catch((error) => console.error(error))
            .then(() => {
                const filtered = location.state.data.filter((val) => val.category.includes(currentTopic));
                threadIdentifier = filtered.reverse();
                console.log(threadIdentifier);
                setPostData(threadIdentifier.map((obj) => (

                    <tr key={obj.id} style={{ fontSize: '13px' }}>
                        <td style={forumiconsize} className="pb-4 m-0">
                            <i className="bi bi-file-earmark-fill" />
                        </td>
                        <td>
                            <h6 className="">
                                <a className="text-decoration-none text-white" href={`/${obj.id}-${obj.title}`}>{obj.title}</a>
                                <span className="text-muted" style={{ fontSize: '11px' }}>
                                    &emsp;
                                    {getRelativeTime(obj.createdAt)}
                                </span>
                            </h6>
                            <p className="summaryfontsize col-md-8">
                                Started By:
                                {' '}
                                {obj.authorId}
                            </p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                            3
                            <p className="summaryfontsize">Replies</p>

                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                            0
                            <p className="summaryfontsize">Views</p>
                        </td>
                        <td className="d-flex align-items-center" style={{ color: '#898989', paddingLeft: '7%' }}>
                            <img src={images[obj.userId - 1]} alt="pfp" className="align-content-center mt-1 me-2" width="50" height="40" />
                            <div>
                                <div className="mt-1" style={{ color: 'rgb(204,204,204)' }}>Ben</div>
                                <div>Yesterday</div>
                            </div>
                        </td>
                    </tr>

                )));
            });
    }, [currentTopic]);
    // refresh last post from local storage so that it retrieves a new one from DB just in case its updated,
    // allows me to use cache and api calls without making wasting resources on making useless calls if update is not needed

    // disregard the double () (), its apparently the return
    useEffect(() => () => {
        setPostData(); // prevents no-op memory leak error but its fixed in react 18
    }, []);
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

                                        <table style={{ wordBreak: 'break-word', borderCollapse: 'collapse' }} className="table align-middle table-borderless mb-0">
                                            <thead className="text-white ">
                                                <tr>
                                                    <th style={{ width: '2%' }} className="col border-bottom "> </th>
                                                    <th className="col-6 border-bottom "> </th>
                                                    <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell" style={{ width: '10%' }}> </th>
                                                    <th className=" text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell" style={{ width: '8%' }}> </th>
                                                    <th className="  text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
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
