/* eslint-disable react/style-prop-object */

import React, { Component } from 'react';
import '../styling/Search.css';
import '../styling/effects.css';
import axios from 'axios';
import { API } from '../global';

const TITLE = 'Search';
let isBusy = true;
const forumiconsize = {
  fontSize: '28px',
};

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      result: [],
      spinnerLogin: <i className="bi bi-arrow-right" style={{ fontSize: '20px' }} />,
      listOfThreadDisplay: false,
    };
  }

  componentDidMount() {
    document.title = TITLE;
  }

  handleSearch = (e) => {
    // intial clear any remaining search from previous result
    this.state.postData = <tr />;
    this.state.result = [];
    // then set a new state
    this.setState({ spinnerLogin: <div className="spinner-border spinner-border-sm" role="status" /> });
    e.preventDefault();
    axios.get(`${API}post-data`)
      .then((res) => {
        isBusy = false;
        const { data } = res;
        // if empty space, or leading empty spaces, don't show results found!!
        if (this.state.query !== '') {
          const filtered = data.filter((val) => val.title.toLowerCase().includes(this.state.query.toLowerCase()));
          this.setState({ result: filtered.reverse() });
        }

        this.mapData();
        this.setState({ listOfThreadDisplay: true });
      });
  };

  mapData() {
    if (this.state.result.length === 0 || this.state.query === '') {
      this.setState({
        postData:
          (
            <tr className="text-danger">
              <td colSpan={2}>Results Found: 0</td>
            </tr>
          ),
      });
    } else {
      this.setState((previousState) => {
        const postData = previousState.result.map((obj) => (
          <tr key={obj.id}>
            <td style={forumiconsize} className="pb-4">
              <i className="bi bi-lock-fill" />
            </td>
            <td>
              <h6>
                <a className="text-decoration-none text-white" href={`/${obj.id}-${obj.title}`}>
                  {obj.title}
                </a>
                <span className="text-muted" style={{ fontSize: '11px' }}>
                  {' '}
                  &emsp;
                  {obj.createdAt}

                </span>
              </h6>
              <p className="summaryfontsize col-md-8">
                Started By:
                {' '}
                {obj.authorId}
              </p>
            </td>
            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
              3
              <p className="summaryfontsize">Replies</p>
            </td>
            <td className="text-center d-none d-lg-table-cell d-md-table-cell d-xl-table-cell">
              0
              <p className="summaryfontsize">Views</p>
            </td>
          </tr>

        ));
        return ({ postData });
      });
    }

    this.setState({ spinnerLogin: <i className="bi bi-arrow-right" style={{ fontSize: '20px' }} /> });
  }

  render() {
    return (

      <div className="searchbackgroundcolor">
        <div style={{ paddingBottom: '18rem' }} className="container">
          <div className="row justify-content-center  ">
            <div className="col col-md-5">
              <form className="d-flex spacing-form pb-1" onSubmit={this.handleSearch}>
                <div className="input-group">
                  <div className="searchstuff">
                    <i className="bi bi-search" style={{ color: 'green' }} />
                  </div>
                  <input
                    onChange={(e) => this.setState({ query: e.target.value })}
                    className="textindented form-control form-control-lg rounded-1 SearchbgColor effect-11  shadow-none"
                    type="text"
                    placeholder="..."
                  />
                  <span className="focus-bg" />

                  <div className="input-group-prepend">

                    <button className="btn px-2 py-0 btn-primary" type="submit">{this.state.spinnerLogin}</button>
                  </div>
                </div>
              </form>

            </div>

          </div>
          {/* displays results found if >0 */}
          {!isBusy && this.state.result.length >= 1 ? (
            <span className="text-info pt-3 d-block text-center mb-2">
              Results Found:&nbsp;
              {this.state.result.length}

            </span>
          ) : ''}
          {this.state.listOfThreadDisplay ? (
            <table style={{ width: '72%', wordBreak: 'break-word' }} className="table align-middle table-borderless raisedbox caption-top mx-auto">
              <caption>List of threads</caption>
              <thead className="text-white ">
                <tr>
                  <th style={{ width: '2%' }} className="col border-bottom "> </th>
                  <th className="col-6 border-bottom "> </th>
                  <th className="col-2 text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
                  <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell" style={{ width: '13%' }}> </th>
                  <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
                </tr>
              </thead>
              <tbody className="text-white">
                {/* lists the actual results or error if <0 */}
                {!isBusy ? this.state.postData : <tr />}
              </tbody>

            </table>
          ) : ''}

        </div>

      </div>

    );
  }
}

export default Search;
