/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import '../../styling/Forum.css';
import '../../styling/Tabs.css';

const forumiconsize = {
    fontSize: '28px',
};
const fontsize = {
    fontSize: '12px',
};

const TITLE = 'Tailwind Forums';

export default class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
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
                                <h6 className="fw-bold "><a className="text-decoration-none text-white discussionlink" href={`/${TITLE}/general-discussion`}>General Discussions </a></h6>
                                <p className="summaryfontsize col-md-8">For the general chit-chats. You can post stuff in here that has nothing to do with forums.</p>
                            </td>
                            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">1</td>
                            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        </tr>
                        <tr>
                            <td className="pb-4 col-1"><i style={forumiconsize} className="bi bi-info-circle-fill" /></td>
                            <td>
                                <h6 className="fw-bold">
                                    <a className="text-decoration-none text-white discussionlink" href={`/${TITLE}/help-and-support`}>Help and Support</a>
                                </h6>
                                <p className="summaryfontsize col-md-8">
                                    If you need help with anything
                                    <strong> site-related</strong>
                                    , this is the right place to ask for help.
                                    Please read our F.A.Q. before posting your questions/support inquires!
                                </p>
                            </td>
                            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">1</td>
                            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">0</td>
                        </tr>
                        <tr>
                            <td className="pb-4 col-1">
                                <i style={forumiconsize} className="bi bi-chat-right-text-fill" />
                            </td>
                            <td>
                                <h6 className="fw-bold">
                                    <a className="text-decoration-none text-white discussionlink" href={`/${TITLE}/feedback-suggestions`}>
                                        {' '}
                                        Feedback and Suggestions
                                    </a>

                                </h6>
                                <p className="summaryfontsize col-md-8">
                                    Leave feedback or post suggestions to improve the sites quality.
                                </p>
                            </td>
                            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">1</td>
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
}
