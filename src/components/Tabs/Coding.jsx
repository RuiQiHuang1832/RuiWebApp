/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

const forumiconsize = {
    fontSize: '28px',
};
const fontsize = {
    fontSize: '12px',
};

const TITLE = 'Coding';
export default function Coding() {
    return (
        <div className="p-3 ms-5">
            <div className="my-5 border p-3 text-center">
                <h3 className="bg-dark p-3 d-inline-block align-content-center">{TITLE}</h3>
                <p>A forum for the entire family of coding. Gain help on compiling, objects, classes, and functions. </p>
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
                            <h6 className="fw-bold">
                                {TITLE}
                                {' '}
                                General Discussions
                                {' '}
                            </h6>
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
                                {' '}
                                {TITLE}
                                {' '}
                                Help and Support
                                {' '}
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
                                {TITLE}
                                {' '}
                                Feedback and Suggestions
                                {' '}
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
                            <h6 className="fw-bold">
                                {' '}
                                {TITLE}
                                {' '}
                                Sed vel gravida mauris
                                {' '}
                            </h6>
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
                            <h6 className="fw-bold">
                                {' '}
                                {TITLE}
                                {' '}
                                Pellentesque et mattis ipsum
                                {' '}
                            </h6>
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
