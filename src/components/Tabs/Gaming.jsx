/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

export default function Gaming() {
    return (
        <div className="p-4">
            <div className="my-5 border p-3 ">
                <h3 className="bg-dark p-3 d-inline-block">Gaming</h3>
                <p>
                    Everything gaming related will be in this area.

                </p>
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
                            <h6 className="fw-bold">Gaming Discussions </h6>
                            <p className="summaryfontsize">For the general chit-chats. You can post stuff in here that has nothing to do with forums.</p>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="col-4">
                            <h6 className="fw-bold">Gaming Help and Support </h6>
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
                            <h6 className="fw-bold"> Gaming Feedback and Suggestions </h6>
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
