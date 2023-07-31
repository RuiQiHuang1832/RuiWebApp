import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/UserDashboard.css';
import ls from 'localstorage-slim';
import memberimage from '../images/memberimage.jpg';
import defaultimage from '../images/default_large.jpg';
import { API } from '../global';
import { containsEntry } from '../functions/coreFunctions';

const TITLE = 'User Dashboard';

export default function UserDashboard() {
  const navigate = useNavigate();
  const { username, id } = useParams();
  const [userimage, setuserimage] = useState(null);
  const [lsbio, setLsBio] = useState(ls.get('userInfo')?.bio || '');
  const [color, setColor] = useState(ls.get('userInfo')?.color || '');
  const [userExists, setUserExists] = useState(false);
  useEffect(() => {
    if (ls.get('key') === null) { // navigate to home page to fetch the data if key is not found
      navigate('/');
    } else {
      const arr = ls.get('key', { decrypt: true });
      if (containsEntry(arr, id, username)) {
        setUserExists(true);
        const pos = arr.map((e) => e.username).indexOf(username);
        setColor(arr[pos].color);
        setLsBio(arr[pos].bio);
        ls.set('userInfo', { bio: arr[pos].bio, color: arr[pos].color });
      }
    }
  }, []);
  // load user profile on dom load, make it so it grabs it from cache instead of fetching each time!
  useEffect(() => {
    document.title = TITLE;
    fetch(`${API}users/image/${id}`)
      .then((response) => response.blob())
      .then((res) => { // if the image size is 114, which is basically nothing, set it to default, else set to
        // user designated.
        if (res.size < 200) {
          setuserimage(defaultimage);
        } else {
          const objectURL = URL.createObjectURL(res);
          setuserimage(objectURL);
        }
      });
  }, []);

  return (
    <section id="backgroundColorDash">
      {userExists ? (
        <div className="container-lg pt-3">
          <div className="row">
            <div className="col d-flex align-items-center userCoverPage">

              <img className="profilePicture ms-3" aria-label="profile picture" width={150} src={userimage} />
              <div className="profilecover text-white ">
                <h3 className={`m-0 text-${color}`}>{username}</h3>
                <p className="fs-6 ">New Member</p>
                <img src={memberimage} aria-label="member picture" width="150" />

              </div>
            </div>

          </div>
          <div className="row row-cols-1 row-cols-sm-2 mt-5">
            <div className="col-xl-3 col-sm-6">
              {/** REPUTATION */}

              <div className="row row-cols-2 row-cols-md-2 mb-5 g-4">
                <div className="col">
                  <div className="card card-body text-center pillcolor shadowlg">
                    <span className="">0</span>
                    <span className="" style={{ fontSize: '13px' }}>Reputation</span>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-body text-center pillcolor shadowlg">
                    <span className="">0</span>
                    <span className="" style={{ fontSize: '13px' }}>Likes</span>
                  </div>
                </div>
              </div>
              {/** BASIC INFO */}
              <div className="card carddarkbg border-white">
                <div className="card-body ">
                  <div className="d-inline-flex w-100 justify-content-between fw-bold  border-bottom">
                    <div className="fs-5 ms-2 text-white mb-2">Basic Information</div>
                  </div>
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
              {/** VISITORS */}
              <div className="mt-4">
                <div className="card carddarkbg border-white">
                  <div className="card-body ">
                    <div className="d-inline-flex w-100 justify-content-between fw-bold  border-bottom">
                      <div className="fs-5 ms-2 text-white mb-2">Vistors</div>
                    </div>
                    <table className="table text-white">
                      <tbody>
                        <tr>
                          <td>Unavailable</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/** BIO */}
            <div className="col-lg-6 mt-4 mt-sm-auto col">
              <div className="card carddarkbg border-white">
                <div className="card-body">
                  <label className="form-label fs-5 ms-2 text-white mb-2 fw-bold">Biography</label>
                  <textarea disabled readOnly style={{ resize: 'none' }} value={lsbio || ''} className="form-control border-top rounded-0 border-0" rows="6" />
                </div>
              </div>
              {/** STATISTICS */}
              <div className="card carddarkbg border-white my-4">
                <div className="card-body">
                  <div className="d-inline-flex w-100 justify-content-between fw-bold border-bottom ">
                    <div className="fs-5 ms-2 text-white mb-2">Statistics</div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <table className="table text-white">
                        <thead>
                          <tr />
                        </thead>
                        <tbody>
                          <tr>
                            <td>Posts:</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Warning Level:</td>
                            <td>Low</td>
                          </tr>
                          <tr>
                            <td>Trust Scan:</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <td>Vounches:</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Credits:</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md">
                      <table className="table text-white">
                        <thead>
                          <tr />
                        </thead>
                        <tbody>
                          <tr>
                            <td>Joined Date:</td>
                            <td>Today</td>
                          </tr>
                          <tr>
                            <td>Role:</td>
                            <td>USER</td>
                          </tr>
                          <tr>
                            <td>Threads:</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Reported Posts:</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (<div className="text-danger">User Not Found</div>)}
    </section>
  );
}
