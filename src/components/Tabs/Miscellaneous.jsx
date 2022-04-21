import React from 'react';
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */

export default function Miscellaneous() {
    return (
        <div className="p-4">
            <div className="my-5 border p-3 ">
                <h3 className="bg-dark p-3 d-inline-block">Miscellaneous</h3>
                <p>For great discussions about anything. </p>
            </div>
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
                            <h6 className="fw-bold">Miscellaneous General Discussions </h6>
                            <p className="summaryfontsize">For the general chit-chats. You can post stuff in here that has nothing to do with forums.</p>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="col-4">
                            <h6 className="fw-bold">Miscellaneous Help and Support </h6>
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
                            <h6 className="fw-bold">Miscellaneous Feedback and Suggestions </h6>
                            <p className="summaryfontsize">
                                Leave feedback or post suggestions to improve the sites quality.
                            </p>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="col-4">
                            <h6 className="fw-bold">Sed vel gravida mauris </h6>
                            <p className="summaryfontsize">
                                Nullam congue dapibus mauris.
                            </p>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="col-4">
                            <h6 className="fw-bold">Pellentesque et mattis ipsum </h6>
                            <p className="summaryfontsize">
                                Nullam ornare, justo at facilisis accumsan, magna arcu iaculis lorem.
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
