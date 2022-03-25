import React, { Component } from 'react';
import '../styling/Home.css';
import ls from 'localstorage-slim';

const TITLE = 'Home';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   ip_address: '',
    //   city: '',
    //   continent: '',
    //   region: '',
    //   timezone: ''
    };
  }
  /**
   * privatize this in a filter and return that..cuz IP address and email is shown.. TODO
   *
   * */

  componentDidMount() {
    document.title = TITLE;
    if (ls.get('key') === null) {
      fetch('https://ruibackend.herokuapp.com/user/getAll')
        .then((res) => res.json())
        .then((data) => ls.set('key', data, { encrypt: true }));
    }
  }

  // componentDidMount() {
  //   document.title = TITLE;
  //   // axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=0761240eebc74e768f377af56ed0058a')
  //   //     .then(response => {
  //   //         // console.log(response.data);
  //   //         this.setState({
  //   //             city: response.data.city,
  //   //             ip_address: response.data.ip_address,
  //   //             timezone: response.data.timezone.abbreviation,
  //   //             continent: response.data.continent,
  //   //             region: response.data.region
  //   //         })
  //   //     })
  //   //     .catch(error => {
  //   //         console.log(error);
  //   //     });
  // }

  render() {
    return (
      <div id="homeBackground" className="text-white">
        {/* <p>{this.state.city}</p>
                <p>{this.state.ip_address}</p>
                <p>{this.state.timezone}</p>
                <p>{this.state.continent}</p>
                <p>{this.state.region}</p> */}
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <p>The footer is placed at the bottom of the page.</p>
        <div>The footer is placed at the bottom of the page.</div>
      </div>
    );
  }
}

export default Home;
