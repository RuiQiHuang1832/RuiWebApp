import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styling/UserDashboard.css';
import defaultImg from '../images/default_large.jpg';
import memberimage from '../images/memberimage.jpg';

const TITLE = 'User Dashboard';

export default function UserDashboard() {
  useEffect(() => {
    document.title = TITLE;
  });
  const { username } = useParams();

  return (
    <section id="backgroundColorDash">
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-center userCoverPage">
            <img className="profilePicture ms-3" aria-label="profile picture" src={defaultImg} />
            <div className="profilecover text-white ">
              <h3 className="m-0">{username}</h3>
              <p className="fs-6 ">New Member</p>
              <img src={memberimage} aria-label="member picture" width="150" />

            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-3 ">
            <div className="card" style={{ background: 'rgb(31,32,40)' }}>
              <div className="card-body ">
                <table className="table text-white">
                  <thead>
                    <tr>
                      <th scope="col">Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Posts:</td>
                    </tr>
                    <tr>
                      <td>Joined: </td>
                    </tr>
                    <tr>
                      <td>Date of Birth:</td>
                    </tr>
                    <tr>
                      <td>Reputation:</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div className="card" style={{ background: 'rgb(31,32,40)' }}>
              <div className="card-body ">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Bio</label>
                {localStorage.getItem('user') === username ? <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" />
                  : <textarea readOnly className="form-control" id="exampleFormControlTextarea1" rows="6" /> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
