import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (

            <footer className='position-relative bg-light text-muted'>
                <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
        
                    <div>
                        <a href='mailto: huangben32@gmail.com' className='me-4 text-reset'><i className="bi bi-envelope"></i></a>
                        <a href='https://github.com/RuiQiHuang1832' className='me-4 text-reset'><i className="bi bi-github"></i></a>
                        <a className='me-4 text-reset'><i className="bi bi-instagram"></i></a>
                        <a href='https://www.linkedin.com/in/rui-qi-huang-528a43220/' className='me-4 text-reset'><i className="bi bi-linkedin"></i></a>
                        <a className='me-4 text-reset'><i className="bi bi-discord"></i></a>
                    </div>
                </section>

                <section className='border-bottom'>
                    <div className='container text-center text-sm-start mt-4'>
                        <div className='row'>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    About Us
                                </h6>
                                <p>
                                Overflow is a community where you can make new friends, participate in active discussions and much more.
                                </p>
                            </div>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    Disclaimer
                                </h6>
                                <p>
                                Overflow provides links to other sites on the internet and doesn't host any files itself.
                                </p>
                            </div>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    Navigation
                                </h6>
                             
                               <div><a>Upgrade</a></div>
                               <div><Link className='text-body' to="/tos">Terms of Service </Link></div>
                               <div><Link className='text-body' to="/faq">FAQ </Link></div>
                             
                            </div>
                        </div>
                        
                    </div>

                </section>
                <section>
                    <div style={{backgroundColor:"#36BCE8", color:"black" }} className='text-center p-2'>
                    © 2021 Copyright. All Rights Reserved.
                    </div>
                </section>

            </footer>
        )
    }
}




export default Footer
