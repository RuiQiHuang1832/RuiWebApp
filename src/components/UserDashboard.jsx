/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/UserDashboard.css';
import ls from 'localstorage-slim';
import memberimage from '../images/memberimage.jpg';
import Settings from './Settings';

const TITLE = 'User Dashboard';
export default function UserDashboard() {
  const { username, id } = useParams();
  const [userimage, setuserimage] = useState(null);
  const [lsbio, setLsBio] = useState('');
  useEffect(() => {
    if (ls.get('key') === null) { // navigate to home page to fetch the data if key is not found
      navigate('/');
    } else {
      const arr = ls.get('key', { decrypt: true });
      const pos = arr.map((e) => e.username).indexOf(username);
      setLsBio(arr[pos].bio);
    }
  }, []);
  // load user profile on dom load, make it so it grabs it from cache instead of fetching each time!
  useEffect(() => {
    document.title = TITLE;
    fetch(`https://ruibackend.herokuapp.com/user/image/${id}`)
      .then((response) => response.blob())
      .then((res) => {
        const objectURL = URL.createObjectURL(res);
        setuserimage(objectURL);
      });
  }, []);

  return (
    <section id="backgroundColorDash">

      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-center userCoverPage">

            <img className="profilePicture ms-3" aria-label="profile picture" width={150} src={userimage} />
            <div className="profilecover text-white ">
              <h3 className="m-0">{username}</h3>
              <p className="fs-6 ">New Member</p>
              <img src={memberimage} aria-label="member picture" width="150" />

            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-3 ">
            <div className="card carddarkbg">
              <div className="card-body ">
                <table className="table text-white">
                  <tbody>
                    <tr>
                      <td>Posts:</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Joined: </td>
                      <td>Today</td>
                    </tr>
                    <tr>
                      <td>Date of Birth:</td>
                      <td>Unknown</td>
                    </tr>
                    <tr>
                      <td>Reputation:</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="card carddarkbg">
              <div className="card-body ">
                <label className="form-label text-white">Bio</label>
                <textarea readOnly style={{ resize: 'none' }} value={lsbio || ''} className="form-control" rows="6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
