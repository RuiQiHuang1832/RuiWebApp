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
const TITLE = 'Tailwind Forums';

export default function Forum() {
    const navigate = useNavigate();

    const [discussion, setDiscussion] = useState();
    const [support, setSupport] = useState();
    const [feedback, setFeedback] = useState();

    // navigates from homepage to template page
    const toComponentB = (destination, titleName) => {
        navigate(`/${TITLE}/${destination}`, { state: { name: titleName } });
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
                if (isMounted) {
                    setSupport(getOccurrence(data, topicTwo));
                    setDiscussion(getOccurrence(data, topicOne));
                    setFeedback(getOccurrence(data, topicThree));
                }
            })
            // bottom then is make the thread number static so it doesn't disappear for a split second and reappear

            .then(() => {
                const threadCount = {
                    support,
                    feedback,
                    discussion,
                };
                ls.set('threadCount', threadCount, { encrypt: true });
            });
        // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
        return () => { isMounted = false; };
        // If you pass an empty array ([]), the props and state inside the effect will always have their initial values.
    }, [support, discussion, feedback]);

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
                                <a role="button" tabIndex="0" className="text-decoration-none text-white discussionlink" onClick={() => toComponentB('general-discussion', topicOne)}>
                                    {topicOne}
                                </a>

                            </h6>
                            <p className="summaryfontsize col-md-8">For the general chit-chats. You can post stuff in here that has nothing to do with forums.</p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{ls.get('threadCount', { decrypt: true }).discussion}</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                    </tr>
                    <tr>
                        <td className="pb-4 col-1"><i style={forumiconsize} className="bi bi-info-circle-fill" /></td>
                        <td>
                            <h6 className="fw-bold">
                                <a className="text-decoration-none text-white discussionlink" role="button" tabIndex="0" onClick={() => toComponentB('help-and-support', topicTwo)}>{topicTwo}</a>
                            </h6>
                            <p className="summaryfontsize col-md-8">
                                If you need help with anything
                                <strong> site-related</strong>
                                , this is the right place to ask for help.
                                Please read our F.A.Q. before posting your questions/support inquires!
                            </p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{ls.get('threadCount', { decrypt: true }).support}</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                    </tr>
                    <tr>
                        <td className="pb-4 col-1">
                            <i style={forumiconsize} className="bi bi-chat-right-text-fill" />
                        </td>
                        <td>
                            <h6 className="fw-bold">
                                <a className="text-decoration-none text-white discussionlink" role="button" tabIndex="0" onClick={() => toComponentB('feedback-and-suggestions', topicThree)}>
                                    {topicThree}
                                </a>

                            </h6>
                            <p className="summaryfontsize col-md-8">
                                Leave feedback or post suggestions to improve the sites quality.
                            </p>
                        </td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">{ls.get('threadCount', { decrypt: true }).feedback}</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
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
