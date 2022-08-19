/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import '../styling/Search.css';
import axios from 'axios';

const TITLE = 'Search';
let isBusy = true;
const SEARCH = 'Search';
const forumiconsize = {
  fontSize: '28px',
};

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      result: [],
      spinnerLogin: SEARCH,

    };
  }

  componentDidMount() {
    document.title = TITLE;
  }

  handleSearch = (e) => {
    // intial clear any remaining search from previous result
    this.state.postData = '';
    this.state.result = [];
    // then set a new state
    this.setState({ spinnerLogin: <div className="spinner-border spinner-border-sm" role="status" /> });
    e.preventDefault();
    axios.get('https://ruibackend.herokuapp.com/post-data')
      .then((res) => {
        isBusy = false;
        const { data } = res;
        // if empty space, or leading empty spaces, don't show results found!!
        if (this.state.query !== '') {
          const filtered = data.filter((val) => val.title.toLowerCase().includes(this.state.query.toLowerCase()));
          this.setState({ result: filtered });
        }

        this.mapData();
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
      const postData = this.state.result.map((obj) => (
        <tr key={obj.id}>
          <td style={forumiconsize} className="pb-4">
            <i className="bi bi-lock-fill" />
          </td>
          <td>
            <h6>
              {obj.title}
              <span className="text-muted" style={{ fontSize: '11px' }}>&nbsp;&nbsp;&nbsp; 3 weeks ago</span>
            </h6>
            <p className="summaryfontsize col-md-8">Started By: Ben</p>
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
      this.setState({ postData });
    }

    this.setState({ spinnerLogin: SEARCH });
  }

  render() {
    return (

      <div className="searchbackgroundcolor ">
        <div className="container ">
          <div className="row justify-content-center  ">
            <div className="col">
              <form className="d-flex spacing-form pb-1" onSubmit={this.handleSearch}>
                <div className="input-group">
                  <div className="searchstuff">
                    <i className="bi bi-search" />
                  </div>
                  <input
                    onChange={(e) => this.setState({ query: e.target.value })}
                    className="textindented form-control form-control-lg rounded-1 "
                    type="text"
                    placeholder="..."
                  />

                  <div className="input-group-prepend">

                    <button className="btn btn-md btn-warning " type="submit">{this.state.spinnerLogin}</button>
                  </div>
                </div>
              </form>

            </div>

          </div>
          {/* displays results found if >0 */}
          {!isBusy && this.state.result.length >= 1 ? (
            <span className="text-info pt-3 d-block text-center">
              Results Found:&nbsp;
              {this.state.result.length}

            </span>
          ) : ''}

          <table style={{ paddingBottom: '14rem' }} className="table align-middle table-borderless ">
            <thead className="text-white ">
              <tr>
                <th style={{ width: '2%' }} className="col border-bottom "> </th>
                <th className="col-6 border-bottom "> </th>
                <th className="col-2 text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
                <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell" style={{ width: '13%' }}> </th>
                <th className="text-center border-bottom d-none d-lg-table-cell d-md-table-cell d-xl-table-cell"> </th>
              </tr>
            </thead>
            <tbody className="text-white ">
              {/* lists the actual results or error if <0 */}

              {!isBusy ? this.state.postData : (
                <tr className="d-flex align-items-center text-white">
                  <td />
                </tr>
              )}
            </tbody>

          </table>

        </div>

      </div>

    );
  }
}

export default Search;
