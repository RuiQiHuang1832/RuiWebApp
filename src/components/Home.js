import React, { Component } from 'react'
import '../styling/Home.css'

const TITLE = "Home";

export class Home extends Component {
    componentDidMount() {
        document.title = TITLE;
    }
    render() {
        return (
            <div id='homeBackground' className='text-white'>
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
        )
    }
}

export default Home
