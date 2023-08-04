/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import parse from 'html-react-parser';
import { getRelativeTime } from '../../functions/coreFunctions';

export default function RecentTopics(props) {
    function organizeData(val) {
        const data = val.map((e, i) => (
            <tr key={e.id}>
                <td className={i === 2 ? '' : 'border-bottom'}>
                    <a className="text-decoration-none text-white" href={`/${e.id}-${e.title}`}>
                        {e.title}
                    </a>
                    <br />
                    <span className="announcmentfontsize text-muted">
                        {e.deletionFlag === 1 ? parse(`<span className="text-white">By ${e.authorId}</span>`) : parse(`<del style="opacity:0.5">By ${e.authorId}</del>`)}

                        <span className="text-muted">,&nbsp;</span>
                        {getRelativeTime(e.createdAt)}
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
