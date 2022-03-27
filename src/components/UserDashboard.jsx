/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';
import '../styling/UserDashboard.css';
import defaultImg from '../images/default_large.jpg';
import memberimage from '../images/memberimage.jpg';

const TITLE = 'User Dashboard';
export default function UserDashboard() {
  const { username } = useParams();
  const [biography, Setbio] = useState('');
  const [users, setUsers] = useState();
  const [lsbio, setlsbio] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = TITLE;
    if (ls.get('key') === null) { // navigate to home page to fetch the data if key is not found
      navigate('/');
    } else {
      setUsers(ls.get('key', { decrypt: true }));
      const arr = ls.get('key', { decrypt: true });
      const pos = arr.map((e) => e.username).indexOf(username);
      setlsbio(arr[pos].bio);
    }
  }, []);

  function handleStringfy() {
    const position = users.map((e) => e.username).indexOf(username);
    return {
      id: users[position].id,
      email: users[position].email,
      password: users[position].password,
      username: users[position].username,
      ipaddress: users[position].ipaddress,
      role: users[position].role,
      bio: biography,
    };
  }

  function displaySpinner() {
    if (loading) {
      return <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>;
    }
    return <> </>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    fetch('https://ruibackend.herokuapp.com/user/updateBio', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(handleStringfy()),

    }).then().then(() => { // after user saves bio, remove the key and navigate back to home so it refreshes the key with new info at home
      ls.remove('key');
      navigate('/');
    });
  };

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
          <div className="col-5 ">
            <div className="card" style={{ background: 'rgb(31,32,40)' }}>
              <div className="card-body ">
                <label className="form-label text-white">Bio</label>
                {localStorage.getItem('user') === username ? (
                  <form onSubmit={handleSubmit}>
                    {/** if currently logged in: */}
                    <textarea style={{ resize: 'none' }} className="form-control" value={lsbio} type="text" disabled />
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#textareacollapse">EDIT</button>
                    <div className="collapse" id="textareacollapse">
                      <textarea placeholder="max 250 characters" maxLength={250} className="form-control" rows="6" onChange={(e) => Setbio(e.target.value)} />
                      <button className="btn btn-secondary" type="submit">Save</button>
                    </div>
                    <div>{displaySpinner()}</div>
                  </form>
                )
                  : <textarea readOnly style={{ resize: 'none' }} value={lsbio} className="form-control" rows="6" /> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
