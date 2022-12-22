/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import '../styling/MembersPagination.css';
import { API, BREADCRUMB_PATH } from '../global';
import Breadcrumbs from './Breadcrumbs';

export default class MembersPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 8,
            currentPage: 0,
            pageCount: 5,
            isBusy: false,
            page: window.location.pathname.split('/')[2],
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    receivedData() {
        this.setState({ isBusy: true });
        fetch(`${API}users/datalist`)
            .then((response) => response.json())
            .then((data) => {
                const slice = data.slice(
                    this.state.offset,
                    this.state.offset + this.state.perPage,
                );

                const postData = slice.map((obj) => (

                    <tr className="text-white" key={obj.id}>
                        <td>{obj.id}</td>
                        <td><a className="text-reset text-decoration-none" href={`/userDashboard/${obj.username}-${obj.id}`}>{obj.username}</a></td>
                        <td>USER</td>
                    </tr>
                ));
                this.setState({ pageCount: Math.ceil(data.length / this.state.perPage), postData, isBusy: false });
            });
    }

    // named arrow function
    handlePageClick(e) {
        window.history.replaceState(null, '', `/members/${e.selected + 1}`);
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState(
            {
                currentPage: selectedPage,
                offset,
            },
            () => {
                this.receivedData();
            },
        );
    }

    componentDidMount() {
        this.receivedData();
    }

    render() {
        return (
            <section>
                <Breadcrumbs path={BREADCRUMB_PATH.Members} />

                <div className="text-white">
                    <div className="container">
                        <h1 className="pt-3">Members List</h1>
                        <div>
                            <table className="table text-white">
                                <thead>
                                    <tr>
                                        <th style={{ width: '25%' }} scope="col">ID</th>
                                        <th style={{ width: '25%' }} scope="col">Members</th>
                                        <th scope="col">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!this.state.isBusy ? this.state.postData : (
                                        <tr className="d-flex align-items-center">
                                            <td>Loading... &nbsp;</td>
                                            <td className="spinner-border" role="status" aria-hidden="true" />
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <nav aria-label="Page navigation comments " className="py-5">
                                <ReactPaginate
                                    previousLabel="&laquo;"
                                    nextLabel="&raquo;"
                                    breakLabel="..."
                                    breakClassName="page-item bgcolor"
                                    breakLinkClassName="page-link"
                                    pageCount={this.state.pageCount}
                                    pageRangeDisplayed={4}
                                    marginPagesDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName="pagination justify-content-center fs-4 "
                                    pageLinkClassName="page-link bgcolor border-0 shadow-none "
                                    previousClassName="page-item "
                                    previousLinkClassName="page-link bgcolor border-0 "
                                    nextClassName="page-item "
                                    nextLinkClassName="page-link bgcolor border-0 "
                                    activeClassName="page-item active "
                                    initialPage={this.state.page - 1}

                                />
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
/**
 * This is arguably the best approach because it uses a property that is unique for each item in the dataset.
 * For example, if rows contains data fetched from a database, one could use the table's Primary Key (which typically is an auto-incrementing number).
 * The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys
 * Unique - A key cannot be identical to that of a sibling component.
 * Static - A key should not ever change between renders.
 */
