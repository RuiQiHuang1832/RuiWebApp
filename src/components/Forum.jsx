/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import '../styling/Forum.css';

export default class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="p-4">
                <h3 className="my-5">Tailwind Forums</h3>
                <table className="table">
                    <thead className="text-white">
                        <tr>
                            <th scope="col">FORUM</th>
                            <th scope="col">THREADS</th>
                            <th scope="col">POSTS</th>
                            <th scope="col">LAST POST</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        <tr>
                            <td className="col-4">
                                <h6 className="fw-bold">General Discussions </h6>
                                <p className="summaryfontsize">For the general chit-chats. You can post stuff in here that has nothing to do with forums.</p>
                            </td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="col-4">
                                <h6 className="fw-bold">Help and Support </h6>
                                <p className="summaryfontsize">
                                    If you need help with anything
                                    <strong> site-related</strong>
                                    , this is the right place to ask for help.
                                    Please read our F.A.Q. before posting your questions/support inquires!
                                </p>
                            </td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="col-4">
                                <h6 className="fw-bold">Feedback and Suggestions </h6>
                                <p className="summaryfontsize">
                                    Leave feedback or post suggestions to improve the sites quality.
                                </p>
                            </td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
