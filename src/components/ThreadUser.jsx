import React from 'react';
import panda from '../images/panda.png';
import '../styling/ThreadUser.css';

export default function ThreadUser() {
    return (
        <div className="">
            <div className="text-center mb-3 mt-1 text-white">Batman</div>
            <div className="text-center mb-3">
                <img src={panda} alt="pandaImage" className="align-content-center" width="150" height="120" />
            </div>
            <div className="member-title border">Advanced Member</div>
            <div className="mb-3" style={{ width: '175px', margin: '0 auto', fontSize: '12px' }}>
                <div className="d-flex">
                    Posts:
                    <span className="ms-auto">50</span>
                </div>
                <div className="d-flex">
                    Threads:
                    <span className="ms-auto">50</span>
                </div>
                <div className="d-flex">
                    Joined:
                    <span className="ms-auto">50</span>
                </div>
            </div>
        </div>
    );
}
