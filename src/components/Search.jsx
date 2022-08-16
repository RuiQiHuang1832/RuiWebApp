/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import '../styling/Search.css';
import axios from 'axios';

const TITLE = 'Search';
let isBusy = true;
const SEARCH = 'Search';

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
              <td>0 Results Found</td>
            </tr>
          ),
      });
    } else {
      const postData = this.state.result.map((obj) => (
        <tr className="text-white" key={obj.id}>
          <td>{obj.title}</td>
        </tr>
      ));
      this.setState({ postData });
    }

    this.setState({ spinnerLogin: SEARCH });
  }

  render() {
    return (

      <div className="searchbackgroundcolor">
        <div className="container vh-100 ">
          <div className="row justify-content-center  ">
            <div className="col  ">
              <form className="d-flex spacing-form " onSubmit={this.handleSearch}>
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
          <table>
            <tbody>
              {/* displays results found if >0 */}
              {!isBusy && this.state.result.length >= 1 ? (
                <span className="text-info">
                  Results Found:
                  {this.state.result.length}

                </span>
              ) : ''}
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
