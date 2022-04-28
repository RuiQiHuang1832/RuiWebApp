/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import '../../styling/HomeSideColumn/Announcements.css';

export default function Announcements() {
    return (
        <div className="mb-5">
            <div style={{ width: '80%' }} className="d-inline-flex bg-dark p-2 mt-5 justify-content-between fw-bold ">
                {/** Announcment header */}
                <div className="btn-group">
                    <div className="btn btn-dark currency pe-0">Announcements</div>
                    <ul className="dropdown-menu" />
                </div>

            </div>
            <span style={{ width: '80%' }} className="d-flex border border-top-0">
                <table className="table text-white table-borderless mb-0">
                    <tbody>
                        <tr>
                            <td className="border-bottom ">
                                Updates on website
                                <br />
                                <span className="announcmentfontsize text-muted">By Ben, 14 hours ago</span>

                            </td>
                        </tr>
                        <tr>
                            <td className="border-bottom ">
                                Updates on website
                                <br />
                                <span className="announcmentfontsize text-muted">By Ben, 14 hours ago</span>

                            </td>
                        </tr>
                        <tr>
                            <td className="border-bottom ">
                                Updates on website
                                <br />
                                <span className="announcmentfontsize text-muted">By Ben, 14 hours ago</span>

                            </td>
                        </tr>
                        <tr>
                            <td className="border-bottom ">
                                Updates on website
                                <br />
                                <span className="announcmentfontsize text-muted">By Ben, 14 hours ago</span>

                            </td>
                        </tr>
                        <tr>
                            <td className="border-bottom ">
                                Updates on website
                                <br />
                                <span className="announcmentfontsize text-muted">By Ben, 14 hours ago</span>

                            </td>
                        </tr>
                        <tr>
                            <td className="border-bottom ">
                                Updates on website
                                <br />
                                <span className="announcmentfontsize text-muted">By Ben, 14 hours ago</span>

                            </td>
                        </tr>
                        <tr>
                            <td className="">
                                New Roles
                                <br />
                                <span className="announcmentfontsize text-muted">By Ben, 1 month ago</span>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </span>
        </div>
    );
}
