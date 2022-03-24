import React, { useEffect } from 'react';
import '../styling/UserDashboard.css';
import defaultImg from '../images/default_large.jpg';
import memberimage from '../images/memberimage.jpg';

const TITLE = 'User Dashboard';

export default function UserDashboard() {
  useEffect(() => {
    document.title = TITLE;
  });

  return (
    <section id="backgroundColorDash">

      <div className="container">

        <div className="row">
          <div className="col d-flex align-items-center  userCoverPage">
            <img className="profilePicture ms-3" aria-label="profile picture" src={defaultImg} />
            <div className="profilecover text-white ">
              <h3 className="m-0">{localStorage.getItem('user')}</h3>
              <p className="fs-6 ">New Member</p>
              <img src={memberimage} aria-label="member picture" width="150" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
