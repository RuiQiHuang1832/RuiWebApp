import React, { Component } from 'react';
import "../styling/Search.css"

//add header title 
//put search inside the input bar
const TITLE = "Search"

export class Search extends Component {
    componentDidMount() {
        document.title = TITLE;
    }
    render() {
        return (
            <div className='container vh-100'>
                <div className='row justify-content-center  '>
                    <div className='col  '>
                        <form className='d-flex spacing-form '>

                            <input className='form-control' type="search" placeholder="Search" />
                            <button className='btn btn-warning' type='submit'>Search</button>
                        </form>

                    </div>

                </div>

            </div>
        )
    }
}

export default Search;
