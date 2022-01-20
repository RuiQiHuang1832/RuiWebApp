import React, { Component } from 'react'
import "../styling/Upgrade.css"


export class Upgrade extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid p-3'>
                    <div className='row  '>
                        <div className='col '>
                            <div className='card '>
                                <div className='card-body '>
                                    <div className='row justify-content-center gap-4'>
                                        <div className='col-lg-3 col-md-7 col-sm-10 '>
                                            <div className='card border-0 py-5' >
                                                <div id='borderRadius' className='card-body border border-dark shadow bg-body '>
                                                    <div className='row px-2 '>
                                                        <div className='col d-flex border border-dark pt-2 gradient-custom-1'>
                                                            <h5 className=' text-white'>VIP</h5>
                                                            <div className='ms-auto text-dark text-end'>$10.00</div>

                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3 '>Length:</div>
                                                            <div className='my-3 ms-auto text-end'>1 Month</div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>A new cool username style.</div>
                                                            <div className='my-3 ms-auto text-end text-success'>John Doe</div>
                                                        </div> <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'><span className='text-danger'>VIP</span> Award</div>
                                                            <div className='my-2 ms-auto text-end'><i style={{ fontSize: " 25px", color: "cornflowerblue" }} class=" bi bi-gem"></i></div>
                                                        </div> <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Bypass the requirements to unlock hidden content.</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-lock-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Access to <span className='text-danger'>VIP</span> exclusive forums.	</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-star-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Storage for 5,000 messages.</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-envelope-check-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Able to change display name 1 time every month</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-body-text"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3 '>Able to change your username</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-collection-fill"></i></div>
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                            <button type='button' className='text-dark text-center m-2 mt-3 btn btn btn-outline-info'>
                                                                Buy VIP
                                                            </button>
                                                        </div>


                                                    </div>


                                                </div>


                                            </div>
                                        </div>

                                        <div className='col-lg-3 col-md-7 col-sm-10 h-200'>
                                            <div className='card py-2 border-0 '>
                                                <div className='d-flex justify-content-center mb-3 '>
                                                    <span id="bestvaluetag" className='badge rounded-pill bg-warning fs-6 '>Best Value</span>
                                                </div>
                                                <div id='borderRadius' className='card-body border border-dark '>
                                                    <div className='row px-2 '>
                                                        <div className='col d-flex border border-dark pt-2 gradient-custom-5 '>
                                                            <h5 className=' text-white'>AQUA</h5>
                                                            <div className='ms-auto text-dark text-end'>$35.00</div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3 '>Length:</div>
                                                            <div className='my-3 ms-auto text-end'>Lifetime</div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>A new cool username style.</div>
                                                            <div className='my-3 ms-auto text-end text-success'>John Doe</div>
                                                        </div> <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'><span className='text-info'>AQUA</span> Award</div>
                                                            <div className='my-2 ms-auto text-end'><i style={{ fontSize: " 25px", color: "cornflowerblue" }} class=" bi bi-gem"></i></div>
                                                        </div> <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Bypass the requirements to unlock hidden content.</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-lock-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Access to <span className='text-info'>AQUA</span> exclusive forums.	</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-star-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Storage for 5,000 messages.</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-envelope-check-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Able to change display name 1 time every month</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-body-text"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3 '>Able to change your username</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-collection-fill"></i></div>
                                                        </div>

                                                        <div className='d-flex border-bottom border-dark text-primary'>
                                                            <div className='my-3 '>Able to choose cover page</div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark text-primary'>
                                                            <div className='my-3 '>Can rename to banned members</div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark text-primary'>
                                                            <div className='my-3 '>Ability to change the color of your userbar</div>
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                            <button type='button' className='text-dark text-center m-2 mt-3 btn btn btn-outline-info'>
                                                                Buy AQUA
                                                            </button>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-3 col-md-7 col-sm-10 '>
                                            <div className='card py-5 border-0 '>
                                                <div id='borderRadius' className='card-body border border-dark shadow bg-body'>
                                                    <div className='row px-2'>
                                                        <div className='col d-flex border border-dark pt-2 gradient-custom-6'>
                                                            <h5 className=' text-white'>NOVA</h5>
                                                            <div className='ms-auto text-dark text-end'>$50.00</div>

                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3 '>Length:</div>
                                                            <div className='my-3 ms-auto text-end'>Lifetime</div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>A new cool username style.</div>
                                                            <div className='my-3 ms-auto text-end text-success'>John Doe</div>
                                                        </div> <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'><span className='text-warning'>NOVA</span> Award</div>
                                                            <div className='my-2 ms-auto text-end'><i style={{ fontSize: " 25px", color: "cornflowerblue" }} class=" bi bi-gem"></i></div>
                                                        </div> <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Bypass the requirements to unlock hidden content.</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-lock-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Access to <span className='text-warning'>NOVA</span> exclusive forums.	</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-star-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Storage for 5,000 messages.</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-envelope-check-fill"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3'>Able to change display name 1 time every month</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-body-text"></i></div>
                                                        </div>
                                                        <div className='d-flex border-bottom border-dark'>
                                                            <div className='my-3 '>Able to change your username</div>
                                                            <div className='my-2 ms-auto text-end'><i style={iconFontSize} class="bi bi-collection-fill"></i></div>
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                            <button type='button' className='text-dark text-center m-2 mt-3 btn btn btn-outline-info'>
                                                                Buy NOVA
                                                            </button>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const iconFontSize = {
    fontSize: " 25px"
}

export default Upgrade
