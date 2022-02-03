import React, { Component } from 'react'
import "../styling/Upgrade.css"
import VIPbanner from '../images/vip.png'

//format code.. hungry delete
//themeatic colors for each
//linking buys
//colors for icons (maybe)

export class Upgrade extends Component {
    render() {
        return (
            <div>
                <div style={{ background: "#161618" }} className='container-fluid p-0 p-lg-5 p-md-5 p-sm-5 '>
                    <div className='row  '>
                        <div className='col '>
                            <div style={{ background: "rgb(36, 36, 36)" }}> {/**style={{ background: "rgb(36, 36, 36)" }} v white lines */}
                                <div className='card-body'>
                                    <div className='row justify-content-center'> {/**Gap-4 ^ */}

                                        {/**1st COLUMN */}
                                        <div className='col-lg-4 col-md-7 col-sm-10  '>
                                            <div id="theborderstart" className='card my-5 '>
                                                <div className='d-inline-flex  p-2 w-100 gradient-custom-1 justify-content-between'>
                                                    <div className='fs-5 ms-2 text-white'>VIP</div>
                                                    <div className='fs-5 text-white'>$10.00</div>
                                                </div>
                                                <div id='borderRadius' >
                                                    <div className='row'>
                                                        <table className='table '>
                                                            <tbody id="content">
                                                                <tr className='border border-white'>
                                                                    <td><div className='ms-2'> Length:</div></td>
                                                                    <td><div className='text-center '> 1 Month </div></td>
                                                                </tr>
                                                                <tr className='border border-white bg-info '>
                                                                    <td colSpan={2}><div className=' text-center text-white text-nowrap'><span className='text-danger'>VIP</span> Userbar</div></td>
                                                                    {/**colSpan allows me to use the full width of the row! This the right way to code for text-center!!*/}
                                                                </tr>

                                                                <tr className='border border-white '>
                                                                    <td colSpan={2}><div id="vipMargin" className='text-center'><img src={VIPbanner} className='img-fluid' width="220" /></div></td>

                                                                </tr>

                                                                <tr className=' bg-info '>
                                                                    <td colSpan={2}><div className='text-center text-white text-nowrap'><span className='text-danger'>VIP</span> Upgrade Perks</div></td>

                                                                </tr>
                                                                <tr className='  '>
                                                                    <td><div className='ms-2 mb-2'> A new cool username style.</div></td>
                                                                    <td><div className=' text-center text-info'>John&nbsp;Doe</div></td>
                                                                </tr>
                                                                <tr className='   '>
                                                                    <td><div className='ms-2'> <span className='text-danger'>VIP</span> Award </div></td>
                                                                    <td><div className='text-center '> <i style={{ fontSize: " 18px", color: "cornflowerblue" }} class=" bi bi-gem"></i> </div></td>
                                                                </tr>
                                                                <tr className=''>
                                                                    <td><div className='ms-2 '> Bypass the requirements to unlock hidden content.</div></td>
                                                                    <td><div className='text-center mt-1 '> <i style={iconFontSize} class="bi bi-lock-fill"></i> </div></td>
                                                                </tr>
                                                                <tr className=''>
                                                                    <td><div className='ms-2 mb-2 mt-1'>Access to <span className='text-danger'>VIP</span> exclusive forums. </div></td>
                                                                    <td><div className='text-center'> <i style={iconFontSize} class="bi bi-star-fill"></i> </div>  </td>
                                                                </tr>
                                                                <tr className=''>
                                                                    <td> <div className='ms-2'>Storage for 5,000 messages.</div>  </td>
                                                                    <td> <div className='text-center '> <i style={iconFontSize} class="bi bi-envelope-check-fill"></i> </div></td>
                                                                </tr>
                                                                <tr className=''>
                                                                    <td><div className='ms-2'>Able to change display name 1 time every month.</div></td>
                                                                    <td><div className='text-center '> <i style={iconFontSize} class="bi bi-body-text"></i> </div></td>
                                                                </tr>
                                                                <tr className=''>
                                                                    <td><div className='ms-2'>Able to change your username.</div></td>
                                                                    <td><div className='text-center '> <i style={iconFontSize} class="bi bi-collection-fill"></i> </div> </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="d-flex justify-content-center">
                                                            <button type='button' className='text-dark text-center mb-3  btn btn btn-outline-info'> Buy VIP </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/**2nd COLUMN */}
                                        <div className='col-lg-4 col-md-7 col-sm-10  h-200'>
                                            <div className=' '>
                                                <div className='d-flex justify-content-center mb-3 '> <span id="bestvaluetag" className='badge rounded-pill bg-warning border border-dark fs-6 '>Best Value</span> </div>
                                                <div id="thebordermiddle">
                                                    <div className='d-inline-flex  p-2 w-100 gradient-custom-7 justify-content-between'>
                                                        <div className='fs-5 ms-2 text-white'>AQUA</div>
                                                        <div className='fs-5 text-white '>$35.00</div>
                                                    </div>
                                                    <div id='borderRadius' className=' bg-body '>
                                                        <div className='row '>
                                                            <table className='table '>
                                                                <tbody id="content" className=''>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2'> Length:</div></td>
                                                                        <td><div className='text-center '> Lifetime </div></td>
                                                                    </tr>
                                                                    <tr className=' '>
                                                                        <td><div className='ms-2 mb-2'> A new cool username style.</div></td>
                                                                        <td><div className=' text-center text-danger'>John&nbsp;Doe</div></td>
                                                                    </tr>
                                                                    <tr className='   '>
                                                                        <td><div className='ms-2'> <span className='text-info'>AQUA</span> Award </div></td>
                                                                        <td><div className='text-center '> <i style={{ fontSize: " 18px", color: "cornflowerblue" }} class=" bi bi-gem"></i> </div></td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2 '> Bypass the requirements to unlock hidden content.</div></td>
                                                                        <td> <div className='text-center mt-1 '> <i style={iconFontSize} class="bi bi-lock-fill"></i> </div>  </td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2 mb-2 mt-1'>Access to <span className='text-danger'>VIP</span> exclusive forums. </div> </td>
                                                                        <td><div className='text-center'> <i style={iconFontSize} class="bi bi-star-fill"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2'>Storage for 5,000 messages.</div> </td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-envelope-check-fill"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2'>Able to change display name 1 time every month.</div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-body-text"></i> </div></td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2'>Able to change your username.</div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-collection-fill"></i> </div></td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2 text-primary'>Able to choose cover page</div></td>
                                                                        <td>{/**100% width border line*/}</td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2 text-primary'>Can rename to banned members</div></td>
                                                                        <td>{/**100% width  border line*/}</td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2 text-primary'>Ability to change the color of your userbar</div></td>
                                                                        <td>{/**100% width border line */}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="d-flex justify-content-center">
                                                                <button type='button' className='text-dark text-center mb-3  btn btn btn-outline-info'> Buy AQUA </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/**3rd COLUMN */}
                                        <div className='col-lg-4 col-md-7 col-sm-10  '>
                                            <div className=' my-5 border-0 '>
                                                <div id="theborderend" className='card my-5 '>
                                                    <div className='d-inline-flex  p-2 w-100 gradient-custom-6 justify-content-between'>
                                                        <div className='fs-5 ms-2 text-white'>NOVA</div>
                                                        <div className='fs-5 text-white '>$50.00</div>
                                                    </div>
                                                    <div id='borderRadius' className='  '>
                                                        <div className='row '>
                                                            <table className='table '>
                                                                <tbody id="content" className=''>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2'> Length:</div></td>
                                                                        <td><div className='text-center '> Lifetime </div></td>
                                                                    </tr>
                                                                    <tr className=' '>
                                                                        <td><div className='ms-2 mb-2'> A new cool username style.</div></td>
                                                                        <td><div className=' text-center text-warning'>John&nbsp;Doe</div></td>
                                                                    </tr>
                                                                    <tr className='   '>
                                                                        <td> <div className='ms-2'> <span className='text-warning'>NOVA</span> Award </div></td>
                                                                        <td> <div className='text-center '> <i style={{ fontSize: " 18px", color: "cornflowerblue" }} class=" bi bi-gem"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td> <div className='ms-2 '> Bypass the requirements to unlock hidden content.</div>  </td>
                                                                        <td> <div className='text-center mt-1 '> <i style={iconFontSize} class="bi bi-lock-fill"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2 mb-2 mt-1'>Access to <span className='text-danger'>VIP</span> exclusive forums. </div> </td>
                                                                        <td><div className='text-center'> <i style={iconFontSize} class="bi bi-star-fill"></i> </div></td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2'>Storage for 5,000 messages.</div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-envelope-check-fill"></i> </div> </td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2'>Able to change display name 1 time every month.</div> </td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-body-text"></i> </div></td>
                                                                    </tr>
                                                                    <tr className=''>
                                                                        <td><div className='ms-2'>Able to change your username.</div></td>
                                                                        <td><div className='text-center '> <i style={iconFontSize} class="bi bi-collection-fill"></i> </div></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="d-flex justify-content-center">
                                                                <button type='button' className='text-dark text-center mb-3  btn btn btn-outline-info'> Buy Nova </button>
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
            </div>
        )
    }
}

const iconFontSize = {
    fontSize: " 18px"
}

export default Upgrade
