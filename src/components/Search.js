import React, { Component } from 'react';
import "../styling/Search.css"



const TITLE = "Search"

export class Search extends Component {
    componentDidMount() {
        document.title = TITLE;
    }
    render() {
        return (
            <div className='searchbackgroundcolor'>
                <div className='container vh-100 '>
                    <div className='row justify-content-center  '>
                        <div className='col  '>
                            <form className='d-flex spacing-form '>
                                <div className='input-group'>
                                    <div className='searchstuff'>
                                        <i className="bi bi-search"></i>
                                    </div>
                                    <input className='textindented form-control form-control-lg rounded-1 ' type="search" placeholder='...' />

                                    <div className='input-group-prepend'>

                                        <button className='btn btn-md btn-warning ' type='submit'>Search</button>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div >

                </div >
            </div>
        )
    }
}





export default Search;
