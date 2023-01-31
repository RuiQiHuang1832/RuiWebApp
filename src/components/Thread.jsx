/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import '../styling/Template.css';
import { } from 'react-router-dom';
import ThreadBody from './ThreadBody';
import ThreadUser from './ThreadUser';

export default function Thread() {
    function ThreadReplies(len) {
        const items = [];
        for (let i = 0; i < len; i += 1) {
            items.push(<div key={i} style={{ color: '#AFAFAF' }} className="row g-0">
                <div style={{ width: '20%' }} className="col-3 border border-primary border-end-0 mt-2 "><ThreadUser /></div>
                <div style={{ width: '80%' }} className="col-9 border border-primary border-start-0 mt-2"><ThreadBody number={i + 1} /></div>
            </div>);
        }
        return items;
    }
    return (
        <section className="container text-white pt-3">
            <div className="border border-primary">
                <h4 className="text-start mb-0 ms-5">What is this site all about?</h4>
            </div>
            <div className="d-flex flex-column">
                {ThreadReplies(4)}
            </div>
        </section>

    );
}
