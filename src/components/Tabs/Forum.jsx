/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import '../../styling/Forum.css';

export default class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="p-4">
                <div className="my-5 border p-3 ">
                    <h3 className="bg-dark p-3 d-inline-block">Tailwind Forums</h3>
                    <p>Talk about your favourite movies, series or listen to some music.</p>
                </div>

                <table className="table align-middle table-borderless">
                    <thead className="text-white ">
                        <tr>
                            <th className="col-6 border-bottom ">FORUM</th>
                            <th className="col-2 text-center border-bottom ">THREADS</th>
                            <th className="text-center border-bottom" style={{ width: '22%' }}>POSTS</th>
                            <th className="text-center border-bottom">LAST POST</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        <tr>
                            <td>
                                <h6 className="fw-bold">General Discussions </h6>
                                <p className="summaryfontsize col-6">For the general chit-chats. You can post stuff in here that has nothing to do with forums.</p>
                            </td>
                            <td className="text-center">1</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="fw-bold">Help and Support </h6>
                                <p className="summaryfontsize col-6">
                                    If you need help with anything
                                    <strong> site-related</strong>
                                    , this is the right place to ask for help.
                                    Please read our F.A.Q. before posting your questions/support inquires!
                                </p>
                            </td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="fw-bold">Feedback and Suggestions </h6>
                                <p className="summaryfontsize col-6">
                                    Leave feedback or post suggestions to improve the sites quality.
                                </p>
                            </td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="fw-bold">Sed vel gravida mauris </h6>
                                <p className="summaryfontsize col-6">
                                    Nullam congue dapibus mauris.
                                </p>
                            </td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="fw-bold">Pellentesque et mattis ipsum </h6>
                                <p className="summaryfontsize col-6">
                                    Nullam ornare, justo at facilisis accumsan, magna arcu iaculis lorem.
                                </p>
                            </td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
