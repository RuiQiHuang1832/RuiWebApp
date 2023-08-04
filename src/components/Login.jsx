/* eslint-disable react/jsx-indent */
/* eslint-disable prefer-template */
import React, { Component } from 'react';
import '../styling/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';
import panda from '../images/panda.png';
import { API, NAME } from '../global';

const TITLE = 'Login';

let xusername;
let xpassword;

export class Login extends Component {
  /** ************************
   *
   *
   *
   * https://www.youtube.com/watch?v=tDZPdovCH4I
   *Look at the previous video at the end where he sends requesst to the server.
   * all I have to do is copy that. grab data from login just like in Signup, then do a auth request
   * just like in the video to pass it in. prob using fetch API again...
   *
   *
   */

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      invalidlogin: '',
      spinnerlogin: 'Log In',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.title = TITLE;
  }

  componentDidUpdate() {
    xusername = this.state.username;
    xpassword = this.state.password;
  }

  // http://localhost:8080/user/admin                     <-local
  // https://ruibackend.herokuapp.com/user/login          <-production
  // use localStorage for storing sessions..(only if i want it)
  // Basic Auth
  handleClick(e) {
    // prevent Default is needed. If you take it out, the
    // fetch will occur because everything is still being ran within this func, but
    // it refreshes because of the event "submit" so fast that fetch doesn't even have time
    // to process, and immenditaly gets wiped which looks like fetch never ran.
    e.preventDefault();
    this.setState({ invalidlogin: '' });
    const url = API + 'users/login';
    this.setState({
      spinnerlogin:
        <div className="spinner-border spinner-border-sm" role="status" />,
    });

    const mynav = this.props.navigation;
    // Admin auth for getting token
    fetch(`${API}users/auth/admin`, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + window.btoa(xusername + ':' + xpassword),
        'Content-Type': 'text/plain',
      },
      body: xusername,
    }).then((res) => res.text())
      .then((token) => {
        localStorage.setItem('token', token);
      }).catch(() => console.log('Admin Status: False'));
    //
    fetch(url + `?username=${xusername}`, {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + window.btoa(xusername + ':' + xpassword),
        'Content-Type': 'text/plain',
      },

    }).then((res) => res.text())
      .then((token) => {
        localStorage.setItem('jwt', token);
      }).then(() => {
        fetch(API + 'users/datalist')
          .then((response) => response.json())
          .then((data) => {
            const filtered = data.filter((obj) => {
              if (xusername === obj.username) {
                return obj;
              }
            });
            localStorage.setItem('user', filtered[0].username);
            localStorage.setItem('clearance', filtered[0].role);
          }).then(() => {
            ls.remove('key');
            mynav('/');
            // removed this so it doesn't infite load on login
            // window.location.reload();
          });
      })
      .catch(() => {
        this.setState({ invalidlogin: 'Username or password incorrect.' });
        this.setState({ spinnerlogin: 'Log In' });
      });

    // look at authentication folder!
  }

  render() {
    return (

      <section id="backgroundImageLogin">
        <div className=" gradient-custom-3-login">
          <div className="container h-100 ">
            <div className="row justify-content-center  mx-lg-5 h-100">
              <div className=" col-xl-6 ">
                <div style={{ borderRadius: '' }} className="card my-5  border-warning">
                  <div className="gradient-custom-3-login ">
                    <div className="">
                      <div className="card-body  m-lg-5 ">
                        <div className="text-center mt-3">
                          <img src={panda} alt="pandaImage" className="align-content-center" width="180" height="150" />
                          <h3 className="mt-3 text-white">
                            Welcome to
                            {' '}
                            {NAME}
                          </h3>
                        </div>
                        <h4 className="text-danger text-center invalidloginopacity">{this.state.invalidlogin}</h4>
                        <h6 className="mt-5 mb-0 text-white">Please login to your account</h6>
                        <form onSubmit={this.handleClick}>
                          <div className="mb-2">
                            <label className="form-label" />
                            <input type="text" placeholder="Username" className="form-control" onChange={(e) => this.setState({ username: e.target.value })} />
                          </div>
                          <div className="mb-2">
                            <label className="form-label" />
                            <input type="password" placeholder="Password" className="form-control" onChange={(e) => this.setState({ password: e.target.value })} />
                          </div>
                          {/** onChange={(e) => this.setState({ password: e.target.value })} */}
                          <div className="d-grid">
                            <button type="submit" className="gradient-custom-2 mt-3 btn btn-md text-body loginbutton"><span className="text-white">{this.state.spinnerlogin}</span></button>
                          </div>
                          <div className="text-white text-center my-4">
                            <a href="/lostpassword"> Forgot password?</a>
                          </div>
                          <div className="d-flex justify-content-center">
                            <p className="mt-3 mb-0 text-white">
                              Don&apos;t have an account?&nbsp;
                              <u>
                                <Link to="/signup" className="text-body">
                                  <span className="text-white text-decoration-underline">Sign up</span>
                                </Link>
                              </u>
                            </p>
                          </div>

                        </form>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
            {/* applying mb-5 makes a white space at the bottom applied to this div tag V */}
            <div className="d-xxl-flex justify-content-xxl-center d-flex text-white text-nowrap footerLoginFontSize">
              <Link className="text-white text-decoration-none" to="/tos">Terms of Use&nbsp;</Link>

              <Link className="text-white text-decoration-none" to="/faq">&bull; Help&nbsp;</Link>

              {/** however, applying it to this div tag only does
               * it for this paragraph instead of the whole box */}
              <a className="text-white text-decoration-none mb-5" href="https://policies.google.com/privacy?hl=en-US">&bull; Privacy Policy</a>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default function LoginFunctionComp() {
  const navigate = useNavigate();
  return <Login navigation={navigate} />;
}
