import React from 'react';
import panda from '../images/panda.png';
import '../styling/ThreadUser.css';
import member from '../images/memberimage.jpg';
// look at the comment on the bottom and refactor with a for loop/.
export default function ThreadUser() {
    return (
        <div className="threadUser">
            <div className="text-center mb-3 mt-1 text-white">
                Batman
                <br />
                <span style={{ fontSize: '12px' }} className="text-danger ">offline</span>
            </div>

            <div className="text-center mb-3">
                <img src={panda} alt="pandaImage" className="align-content-center " width="150" height="120" />
            </div>
            <div className="d-flex ">
                <div style={{ borderRight: '1px solid #333' }} className="m-auto mt-4 mb-3 text-center flex-grow-1">
                    <span style={{ textShadow: '1px 1px 1px #000', color: '#1e9e2d' }}>14</span>
                    <br />
                    <span style={{ fontSize: '13px ' }}>Rep</span>
                </div>
                <div className="m-auto  mt-4 mb-3 text-center flex-grow-1">
                    <span style={{ textShadow: '1px 1px 1px #000', color: '#1e9e2d' }}>14</span>
                    <br />
                    <span style={{ fontSize: '13px' }}>Likes</span>
                </div>
            </div>

            <div className="member-title ">Lurker</div>
            <div className=" pb-3 pt-e text-center mb-1">
                <img className="img" src={member} aria-label="member picture" />
            </div>
            {/* refactor this so it becomes a componenet or just make a for loop for it */}
            <div className="mb-3" style={{ width: '175px', margin: '0 auto', fontSize: '12px' }}>

                <div className="d-flex p-1 border mb-1 border-2 rounded">
                    <i className="bi bi-chat-fill inline-img" />
                    Posts:
                    <span className="ms-auto">50</span>
                </div>

                <div className="d-flex p-1 border mb-1  border-2 rounded">
                    <i className="bi bi-book-fill inline-img" />

                    Threads:
                    <span className="ms-auto">50</span>
                </div>
                <div className="d-flex p-1 border mb-1  border-2 rounded">
                    <i className="bi bi-calendar-event-fill inline-img" />
                    Joined:
                    <span className="ms-auto">Jan 5</span>
                </div>
                <div className="d-flex p-1 border mb-1  border-2 rounded">
                    <i className="bi bi-currency-exchange inline-img" />
                    Credits:
                    <span className="ms-auto">50</span>
                </div>
            </div>
            <br />
            {' '}
            <br />
            {' '}
            <br />

        </div>
    );
}
