import React from 'react';
// import gendiscussion from '../images/gendiscussion.png';
import '../styling/Template.css';
import { useParams, useLocation } from 'react-router-dom';

// Template for how all forum pages should be built.
const forumiconsize = {
    fontSize: '28px',
};

// const TITLE = 'General Discussion';

export default function Template() {
    const location = useLocation();
    const { topic, forumname } = useParams();

    return (
        location.state === null ? <div className="text-white">404! PAGE NOT FOUND. PLEASE REFRESH PAGE. URL IS NOT A PAGE</div>
            : (
                <section>
                    <div className="container-fluid pt-5">
                        <div className="row justify-content-center">
                            <div className="col-11 ">
                                <div id="backgroundColorDash" className="card forumbannerheader">
                                    <div className="card-body">
                                        <div className="forumbannergeneraldiscussion">
                                            <div className="centered text-white text-center fs-3 fw-bold">
                                                {location.state.name}
                                                <p style={{ fontSize: '13px' }} className=" fw-normal">
                                                    For the general chit-chats.
                                                    <br />
                                                    You can post stuff in here that has nothing to do with
                                                    forums.
                                                </p>
                                            </div>
                                            <div style={{
                                                float: 'right', position: 'relative', bottom: '-90px', left: '-20px',
                                            }}
                                            >
                                                <a href={`/${topic}/${forumname}/post`} className="btn btn-outline-light">Start New Topic</a>
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
                                        <table className="table align-middle table-borderless">
                                            <thead className="text-white ">
                                                <tr>
                                                    <th style={{ width: '2%' }} className="col border-bottom "> </th>
                                                    <th className="col-6 border-bottom "> </th>
                                                    <th className="col-2 text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
                                                    <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell" style={{ width: '13%' }}> </th>
                                                    <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-white">
                                                <tr>
                                                    <td style={forumiconsize} className="pb-4 m-0">
                                                        <i className="bi bi-lock-fill" />
                                                    </td>
                                                    <td>
                                                        <h6 className="">

                                                            Thread #1
                                                            <span className="text-muted" style={{ fontSize: '11px' }}>&nbsp;&nbsp;&nbsp; 3 weeks ago</span>
                                                        </h6>
                                                        <p className="summaryfontsize col-md-8">Started By: Ben</p>
                                                    </td>
                                                    <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                                                        3

                                                        <p className="summaryfontsize">Replies</p>

                                                    </td>
                                                    <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                                                        0

                                                        <p className="summaryfontsize">Views</p>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td style={forumiconsize} className="pb-4 ">
                                                        <i className="bi bi-lock-fill" />
                                                    </td>
                                                    <td>
                                                        <h6 className="">

                                                            Thread #2

                                                            <span className="text-muted" style={{ fontSize: '11px' }}>&nbsp;&nbsp;&nbsp; 3 weeks ago</span>

                                                        </h6>
                                                        <p className="summaryfontsize col-md-8">
                                                            Started By: Ben
                                                        </p>
                                                    </td>
                                                    <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                                                        1
                                                        <p className="summaryfontsize">Replies</p>
                                                    </td>
                                                    <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                                                        0

                                                        <p className="summaryfontsize">Views</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={forumiconsize} className="pb-4">
                                                        <i className="bi bi-lock-fill" />
                                                    </td>
                                                    <td>
                                                        <h6 className="">
                                                            Thread #3
                                                            <span className="text-muted" style={{ fontSize: '11px' }}>&nbsp;&nbsp;&nbsp; 3 weeks ago</span>

                                                        </h6>
                                                        <p className="summaryfontsize col-md-8">
                                                            Started By: Ben

                                                        </p>
                                                    </td>
                                                    <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                                                        1

                                                        <p className="summaryfontsize">Replies</p>
                                                    </td>
                                                    <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
                                                        0

                                                        <p className="summaryfontsize">Views</p>
                                                    </td>
                                                </tr>
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
