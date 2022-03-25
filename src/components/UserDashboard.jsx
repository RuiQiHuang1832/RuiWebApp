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
  const navigate = useNavigate();
  useEffect(() => {
    document.title = TITLE;
    if (ls.get('key') === null) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://ruibackend.herokuapp.com/user/updateBio', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(handleStringfy()),

    }).then((response) => console.log(response));
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
          <div className="col-5 ">
            <div className="card" style={{ background: 'rgb(31,32,40)' }}>
              <div className="card-body ">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Bio</label>
                {localStorage.getItem('user') === username ? (
                  <form onSubmit={handleSubmit}>
                    <textarea style={{ resize: 'none' }} className="form-control" value={lsbio} type="text" disabled />
                    <textarea placeholder="max 250 characters" className="form-control" rows="6" onChange={(e) => Setbio(e.target.value)} />
                    <button className="btn btn-secondary" type="submit">Save</button>
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
