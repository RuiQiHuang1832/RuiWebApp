/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import '../../styling/Forum.css';
import '../../styling/Tabs.css';
import { useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';

const forumiconsize = {
    fontSize: '28px',
};
const fontsize = {
    fontSize: '12px',
};

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
    const objTempState = {
        discussion: 'Loading..',
        support: 'Loading..',
        feedback: 'Loading..',
    };
    const tempState = ls.get('threadCount') !== null ? ls.get('threadCount') : objTempState;
    const discussion = tempState.discussion;
    const support = tempState.support;
    const feedback = tempState.feedback;

    const discussionArr = [];
    const supportArr = [];
    const feedbackArr = [];

    const [latestDiscussionPost, setlatestDiscussionPost] = useState();
    const [latestSupportPost, setlatestSupportPost] = useState();
    const [latestFeedbackPost, setlatestFeedbackPost] = useState();

    // navigates from homepage to template page
    const toComponentB = (destination, params) => {
        navigate(`/${TITLE}/${destination}`, { state: { name: params.topic, description: params.description } });
    };
    function getOccurrence(array, value) {
        return array.filter((x) => x.category === value).length;
    }

    // grabs the amount of threads and puts it in home screen 'forum"
    useEffect(() => {
        let isMounted = true;
        fetch('https://ruibackend.herokuapp.com/post-data')
            .then((response) => response.json())
            .then((data) => {
                data.map((val) => {
                    if (val.category === topicOne) {
                        discussionArr.push(val);
                    } else if (val.category === topicTwo) {
                        supportArr.push(val);
                    } else if (val.category === topicThree) {
                        feedbackArr.push(val);
                    }
                });
                setlatestDiscussionPost(discussionArr[discussionArr.length - 1].title);
                setlatestSupportPost(supportArr[supportArr.length - 1].title);
                setlatestFeedbackPost(feedbackArr[feedbackArr.length - 1].title);
                if (isMounted) {
                    if (discussion === 'Loading..') {
                        const supportOccur = getOccurrence(data, topicTwo);
                        const discussionOccur = getOccurrence(data, topicOne);
                        const feedbackOccur = getOccurrence(data, topicThree);
                        const threadCount = {
                            support: supportOccur,
                            feedback: feedbackOccur,
                            discussion: discussionOccur,
                        };
                        ls.set('threadCount', threadCount);
                    }
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
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{discussion}</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{latestDiscussionPost}</td>
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
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{support}</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{latestSupportPost}</td>
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
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{feedback}</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{latestFeedbackPost}</td>
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
