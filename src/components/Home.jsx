/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-dupe-class-members */
import { SelfBuildingSquareSpinner } from 'react-epic-spinners';
import React, { Component } from 'react';
import '../styling/Home.css';
import ls from 'localstorage-slim';
import Forum from './Tabs/Forum';
import Coding from './Tabs/Coding';
import Investing from './Tabs/Investing';
import Miscellaneous from './Tabs/Miscellaneous';
import Gaming from './Tabs/Gaming';
import CurrencyData from './HomeSideColumn/CurrencyData';
import Announcements from './HomeSideColumn/Announcements';
import RecentTopics from './HomeSideColumn/RecentTopics';
import { API, BREADCRUMB_PATH, NAME } from '../global';
import Breadcrumbs from './Breadcrumbs';

let isHerokoBusy = true;

const TITLE = 'Home';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '94680c26cemsha1f6b30a6f8fca0p1d8a93jsn2088f83d240f',
//     'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
//   },
// };

// let ticker1;
// let ticker2;
// let ticker3;

// loads twice because: assuming:
// on first load it clears ls, but since it hasn't gotten the data yet,
// it will display another error and on the second go, the data is retrieved and put into our ls,
// so no more errors.

// ENABLE ONLY IN TESTING:
// window.onerror = () => {
//   if (window.confirm('IS LOCAL STORAGE UPDATED? OK: REFRESH CACHE AND TRY AGAIN. CANCEL: COMMENT THIS OUT IN HOME.JSX')) {
//     ls.clear();
//     console.log('CLEARED');
//     window.location.href = '/';
//   } else {
//     alert('ERROR IS NOT IN LS');
//   }
// };
let interval;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentpage: 'Forums',
      symbol: [],
      price: [],
      volume: [],
      isBusy: false,
      data: undefined,
    };

    // If user intentionally updates local storage, refresh LS.
    // Basically for myself only..testing purposes only.
  }

  // response.quoteResponse.result[0].regularMarketPrice
  // cache it buddy
  componentDidMount() {
    // needed for when there are no entries in DB, nothing loads
    // 6 because there has to be 2 in each. 2 x 3 forums = 6
    if (ls.get('dbAmt') <= 6) {
      ls.remove('forumData');
      ls.remove('previousforumData');
    }
    // interval = setInterval(() => {
    //   this.refetchData();
    // }, 10000);
    document.title = TITLE;
    if (ls.get('key') === null) {
      this.setState({ isBusy: true });
      fetch(`${API}users/datalist`)
        .then((res) => res.json())
        .then((data) => ls.set('key', data, { encrypt: true }))
        .then(() => {
          this.setState({ isBusy: false });
          isHerokoBusy = this.state.isBusy;
          window.location.href = '/';
        });
    }

    if (ls.get('recentPost') === null) {
      fetch(`${API}post-data`)
        .then((response) => response.json())
        .then((data) => {
          const lastData = data.slice(-3);
          ls.set('recentPost', lastData);
        }).then(() => {
          this.renderRecentPost();
        });
    }
    if (ls.get('recentPost') !== null) {
      this.renderRecentPost();
    }
    // if (ls.get('ticker') === null) {
    //   // default
    //   ticker1 = 'TSLA';
    //   ticker2 = 'AAPL';
    //   ticker3 = 'AMD';
    // } else {
    //   // user obtained
    //   const tickers = ls.get('ticker', { decrypt: true });
    //   ticker1 = tickers[0];
    //   ticker2 = tickers[1];
    //   ticker3 = tickers[2];
    // }

    // const currency = `https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${ticker1}%2C${ticker2}%2C${ticker3}`;

    // fetch(currency, options)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     const res = response.quoteResponse.result;
    //     for (const x in res) {
    //       this.setState({ symbol: [...this.state.symbol, res[x].symbol] });
    //       this.setState({ price: [...this.state.price, res[x].regularMarketPrice] });
    //       this.setState({ volume: [...this.state.volume, res[x].regularMarketVolume] });
    //     }
    //   })
    //   .catch((err) => console.error(err));
  }

  componentWillUnmount() {
    clearInterval(interval);
    console.log('Unmounting');
  }

  displayCurrentPage() {
    switch (this.state.currentpage) {
      case 'Forums':
        return <Forum />;
      case 'Coding':
        return <Coding />;
      case 'Investing':
        return <Investing />;
      case 'Miscellaneous':
        return <Miscellaneous />;
      case 'Gaming':
        return <Gaming />;
      default:
    }
  }

  renderRecentPost() {
    let data = ls.get('recentPost');
    data = data.reverse();
    this.setState({ data });
  }

  // new way to fetch data with interval instead of doing it everytime user clicks on
  // the template page. This makes for an easier load too.
  // refetchData() {
  //   ls.remove('forumData');
  //   ls.remove('recentPost');
  // }

  render() {
    if (this.state.isBusy || this.state.data === undefined) {
      return (
        <div style={{ height: '500px' }} className="centerAll">
          <div>
            <div className="d-flex justify-content-center">
              <SelfBuildingSquareSpinner size="50" color="rgb(52,159,182)" className="mb-5" />
            </div>
            <div className="text-white loading">Loading...</div>
          </div>
        </div>
      );
    }

    return (

      <section className="text-white hugepadding ps-2">

        <Breadcrumbs path={BREADCRUMB_PATH.Home} />

        <div className="container-fluid ps-md-5 py-5 ">
          <div id="homeBackground" className="card border-0">

            <div className="row gx-0">
              <div className=" col-lg-9 mb-5 pt-4 ">

                <div className="col-lg-8 ps-3 mb-5">

                  <h1 className="mt-3 mb-4">
                    Welcome to
                    {' '}
                    {NAME}
                    !
                  </h1>
                  <p>
                    <strong>Everyone is invited! </strong>
                    The
                    {' '}
                    {NAME}
                    {' '}
                    discussions are for everyone, new and advanced users alike!
                  </p>
                  <p>
                    <strong>Searching is key! </strong>
                    Remember to search for threads before posting new ones! This helps
                    to reduce clutter and gets your question answered more quickly
                  </p>
                  <p>
                    <strong>Be respectful! </strong>
                    Do not start flame wars! If someone is engaged in behavior that is
                    detrimental to the message board such as spamming, flaming, etc -- contact one of the moderators!
                    <strong> Harrassment is not tolerated.</strong>
                  </p>
                </div>
                <div className="">
                  <ul className="nav nav-pills border-0 flex-lg-row flex-column ">
                    <li className="nav-item mb-3 mb-lg-0  me-3 ms-lg-3 border rounded border-2 tabcolor">
                      <a className="nav-link text-white" aria-current="page" data-bs-toggle="pill" href="#Home" onClick={() => this.setState({ currentpage: 'Forums' })}>
                        <i className="bi bi-house-fill" />
                        &nbsp;Home
                      </a>
                    </li>
                    <li className="nav-item me-3 mb-3 mb-lg-0 border  rounded border-2 tabcolor">
                      <a className="nav-link text-white" aria-current="page" data-bs-toggle="pill" href="#Forums" onClick={() => this.setState({ currentpage: 'Coding' })}>
                        <i className="bi bi-file-earmark-code-fill" />
                        &nbsp;Coding
                      </a>
                    </li>
                    <li className="nav-item me-3 mb-3 mb-lg-0 border  rounded border-2 tabcolor">
                      <a className="nav-link text-white" aria-current="page" data-bs-toggle="pill" href="#Forums" onClick={() => this.setState({ currentpage: 'Investing' })}>
                        <i className="bi bi-currency-exchange" />
                        &nbsp;Investing
                      </a>
                    </li>
                    <li className="nav-item me-3 mb-3 mb-lg-0 border rounded border-2 tabcolor">
                      <a className="nav-link text-white" aria-current="page" data-bs-toggle="pill" href="#Forums" onClick={() => this.setState({ currentpage: 'Gaming' })}>
                        <i className="bi bi-joystick" />
                        &nbsp;Gaming
                      </a>
                    </li>
                    <li className="nav-item me-3 mb-3 mb-lg-0 border rounded border-2 tabcolor">
                      <a className="nav-link text-white" aria-current="page" data-bs-toggle="pill" href="#Forums" onClick={() => this.setState({ currentpage: 'Miscellaneous' })}>
                        <i className="bi bi-unity" />
                        &nbsp;Miscellaneous
                      </a>
                    </li>
                  </ul>
                </div>
                {this.displayCurrentPage()}
              </div>

              <div className="col-3 d-none d-lg-block d-xl-block">
                <CurrencyData stocksymbol={this.state.symbol} stockprice={this.state.price} stockvolume={this.state.volume} />
                <Announcements />
                <RecentTopics data={this.state.data} />

              </div>

            </div>
          </div>
        </div>
      </section>

    );
  }
}

export { isHerokoBusy };
