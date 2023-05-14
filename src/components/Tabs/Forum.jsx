/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useRef } from 'react';
import '../../styling/Forum.css';
import '../../styling/Tabs.css';
import { useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';
import { API } from '../../global';

const forumiconsize = {
    fontSize: '28px',
};
const fontsize = {
    fontSize: '12px',
};
/**
 * * the reason I put results variable globally is because,
 * * in my Home, I render two components, Forum.jsx (this) and recentPost,
 * * in my Home, I also setState in ComponentDidMount, which causes a rerender, and causes these two
 * * components to re-render.
 * * In my useEffect of Forum.jsx, my dependecy array makes it only run ONCE. that means when forum.jsx is re-rendered,
 * * if let results is within the functional componenet instead global, it will be undefined because useEffect is not ran anymore
 * * and let results = NOTHING. which is why I was getting undefined whenever I re-render.
 * * Two solutions, were use define results globally, which means it will always have its value even after rerender or
 * *  make useEffect without the dependency array which means it will always be ran even after a re-render
 * *
 *  let results;
 *
 */
let results;
let lengthOfDB = null;
const topicOne = 'General Discussion';
const topicTwo = 'Help And Support';
const topicThree = 'Feedback And Suggestions';
const generalDiscussionDescription = 'For the general chit-chats. You can post stuff in here that has nothing to do with forums.';
const helpAndSupportDescription = `If you need help with anything 
site-related, this is the right place to ask for help.`;
const feedbackDescription = 'Leave feedback or post suggestions to improve the sites quality.';

const TITLE = 'Tailwind Forums';

export default function Forum() {
    const navigate = useNavigate();
    const objTempStateLastPost = [];
    for (let i = 0; i < 3; i += 1) {
        objTempStateLastPost.push({
            lastPost: {
                title: (ls.get('previousforumData')[i].threadCount !== 0 && ls.get('previousforumData') !== null) ? ls.get('previousforumData')[i].lastPost.title : '-',
            },
            threadCount: (ls.get('previousforumData')[i].threadCount !== 0 && ls.get('previousforumData') !== null) ? ls.get('previousforumData')[i].threadCount : '-',
        });
    }

    const allPostData = ls.get('forumData') !== null ? ls.get('forumData') : objTempStateLastPost;

    // navigates from homepage to template page
    const toComponentB = (destination, params) => {
        navigate(`/${TITLE}/${destination}`, { state: { name: params.topic, description: params.description, data: results } });
        // did this to kinda replicate behavior of links
        navigate(0);
    };

    function getDataLength(data, topic) {
        return data.filter((e) => e.category === topic).length;
    }

    function getLastPost(data, topic) {
        const temp = data.filter((e) => e.category === topic);
        return temp[temp.length - 1];
    }

    // grabs the amount of threads and puts it in home screen 'forum"
    useEffect(() => {
        let isMounted = true;
        fetch(`${API}post-data`)
            .then((response) => response.json())
            .then((data) => {
                lengthOfDB = data.length;
                results = [...data];
                if (lengthOfDB !== ls.get('dbAmt')) {
                    ls.remove('forumData');
                    ls.remove('recentPost');
                    ls.remove('previousforumData');
                }
                if (isMounted) {
                    const postData = [{
                        lastPost: getLastPost(data, topicOne),
                        threadCount: getDataLength(data, topicOne),
                    },
                    {
                        lastPost: getLastPost(data, topicTwo),
                        threadCount: getDataLength(data, topicTwo),
                    },
                    {
                        lastPost: getLastPost(data, topicThree),
                        threadCount: getDataLength(data, topicThree),
                    }];
                    ls.set('dbAmt', data.length);
                    ls.set('previousforumData', postData);
                    ls.set('forumData', postData);
                }
            });
        // bottom then is make the thread number static so it doesn't disappear for a split second and reappear
        // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
        return () => { isMounted = false; };
        // If you pass an empty array ([]), the props and state inside the effect will always have their initial values.
    }, []);

    return (
        <div className="p-3">
            <div className="my-5 border p-3 text-center">
                <h3 className="bg-dark p-3 d-inline-block">{TITLE}</h3>
                <p>Talk about your favourite movies, series or listen to some music.</p>
            </div>
            <table className="table align-middle table-borderless">
                <thead className="text-white ">
                    <tr style={fontsize}>
                        <th className=" border-bottom "> </th>
                        <th className="col-6 border-bottom ">FORUM</th>
                        <th className="col-2 text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">THREADS</th>
                        <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell" style={{ width: '13%' }}>POSTS</th>
                        <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">LAST POST</th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    <tr>
                        <td className="pb-4 col-1">
                            <i style={forumiconsize} className="bi bi-chat-right-text-fill" />
                        </td>
                        <td>
                            <h6 className="fw-bold ">
                                <a
                                    role="button"
                                    tabIndex="0"
                                    className="text-decoration-none text-white discussionlink"
                                    onClick={() => toComponentB('general-discussion', { topic: topicOne, description: generalDiscussionDescription })}
                                >
                                    {topicOne}
                                </a>

                            </h6>
                            <p className="summaryfontsize col-md-8">{generalDiscussionDescription}</p>
                        </td>

                        <td aria-label="threads" className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                            {allPostData[0].threadCount}
                        </td>
                        <td aria-label="posts" className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td aria-label="last post" className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell ">
                            <div className="nowrapEllipse">
                                <a className="text-decoration-none text-white" href={allPostData[0].lastPost === undefined ? '-' : `/${allPostData[0].lastPost.id}-${allPostData[0].lastPost.title}`}>
                                    {allPostData[0].lastPost === undefined ? '-' : allPostData[0].lastPost.title}
                                </a>

                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="pb-4 col-1"><i style={forumiconsize} className="bi bi-info-circle-fill" /></td>
                        <td>
                            <h6 className="fw-bold">
                                <a
                                    className="text-decoration-none text-white discussionlink"
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => toComponentB(
                                        'help-and-support',
                                        { topic: topicTwo, description: helpAndSupportDescription },
                                    )}
                                >
                                    {topicTwo}

                                </a>
                            </h6>
                            <p className="summaryfontsize col-md-8">{helpAndSupportDescription}</p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{allPostData[1].threadCount}</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                            <div className="nowrapEllipse">
                                <a className="text-decoration-none text-white" href={allPostData[1].lastPost === undefined ? '-' : `/${allPostData[1].lastPost.id}-${allPostData[1].lastPost.title}`}>

                                    {allPostData[1].lastPost === undefined ? '-' : allPostData[1].lastPost.title}
                                </a>

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pb-4 col-1">
                            <i style={forumiconsize} className="bi bi-chat-right-text-fill" />
                        </td>
                        <td>
                            <h6 className="fw-bold">
                                <a
                                    className="text-decoration-none text-white discussionlink"
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => toComponentB('feedback-and-suggestions', { topic: topicThree, description: feedbackDescription })}
                                >
                                    {topicThree}
                                </a>

                            </h6>
                            <p className="summaryfontsize col-md-8">
                                {feedbackDescription}
                            </p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{allPostData[2].threadCount}</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                            <div className="nowrapEllipse">
                                <a className="text-decoration-none text-white" href={allPostData[2].lastPost === undefined ? '-' : `/${allPostData[2].lastPost.id}-${allPostData[2].lastPost.title}`}>
                                    {allPostData[2].lastPost === undefined ? '-' : allPostData[2].lastPost.title}
                                </a>

                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="pb-4 col-1"><i style={forumiconsize} className="bi bi-award" /></td>
                        <td>
                            <h6 className="fw-bold">Sed vel gravida mauris </h6>
                            <p className="summaryfontsize col-md-8">
                                Nullam congue dapibus mauris.
                            </p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">1</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                    </tr>
                    <tr>
                        <td className="pb-4 col-1"><i style={forumiconsize} className="bi bi-bank2" /></td>
                        <td>
                            <h6 className="fw-bold">Pellentesque et mattis ipsum </h6>
                            <p className="summaryfontsize col-md-8">
                                Nullam ornare, justo at facilisis accumsan, magna arcu iaculis lorem.
                            </p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">1</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
