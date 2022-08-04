/* eslint-disable no-lone-blocks */
import { FingerprintSpinner } from 'react-epic-spinners';
import React, { useState, useEffect } from 'react';
// import defaultImg from '../images/default_large.jpg';
import ls from 'localstorage-slim';
import { useParams, useNavigate } from 'react-router-dom';
import '../styling/Settings.css';

const TITLE = 'Settings';

export default function Settings() {
  const data = new FormData();
  const { username, id } = useParams();
  const [imagefile, setimagefile] = useState(null);
  const [biography, Setbio] = useState('');
  const [loading, setloading] = useState(false);
  const [ticker, setTicker] = useState('');
  const [authUserisLogged] = useState(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    document.title = TITLE;

    if (ls.get('key') === null) { // navigate to home page to fetch the data if key is not found
      navigate('/');
    } else {
      const arr = ls.get('key', { decrypt: true });
      const pos = arr.map((e) => e.username).indexOf(username);
      Setbio(arr[pos].bio);
    }
  }, []);
  function resetKey() {
    // refresh key basically and retrieve new updated
    ls.remove('key');
    navigate('/');
  }

  function handleStringfy() {
    return {
      bio: biography,
    };
  }

  // submits a form data in key:value
  function handleFormData() {
    data.append('file', imagefile);
    return data;
  }

  function displaySpinner() {
    if (loading) {
      return (
        <div>
          <FingerprintSpinner color="rgb(52,159,182)" />
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }
    return <> </>;
  }

  // https://stackoverflow.com/questions/41610811/react-js-how-to-send-a-multipart-form-data-to-server
  // All i had to do was remove headers..  Originally I had headers and was throwing errors, but once removed it works!

  const handleImageSubmit = () => {
    fetch(`https://ruibackend.herokuapp.com/users/${id}/profileimage`, {
      method: 'PATCH',
      body: handleFormData(),
    }).then().then(() => {
      resetKey();
    });
  };

  // https://ruibackend.herokuapp.com/user/updateBio/${id}
  const handleSubmit = (e) => {
    e.preventDefault();
    ls.set('ticker', ticker.split(','), { encrypt: true });
    setloading(true);
    fetch(`https://ruibackend.herokuapp.com/users/${id}/biography`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(handleStringfy()),

    }).finally(() => { // after user saves bio, remove the key and navigate back to home so it refreshes the key with new info at home
      handleImageSubmit();
    });
  };
  if (authUserisLogged !== username) {
    return <div className="text-white">Access Restricted</div>;
  }
  return (

    <section>
      <div className="container settingsbg">
        <h1 className="text-white py-3 ">
          GENERAL ACCOUNT SETTINGS
        </h1>
        <div>
          <form onSubmit={handleSubmit} className="text-white">

            <fieldset className="row border-bottom border-top">
              <label className="col-4 col-form-label">Profile Information</label>
              <div style={{ boxSizing: 'content-box' }} className=" col-11 col-lg-5 col-md-7 d-flex justify-content-start">
                <textarea placeholder="max 250 characters" maxLength={250} className="form-control my-3" rows="6" onChange={(e) => Setbio(e.target.value)} />
              </div>
            </fieldset>

            <fieldset className="row border-bottom">
              <label className="col-4 col-form-label">Profile Picture &#60;2MB</label>
              <div style={{ boxSizing: 'content-box' }} className=" col-11 col-lg-5 col-md-7 d-flex justify-content-start">
                <input className="form-control form-control-md my-3" type="file" id="formFile" onChange={(event) => setimagefile(event.target.files[0])} />
              </div>
            </fieldset>
            {/** Filler */}
            <fieldset className="row border-bottom">
              <label className="col-4 col-form-label">Contact Methods</label>
              <div style={{ boxSizing: 'content-box' }} className=" col-11 col-lg-5 col-md-7">
                <div className="row my-3">
                  {/** col-form-label aligns text to center, form-label does nothing */}
                  <label className="col-4 col-md-3 col-form-label ">Discord</label>
                  <div className="col">
                    <input className="form-control settingsmediacolor" type="text" />
                  </div>
                </div>

                <div className="row my-3">
                  <label className="col-4 col-md-3 col-form-label ">Website</label>
                  <div className="col">
                    <input className="form-control settingsmediacolor" type="text" />
                  </div>
                </div>

                <div className="row my-3">
                  <label className="col-4 col-md-3 col-form-label ">LinkedIn</label>
                  <div className="col">
                    <input className="form-control settingsmediacolor" type="text" />
                  </div>
                </div>

              </div>
            </fieldset>

            <fieldset className="row border-bottom">
              <label className="col-4 col-form-label">Miscellaneous</label>
              <div style={{ boxSizing: 'content-box' }} className=" col-11 col-lg-5 col-md-7">
                <div className="row my-3">
                  {/** col-form-label aligns text to center, form-label does nothing */}
                  <label className="col-4 col-md-3 col-form-label ">Gender</label>
                  <div className="col">
                    <select className="form-select" aria-label="Default select example">
                      <option selected value="1">Prefer not to say</option>
                      <option value="2">Female</option>
                      <option value="3">Male</option>
                    </select>
                  </div>
                </div>

                <div className="row my-3">
                  <label className="col-4 col-md-3 col-form-label ">Location</label>
                  <div className="col">
                    <input className="form-control settingsmediacolor" type="text" />
                  </div>
                </div>

                <div className="row my-3">
                  <label className="col-4 col-md-3  col-form-label ">Interests</label>
                  <div className="col">
                    <textarea placeholder="max 250 characters" maxLength={250} className="form-control my-3" rows="6" />
                  </div>
                </div>
                <div className="row my-3">
                  <label className="col-4 col-md-3 col-form-label ">Tickers</label>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="choose 3 tickers seperated by commas" onChange={(e) => setTicker(e.target.value)} />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="d-flex justify-content-center mt-4 pb-4">
              <button className="input-group-text btn btn-outline-success" type="submit">Save Changes</button>
            </fieldset>
            <div>{displaySpinner()}</div>
          </form>
        </div>

      </div>
    </section>

  );
}

{ /* <div className="container">
        <div className="row ">
            <h1 className="border-bottom">
              GENERAL ACCOUNT SETTINGS
            </h1>
            <fieldset>
              <h3>Profile Information</h3>
              <form onSubmit={handleSubmit}>
                 if currently logged in:
                <textarea placeholder="max 250 characters" maxLength={250} className="form-control" rows="6" onChange={(e) => Setbio(e.target.value)} />
                <button className="btn btn-secondary" type="submit">Save</button>
                <div>{displaySpinner()}</div>
              </form>
            </fieldset>
          <div className="row">
            <div className="card carddarkbg">
              <div className="card-body ">
                <label className="text-white">Upload Profile Picture &#60;2MB</label>
                <form onSubmit={handleImageSubmit}>
                  <div className="input-group mb-3">
                    <input className="form-control form-control-md" type="file" id="formFile" onChange={(event) => setimagefile(event.target.files[0])} />
                    <button className="input-group-text" type="submit" htmlFor="formFile">Upload</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div> */ }
