/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useEffect } from 'react';
import ls from 'localstorage-slim';

export default function RecentTopics() {
    const tempStateRecentPost = {
        recentPost: 'Loading..',
    };

    const objLastPost = ls.get('recentPost') !== null ? ls.get('recentPost') : tempStateRecentPost;
    const { recentPost } = objLastPost;

    useEffect(() => {
        fetch('https://ruibackend.herokuapp.com/post-data')
            .then((response) => response.json())
            .then((data) => {
                const lastData = data[data.length - 1];
                const mostRecent = {
                    recentPost: { title: lastData.title, createdAt: lastData.createdAt, authorId: lastData.authorId },
                };
                ls.set('recentPost', mostRecent);
            }).then(() => {
                // works with template.jsx look at the ls.remove()
                if (recentPost === 'Loading..') {
                    window.location.reload();
                }
            });
    }, []);

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
                        <tr>
                            <td className="border-bottom">
                                {recentPost.title}
                                <br />
                                <span className="announcmentfontsize text-muted">
                                    By&nbsp;
                                    {recentPost.authorId}
                                    ,&nbsp;
                                    {recentPost.createdAt}
                                </span>

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
