import React, { Component } from 'react';
import '../styling/Home.css';
import ls from 'localstorage-slim';
import Forum from './Forum';

const TITLE = 'Home';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentpage: 'Home',
    };
  }

  componentDidMount() {
    document.title = TITLE;
    if (ls.get('key') === null) {
      fetch('https://ruibackend.herokuapp.com/user/getAll')
        .then((res) => res.json())
        .then((data) => ls.set('key', data, { encrypt: true }));
    }
  }

  displayCurrentPage() {
    switch (this.state.currentpage) {
      case 'Home':
        console.log('LOL');
        return <Forum />;
      case 'Forums':
      default:
    }
  }

  render() {
    return (
      <di className="text-white">
        <div className="container my-5">
          <div id="homeBackground" className="card border-white">
            <div className="row gx-0">
              <div className="col-7 mb-5 p-4">

                <h2 className="mt-5">Welcome to Tailwind!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin viverra, velit eu aliquet dapibus,
                  dolor purus ultrices nibh,
                  lobortis facilisis neque sem et erat. Praesent quis est at nulla sodales blandit vel sed elit.
                </p>
                <p>
                  Pellentesque et mattis ipsum. Nullam ornare, justo at facilisis accumsan,
                  magna arcu iaculis lorem, eget eleifend sapien nibh accumsan sem.
                  Suspendisse vitae commodo velit, id tempus ligula.
                </p>
                <p>
                  ivamus laoreet mauris vitae urna dictum tempus.
                  Fusce elementum velit in sem posuere interdum.
                  Nullam congue dapibus mauris, quis ornare diam pellentesque nec. Sed vel gravida mauris.
                </p>
              </div>

              <ul className="nav nav-tabs">
                <li className="nav-item bg-dark me-3 ms-3 ">
                  <a className="nav-link " aria-current="page" href="#Home" onClick={() => this.setState({ currentpage: 'Home' })}>Home</a>
                </li>
                <li className="nav-item bg-dark me-3">
                  <a className="nav-link" aria-current="page" href="#Forums" onClick={() => this.setState({ currentpage: 'Forums' })}>Tailwind Forums</a>
                </li>
              </ul>

              {this.displayCurrentPage()}
            </div>
          </div>
        </div>
      </di>
    );
  }
}

export default Home;
