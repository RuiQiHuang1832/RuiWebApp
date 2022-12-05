/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';

export default function RecentTopics(props) {
    function organizeData(val) {
        const data = val.map((e) => (
            <tr key={e.id}>
                <td className="border-bottom">
                    {e.title}
                    <br />
                    <span className="announcmentfontsize text-muted">
                        By&nbsp;
                        {e.authorId}
                        ,&nbsp;
                        {e.createdAt}
                    </span>
                </td>
            </tr>
        ));
        return data;
    }
    return (
        <div className="mb-5">
            <div style={{ width: '80%' }} className="d-inline-flex bg-dark p-2 mt-5 justify-content-between fw-bold ">
                {/** Announcment header */}
                <div className="btn-group">
                    <div className="btn btn-dark currency pe-0">Recent Topics</div>
                    <ul className="dropdown-menu" />
                </div>
            </div>
            <span style={{ width: '80%' }} className="d-flex border border-top-0">
                <table className="table text-white table-borderless mb-0">
                    <tbody>
                        {organizeData(props.data)}
                    </tbody>
                </table>
            </span>
        </div>
    );
}
